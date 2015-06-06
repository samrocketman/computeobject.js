# JavaScript Human Readable Math Library

* Project Status: Abandoned in 2010 migrated from [SourceForge][sf.net]

This library converts human readable equation strings into JavaScript function
calls.  This is one of my earliest projects that I've migrated from sourceforge
to GitHub for archival purposes.  It was created in 2010.  What follows is a
description from the original `README.txt`.

# About the compute object

The compute object was created from all of the math capabilities of the
Scientific Calculator Web UI 1.3.2 and packed into a single, easy to integrate,
JavaScript object which can be used by other web applications.  I like to call
it a human readable math library and interpreter.  Basically it takes an
equation as a string and then reformats it in such a way the JavaScript math
engine can interpret it.  I put a lot of work into this so I hope someone finds
a use for it.  I feel it provides something that web calculators currently lack:
an easy to use and powerful math interpreter for real world users.

# Integrating into web applications

See the function and settings documentation on the `compute.result()` function.

It is recommended to integrate the compacted version of the compute object into
your web applications.  Please remember that you must leave the copyright
notices and documentation intact in order to use the compute object in your web
applications.  A small price to pay for such a great library!

# Function and settings documentation

```javascript
/**
 * @author Sam Gleske (sag47@drexel.edu|sam.mxracer@gmail.com)
 * @copyright 2005-2010 Sam Gleske
 * @link http://www.gleske.net/
 * @link http://www.sourceforge.net/projects/webtechtools/
 * @created 05/06/2010
 * @version 0.3
 * @description
 *     compute object is an interpreter.  It takes a mathematical string and
 *     formats it so that the JavaScript math engine can process it, calculating
 *     a result.  I like to refer to the mathematical string as containing human
 *     readable math computational functions such as pi, tan, and exponentials
 *     x^y.  This is a single object so that integration into web applications
 *     is seamless and simple.
 *
 *     Examples of human readable computations this library can handle that are
 *     unique to this library:
 *         compute.result("2^3") returns 8
 *         compute.result("16^(1/2)") returns 4
 *
 *     See the full documentation and all possible human readable functions in the non-compact version of the compute object.
 *
 *     If you are using the value of an input element then it is best to convert the value to a string before computing the
 *     result.  For example
 *         document.getElementById("myElementId").value = compute.result(document.getElementById("myElementId").value.toString());
 *
 * @documentation
 * @FUNCTION documentation format...
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
 * @SETTINGS documentation format
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
```

[sf.net]: https://sourceforge.net/projects/webtechtools/files/JavaScript%20Human%20Readable%20Math%20Library/
