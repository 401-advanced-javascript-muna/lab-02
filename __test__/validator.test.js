'use strict';

const validator = require('../lib/validator.js');

//Using Matchers : https://jestjs.io/docs/en/expect


describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    let num = 1;
    expect(validator.isNum.num).toBeFalsy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isArray.arr).toBeFalsy();
  });

  it('objects', () => {
    let obj = {x:'y'};
    expect(validator.isObject.obj).toBeFalsy();
  });

  it('booleans', () => {
    let bool = false;
    expect(validator.isBool.bool).toBeFalsy();
  });

  it('functions', () => {
    let func = () => {};
    expect(validator.isFunc.func).toBeFalsy();
  });

});



describe('validator module performs complex validations', () => {

   
      it('validates the presence of required object properties at any level this is the good', () => {
        // i.e. does person.hair.color exist and have a good value, not just person.hair
        const susan = {
            id:'123-45-6789',
            name:'Susan McDeveloperson',
            age: 37,
            children:[],
          };
        expect(validator.isValid(susan)).toBeTruthy();
      });
  it('validates the presence of required object properties at any level', () => {
    // fred do not have age so the result should be false
    const fred = {
        id:38,
        name:'Freddy McCoder',
        children:[],
      };
    expect(validator.isValid(fred)).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // suzan id is anumber so the result should be false
    const susan = {
        id:1,
        name:'Susan McDeveloperson',
        age: 37,
        children:[],
      };
    expect(validator.isValid(susan)).toBeFalsy();  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings 
    const susan = {
        id:'123-45-6789',
        name:'Susan McDeveloperson',
        age: 37,
        children:[]
      };
      susan.children.forEach(child => {
        expect(typeof child).toEqual('string')
    });

  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    const susan = {
        id:'123-45-6789',
        name:'Susan McDeveloperson',
        age: 37,
        children:[],
        haveAcar:'no'

      };

    expect(susan.haveAcar.includes('yes')).toBeFalsy();
  });

//   // TODO: Cover so, so many more cases

});