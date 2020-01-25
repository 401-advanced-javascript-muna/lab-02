'use strict';
class Validate {
  constructor(input) {
    // constructor(input,rules) {

    this.input = input;
  }

  /**
 * Based on a set of rules, is the input object?
 * 
 * @param input
 * @returns {boolean}
 */
  isObject(input)  {
  return typeof input === 'object';
  }

/**
 * Based on a set of rules, is the input array?
 * 
 * @param input
 * @returns {boolean}
 */
  isArray(input) {
    return Array.isArray(input);
  }
/**
* Based on a set of rules, is the input bolean?
* 
* @param input
* @returns {boolean}
*/
  isBool(input){
  // if (typeof input === 'bolean') return false;
  return typeof input === 'boolean';
  }
/**
* Based on a set of rules, is the input function?
* 
* @param input
* @returns {boolean}
*/
  isFunc(input){
  return typeof input === 'function';
  }

/**
* Is this a number?
* @param input
* @returns {boolean}
*/
  isNum(input){
  // console.log('inputNUM:',input)
  return typeof input === 'number';
  };

/**
* Is this a string?
* @param input
* @returns {boolean}
*/
 isString (input){
  return typeof input === 'string';
  
 };
/**
* Based on a set of rules, is the input valid?
* TODO: Define the rules ... how do we send them in? How do we identify?
* @param input
* @param rules
* @returns {boolean}
*/

  isValid (input, rules){
  // console.log('inputmmmm',input,rules)

  if (!(input.id && typeof input.id === 'string')) {  return false; }
  if (!(input.name && typeof input.name === 'string')) {  return false; }
  if (!(input.age && typeof input.age === 'number')) { return false; }
  if (!(input.children && Array.isArray( input.children))) { return false; }
  return true;
  }

}

class Person extends Validate {
  constructor(input) {
      super(input)
      this.id = input.id;
      this.name = input.nameame;
      this.age = input.age;
      this.children = input.children;
  }
  run(){
    super.isValid()
  }
 }
module.exports = { Validate, Person };



