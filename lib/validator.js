'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input object?
 * 
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) => {
    return typeof input === 'object';
}
/**
 * Based on a set of rules, is the input array?
 * 
 * @param input
 * @returns {boolean}
 */
validator.isArray = (input) => {
    // if (typeof input === Array) return false;
    return typeof input === Array
}
/**
 * Based on a set of rules, is the input bolean?
 * 
 * @param input
 * @returns {boolean}
 */
validator.isBool = (input) => {
    // if (typeof input === 'bolean') return false;
    return typeof input === 'bolean'
}
/**
* Based on a set of rules, is the input function?
* 
* @param input
* @returns {boolean}
*/
validator.isFunc = (input) => {
    // if (typeof input === "function") return false;
    return typeof input === "function"
}

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
validator.isNum = (input) => {
    // if (typeof input === "number") return false;
    return typeof input === "number";
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
    return typeof input === 'string';
    
};
/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */

validator.isValid = (input, rules) => {
  
    if (!(input.id && typeof input.id === 'string')) {  return false }
    if (!(input.name && typeof input.name === 'string')) {  return false }
    if (!(input.age && typeof input.age === 'number')) { return false }
    if (!(input.children && Array.isArray( input.children))) { return false }
   return true;
}

