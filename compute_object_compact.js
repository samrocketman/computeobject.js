/**
 * @author Sam Gleske (sag47@drexel.edu|sam.mxracer@gmail.com)
 * @copyright 2005-2010 Sam Gleske
 * @link http://www.gleske.net/
 * @link http://www.sourceforge.net/projects/webtechtools/
 * @created 05/06/2010
 * @version 0.1
 * @description 
 *     compute object, where all of the human readable math computational functions are done inside of a single object.
 *     This is compacted into a single object so it is easy to rename when incorporating this library into an application.
 *     Simply feed this object a human readable computational string and it will return a result of the calculations.
 *     With extensive equation error checking this JavaScript math library is one of the best for human readable web 
 *     calculators.
 *     
 *     Examples of human readable computations this library can handle that are unique to this library:
 *         compute.result("2^3") returns 8
 *         compute.result("16^(1/2)") returns 4
 *     
 *     If you are using the value of an input element then it is best to convert the value to a string before computing the
 *     result.  For example
 *         compute.result(document.getElementById("myElementId").value.toString())
 * 
 * @documentation
 * FUNCTION documentation format...
 *     compute.function(argument); argument types separated by commas; return type
 *         Description:
 *             description of the functions uses.
 *         Example usage:
 *             compute.function(someargument) returns somevalue
 * 
 *     compute.result(str); str typeof="string"; returns typeof="number"
 *         Description:
 *             This is the main computational parser.  Access the main functionality of the math library through this function.
 *             List of Math Functions and their inverses available:
 *                 tan(x) and atan(x)
 *                 sin(x) and asin(x)
 *                 cos(x) and acos(x)
 *                 pi
 *                 e^y and ln(x)
 *                 10^y and log(x)
 *                 x^y and ln(x^y)/ln(x)
 *                 +, -, *, / basic arithmatic
 *                 ^ exponential function
 *                 % modulo
 *                 >> shift right
 *                 << shift left
 *                 
 *         Example usage:
 *             compute.result("2^3") returns 8
 *             compute.result("16^(1/2)") returns 4
 *             compute.result("atan(tan(5))") returns 5
 *             compute.result("ln(3^2)/ln(3)") returns 2
 *             compute.result("e^1") returns 2.718281828459045
 *             compute.result("2e3") returns 2000
 *             compute.result("45*2^2") returns 180
 *             compute.result("45<<2") returns 180
 *             
 *     compute.changeSign(str); str typeof="string"; returns typeof="string" or returns false
 *         Description:
 *             Takes a string equation and returns that same equation as a string wrapped with a negative value.
 *         Example usage:
 *             compute.changeSign("-(5+5)+3^2") returns "-(-(5+5)+3^2)"
 *             compute.changeSign("5") returns "-5"
 *             compute.changeSign("-(5+5)") returns "5+5"
 * 
 *     compute.roundFloat(num,float); num typeof="number",float typeof="number"; returns typeof="number"
 *         Description:
 *             Round the float of a number both forwards and backwards.
 *         Example usage:
 *             compute.roundFloat(125.125,1) returns 125.1
 *             compute.roundFloat(125.125,-1) returns 130
 *             compute.roundFloat(125.125,0) returns 125
 * 
 *     compute.test.regex(str,re); str typeof="string",re typeof="object"; returns typeof="boolean"
 *         Description:
 *             Test the string against a general regular expression, character by character.
 *         Example usage:
 *             compute.test.regex("asDf123",/[0-9a-z]/i) returns true
 *             compute.test.regex("asDf123",/[0-9a-z]/) returns false
 *     
 *     compute.d2b(num,base); num typeof="number",base typeof="number";returns typeof="string" or returns false
 *         Description:
 *             Converts a Base10 Decimal to any base number up to Base36.  If conversion fails then it returns false.
 *             The setting convert.upperCaseBase determines whether the returned number will be in upper case or lower
 *             case numbers.
 *         Example usage:
 *             compute.d2b(45,16) returns 2D
 *             compute.d2b(45,8) returns 55
 *             
 *     compute.b2d(num,base); num typeof="string",base typeof="number";returns typeof="string" or returns false
 *         Description:
 *             Converts any base number up to Base36 to a Base10 Decimal.  If conversion fails then it returns false.
 *         Example usage:
 *             compute.b2d("2D",16) returns 45
 *             compute.b2d("55",8) returns 45
 * 
 * SETTINGS documentation format
 *     compute.setting; typeof; default value
 *         Description:
 *             description of what the setting changes
 *         Example usage:
 *             compute.setting=true
 *             compute.setting returns true
 *     
 *     compute.caseInsensitive; typeof="boolean"; true
 *         Description:
 *             If you don't want the equations to be case sensitive then set this option to true.  Otherwise set to
 *             false.
 *     
 *     compute.debug; typeof="boolean"; false
 *         Description:
 *             Alerts exceptions for library development purposes.
 *     
 *     compute.degreesMode; typeof="boolean"; true
 *         Description:
 *             When working with trig functions this determines whether they're handled as degrees or radians.  When 
 *             set to true then the trig functions handle the trig quantities as degrees.  False will handle the trig
 *             quantities as radians.
 *     
 *     compute.showErrors; typeof="boolean"; true
 *         Description:
 *             Display alert box errors to assist the user with troubleshooting their equation for computation.  When
 *             set to true then it displays the alert boxes.  Set to false to quiet the alerts
 *     
 *     compute.upperCaseBase; typeof="boolean"; true
 *         Description:
 *             When doing a base conversion equation return the letters in all caps when set to true.  For example 
 *             when set to true compute.d2b(45) returns 2D instead of 2d.
 */

