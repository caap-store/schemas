/**
*
* @see @link https://schema.org/Number
*
* @remarks
* Data type: Number.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
*
**/
export type Number = number;
 
/**
*
* @see @link https://schema.org/Text
*
* @remarks
* Data type: Text.
*
**/
export type Text = string;
 
/**
*
* @see @link https://schema.org/Date
*
* @remarks
* A date value in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
*
**/
export type Date = string;
 
/**
*
* @see @link https://schema.org/DateTime
*
* @remarks
* A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).
*
**/
export type DateTime = string;
 
/**
*
* @see @link https://schema.org/Boolean
*
* @remarks
* Boolean: True or False.
*
**/
export type Boolean = boolean;
 
/**
*
* @see @link https://schema.org/Time
*
* @remarks
* A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see [XML schema for details](http://www.w3.org/TR/xmlschema-2/#time)).
*
**/
export type Time = string;
 
