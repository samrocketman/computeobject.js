ABOUT THE COMPUTE OBJECT
The compute object was created from all of the math capabilities of the Scientific Calculator Web UI 1.3.2 and packed into
a single, easy to integrate, JavaScript object which can be used by other web applications.  I like to call it a human 
readable math library and interpreter.  Basically it takes an equation as a string and then reformats it in such a way 
the JavaScript math engine can interpret it.  I put a lot of work into this so I hope someone finds a use for it.  I feel
it provides something that web calculators currently lack: an easy to use and powerful math interpreter for real world 
users.

INTEGRATING INTO WEB APPLICATIONS
See the function and settings documentation on the compute.result() function.

It is recommended to integrate the compacted version of the compute object into your web applications.  Please remember
that you must leave the copyright notices and documentation intact in order to use the compute object in your web 
applications.  A small price to pay for such a great library!

ABOUT FUTURE RELEASES
A real world implementation will use this library in Scientific Calculator Web UI 1.3.3.  Check it out when it is released
to see how it is integrated and the possibilities this math library provides to any web computational software.

This 0.1 release marks the first official public release of the compute object.  There are a few known bugs in it.  There
are also several bug fixes to the original Scientific Calculator math interpreter.  Those known bugs will be fixed in 
version 0.2 of the compute object.  After the bugfix release of 0.2 the compute object will be integrated into the 
Scientific Calculator and the convert object shall be removed.  The new and improved d2b and b2d functions which are now 
in the compute object and can handle up to Base36 over it's predecessor the convert object which could only handle up to 
Base16.

FUNCTION AND SETTINGS DOCUMENTATION
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
 *             comput/**
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
 */e.result("ln(3^2)/ln(3)") returns 2
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