var compute={caseInsensitive:true,debug:false,degreesMode:true,showErrors:true,upperCaseBase:true,general_error:["There are errors in the equation.\n\nCheck for:\nMissing symbols next to parenthesis. 3(10) will not work but 3*(10) will.\nHanging equation symbols like (3*(10)+) where the + is the error.\nOpen parenthesis. (2*(4+3) will not work but (2*(4+3)) will.\nMisspelled or undefined trig functions.\nComplex Numbers, for example (-16)^(1/2), can't be computed by this library.","Invalid characters in display, incorrectly formatted operators such as shift ops, or misspelled trig functions.","Can't divide by zero.","Can't handle complex numbers such as (-1)^(1/2).","Incorrectly formatted x^y function."],result:function(str){if(typeof str!=="string"){str=str.toString();}if(this.caseInsensitive){str=str.toLowerCase();}var result;try{if(this.test.checkall(str)){if(str=='0'){return 0;}else if(this.formatEquation(str)){result=this.formatEquation(str);if(eval(result)=="Infinity"){if(this.showErrors){alert(this.general_error[2]);}return false;}else{return eval(result);}}else{if(this.showErrors){alert(this.general_error[0]);}return false;}return true;}else{if(this.showErrors){alert(this.general_error[1]);}}}catch(e){if(this.debug){alert("Exception in compute.result function\n"+e+"\n\nstr="+str+"\n\nresult="+result);}if(this.showErrors){alert(this.general_error[0]);}}return false;},test:{checkall:function(str){return(this.check_greaterthan(str)&&this.check_lessthan(str)&&this.checktrig(str)&&this.regex(str,/[0-9lpesincotag\(\)\+\-\.\*\/\^<>%]/i));},regex:function(n,re){if(typeof n!="string"){n=n.toString()}var i=0;var result=true;while(i<n.length){if(!re.test(n.charAt(i))){result=false;}i++;}return result;},checktrig:function(str){return(this.sin(str)&&this.cos(str)&&this.tan(str)&&this.pi(str)&&this.check_a(str)&&this.check_g(str)&&this.check_i(str)&&this.check_n(str)&&this.check_o(str)&&this.logs(str)&&this.e(str));},check_greaterthan:function(str){var c=str.indexOf('>');if(c==-1)return true;else if(str.charAt(c+1)!='>')return false;return this.check_greaterthan(str.substring(c+2));},check_lessthan:function(str){var c=str.indexOf('<');if(c==-1)return true;else if(str.charAt(c+1)!='<')return false;return this.check_lessthan(str.substring(c+2));},pi:function(str){var c=str.indexOf('p');if(c==-1){return true;}else if(str.charAt(c+1)!='i'){return false;}return this.pi(str.substring(c+2));},logs:function(str){var c=str.indexOf('l');if(c==-1){return true;}else if(str.charAt(c+1)!='n'&&(str.charAt(c+1)!='o'||str.charAt(c+2)!='g')){return false;}return(str.charAt(c+1)=='n')?this.logs(str.substring(c+3)):this.logs(str.substring(c+4));},e:function(str){var c=str.indexOf('e');if(c==-1){return true;}else if(!this.regex(str.charAt(c+1),/[0-9\^]/i)){return false;}return this.e(str.substring(c+1));},sin:function(str){var c=str.indexOf('s');if(c==-1){return true;}else if(str.charAt(c)+str.charAt(c+1)+str.charAt(c+2)+str.charAt(c+3)!="sin("&&str.charAt(c-2)!='c'){return false;}return(str.charAt(c-2)=='c')?this.sin(str.substring(c+2)):this.sin(str.substring(c+4));},cos:function(str){var c=str.indexOf('c');if(c==-1){return true;}else if(str.charAt(c)+str.charAt(c+1)+str.charAt(c+2)+str.charAt(c+3)!="cos("){return false;}return this.cos(str.substring(c+4));},tan:function(str){var c=str.indexOf('t');if(c==-1){return true;}else if(str.charAt(c)+str.charAt(c+1)+str.charAt(c+2)+str.charAt(c+3)!="tan("){return false;}return this.tan(str.substring(c+4));},check_a:function(str){var c=str.indexOf('a');if(c==-1){return true;}else if(str.charAt(c-1)!="t"&&!(str.charAt(c+1)=="c"||str.charAt(c+1)=="s"||str.charAt(c+1)=="t")){return false;}return this.check_a(str.substring(c+1));},check_g:function(str){var c=str.indexOf('g');if(c==-1){return true;}else if(str.charAt(c-1)!="o"){return false;}return this.check_g(str.substring(c+1));},check_i:function(str){var c=str.indexOf('i');if(c==-1){return true;}else if(str.charAt(c-1)!="p"&&str.charAt(c-1)!="s"){return false;}return this.check_i(str.substring(c+1));},check_n:function(str){var c=str.indexOf('n');if(c==-1){return true;}else if(str.charAt(c-1)!="i"&&str.charAt(c-1)!="a"&&str.charAt(c-1)!="l"){return false;}return this.check_n(str.substring(c+1));},check_o:function(str){var c=str.indexOf('o');if(c==-1){return true;}else if(str.charAt(c-1)!="c"&&str.charAt(c-1)!='l'){return false;}return this.check_o(str.substring(c+1));}},formatEquation:function(str){if(typeof str!="string"){str=str.toString();}if(str=='0'){return str;}var results=new Array();var exit,i,j;if(str.indexOf('^')!=-1){i=str.indexOf('^')-1;exit=false;j=0;do{switch(str.charAt(i)){case')':j++;break;case'(':j--;break;}if(this.test.regex(str.charAt(i),/[\+\-\*\/\(\)><%]/i)&&j<=0){results[0]=(j<0||str.charAt(i)!='(')?str.substring(i+1,str.indexOf('^')):str.substring(i,str.indexOf('^'));exit=true;}i--;}while(!exit&&i>-1);if(!exit){results[0]=str.substring(0,str.indexOf('^'));}if(results[0]==''){if(this.showErrors){alert(this.general_error[4]);}return false;}if(this.test.regex(str.charAt(str.indexOf('^')+1),/[\+\-]/i)){i=str.indexOf('^')+2;}else{i=str.indexOf('^');}exit=false;j=0;do{switch(str.charAt(i)){case'(':j++;break;case')':j--;break;}if(this.test.regex(str.charAt(i),/[\+\-\*\/\(\)><%]/i)&&j<=0){results[1]=(str.charAt(str.indexOf('^')+1)=='(')?str.substring(str.indexOf('^')+1,i+1):str.substring(str.indexOf('^')+1,i);exit=true;}i++;}while(!exit&&i<str.length);if(!exit){results[1]=str.substring(str.indexOf('^')+1,str.length);}if(results[1]==''){if(this.showErrors){alert(this.general_error[4]);}return false;}if(results[0]=='e'){str=eval("str.replace('"+results[0]+"^"+results[1]+"', 'Math.exp("+results[1]+")')");}else if(eval(this.formatEquation(results[0]))<0&&eval(this.formatEquation(results[1]))<1){if(this.showErrors){alert(this.general_error[3]);}return false;}else{str=eval("str.replace('"+results[0]+"^"+results[1]+"', 'Math.pow("+results[0]+","+results[1]+")')");}if(str.indexOf('^')!=-1){return this.formatEquation(str);}}str=str.replace(/log\(/gi,"this.rlog(");str=str.replace(/pi/gi,"Math.PI");str=str.replace(/ln\(/gi,"Math.log(");str=str.replace(/tan\(/gi,"this.tan(");str=str.replace(/cos\(/gi,"this.cos(");str=str.replace(/sin\(/gi,"this.sin(");str=str.replace(/athis\./gi,"this.a");return str;},roundFloat:function(num,float_val){if(typeof num!="number"||typeof float_val!="number"){num=eval(num);float_val=eval(float_val);}var comp=1;for(var i=Math.abs(float_val);i>0;i--){comp=comp*10;};return(float_val<0)?Math.round(num/comp)*comp:Math.round(num*comp)/comp;},tan:function(str){if(typeof str!="string")if(this.cos(str).toString()=='0'){if(this.showErrors){alert("tangent is undefined, can't divide by zero.");}throw"tan_trig_error";}else{if(this.degreesMode){return Math.tan(this.result(str)*Math.PI/180);}else{return Math.tan(this.result(str));}}},sin:function(str){if(str.toString()==null){throw"sin_trig_error";}else{if(this.degreesMode){return Math.sin(this.result(str)*Math.PI/180);}else{return Math.sin(this.result(str));}}},cos:function(str){if(str.toString()==null){throw"cos_trig_error";}else{if(this.degreesMode){return Math.cos(this.result(str)*Math.PI/180);}else{return Math.cos(this.result(str));}}},atan:function(str){if(str.toString()==null){throw"atan_trig_error";}else{if(this.degreesMode){return Math.atan(this.result(str))*180/Math.PI;}else{return Math.atan(this.result(str));}}},asin:function(str){if(str.toString()==null){throw"asin_trig_error";}else if(this.result(str)==0){return 0;}else if(this.result(str)>1||this.result(str)<-1){if(this.showErrors){alert("asin(x) error:\nx was either greater than 1 or less than -1\nasin Domain: {x|-1<=x<=1}");}throw"asin_trig_error";}else{if(this.degreesMode){return Math.asin(this.result(str))*180/Math.PI;}else{return Math.asin(this.result(str));}}},acos:function(str){if(str.toString()==null){throw"acos_trig_error";}else if(this.result(str)==1){return 0;}else if(this.result(str)>1||this.result(str)<-1){if(this.showErrors){alert("acos(x) error:\nx was either greater than 1 or less than -1\nacos Domain: {x|-1<=x<=1}");}throw"acos_trig_error";}else{if(this.degreesMode){return Math.acos(this.result(str))*180/Math.PI;}else{return Math.acos(this.result(str));}}},rlog:function(str){if(this.result(str)<=0){if(this.showErrors){alert("ln(x)=Undefined or Negative Infinity\nOutside of domain.\nlog(x) Domain: {x|x>0}");}throw"rlog_trig_error";}else{return Math.log(this.result(str))/Math.log(10);}},changeSign:function(str){if(typeof str!="string"){str=str.toString();}var result;if(str=="0"){return str;}else if(this.test.checkall(str)){try{result=this.formatEquation(str);eval(result);}catch(e){if(this.debug){alert("Exception in compute.changeSign function\n"+e+"\n\nstr="+str+"\n\nresult="+result);}if(this.showErrors){alert(this.general_error[0]);}return false;}if(this.test.regex(str,/[0-9\.\-]/)){if(this.test.regex(str.substring(1,str.length),/[0-9\.]/)){if(str.substring(0,1)=="-"){return str.substring(1,display.value.length);}else{return"-"+str;}}else{return"-("+display.value+")";}}else if(str.substring(0,2)=="-("){if(str.substring(str.length-1,str.length)==")"){try{eval(str.substring(2,str.length-1));}catch(e){return"-("+str+")";}return str.substring(2,str.length-1);}else{return"-("+str+")";}}else if(this.formatEquation(str)){return"-("+str+")";}else{if(this.showErrors){alert(this.general_error[0]);}return false;}}else{if(this.showErrors){alert(general_error[1]);}return false;}},baseKey:{key:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",indexOf:function(c){return(this.key.indexOf(c.toUpperCase())!=-1)?this.key.indexOf(c.toUpperCase()):false;}},d2b:function(n,b){if(typeof n!="number"||typeof b!="number"){try{n=eval(n);b=eval(b);}catch(e){if(this.debug){alert("Exception in compute.b2d function\n"+e+"\n\nn="+n+"\n\nb="+b);}return false;}}if(b<2){if(this.showErrors){alert("Base can't be less than 2 in base conversion.")}return false;}else if(b>this.baseKey.key.length){if(this.showErrors){alert("Base is greater than "+this.baseKey.key.length.toString());}return false;}var fact=1,done="";while(fact*b<=n){fact*=b;}while(fact>=1){done+=this.baseKey.key.charAt(Math.floor(n/fact));n-=Math.floor(n/fact)*fact;fact/=b;}return(this.upperCaseBase)?done.toUpperCase():done.toLowerCase();},b2d:function(n,b){if(typeof n!="string"||typeof b!="number"){try{n=n.toString();b=eval(b);}catch(e){if(this.debug){alert("Exception in compute.b2d function\n"+e+"\n\nn="+n+"\n\nb="+b);}return false;}}if(b<2){if(this.showErrors){alert("Base can't be less than 2 in base conversion.")}return false;}else if(b>this.baseKey.key.length){if(this.showErrors){alert("Base is greater than "+this.baseKey.key.length.toString());}return false;}var fact=1,done=0,i;for(i=n.length-1;i>=0;i--){done+=this.baseKey.indexOf(n.charAt(i))*fact;fact*=b;}return done;}}

/*
 * This is a list of settings for the compute object
 * These are easily configurable for simple integration into other applications.
 */
compute.caseInsensitive=true;
compute.debug=false;
compute.showErrors=true;
compute.upperCaseBase=true;