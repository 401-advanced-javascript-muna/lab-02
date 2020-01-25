'use strict';

const validator = require('../lib/validator.js');

//Using Matchers : https://jestjs.io/docs/en/expect

// const data = require('../data/data.json');

// let person = new validator.Person(data);


// console.log(
describe('validator module performs basic validation of', () => {

  //   // TODO: Make this series of tests less repetitive ... DRY it out
  let str = 'yes';
  let strC = new validator.Validate(str);
  let num = 1;
  let numbr = new validator.Validate(num);
  let arr = ['a'];
  let arrC = new validator.Validate(arr);
  let obj = { x: 'y' };
  let objC = new validator.Validate(obj);
  let func = () => { };
  let funC = new validator.Validate(func);
  let bool = false;
  let boolC = new validator.Validate(bool);
  it('strings', () => {
    expect(strC.isString(str)).toBeTruthy();
    expect(numbr.isString(num)).toBeFalsy();
    expect(arrC.isString(arr)).toBeFalsy();
    expect(objC.isString(obj)).toBeFalsy();
    expect(funC.isString(func)).toBeFalsy();
    expect(boolC.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(strC.isNum(str)).toBeFalsy();
    expect(numbr.isNum(num)).toBeTruthy();
    expect(arrC.isNum(arr)).toBeFalsy();
    expect(objC.isNum(obj)).toBeFalsy();
    expect(funC.isNum(func)).toBeFalsy();
    expect(boolC.isNum(bool)).toBeFalsy();

  });

  it('arrays', () => {
    expect(strC.isArray(str)).toBeFalsy();
    expect(numbr.isArray(num)).toBeFalsy();
    expect(arrC.isArray(arr)).toBeTruthy();
    expect(objC.isArray(obj)).toBeFalsy();
    expect(funC.isArray(func)).toBeFalsy();
    expect(boolC.isArray(bool)).toBeFalsy();

  });

  // it('objects', () => {
  //   let obj = {x:'y'};
  //   expect(validator.isObject(obj)).toBeFalsy();
  // });

  // it('booleans', () => {
  //   let bool = false;
  //   expect(validator.isBool(bool)).toBeFalsy();
  // });

  // it('functions', () => {
  //   let func = () => {};
  //   expect(validator.isFunc(func)).toBeFalsy();
  // });

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
            let person = new validator.Person(susan);

          expect(person.isValid(susan)).toBeTruthy();
        });

    it('validates the presence of required object properties at any level', () => {
      // fred do not have age so the result should be false
      const fred = {
          id:38,
          name:'Freddy McCoder',
          children:[],
        };
        let person = new validator.Person(fred);

      expect(person.isValid(fred)).toBeFalsy();
    });

  it('validates the proper types of object properties', () => {
    // suzan id is anumber so the result should be false
    const susan = {
      id: 1,
      name: 'Susan McDeveloperson',
      age: 37,
      children: [],
    };
    let person = new validator.Person(susan);

    expect(person.isValid(susan)).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings 
    const susan = {
      id: '123-45-6789',
      name: 'Susan McDeveloperson',
      age: 37,
      children: []
    };
    susan.children.forEach(child => {
      expect(typeof child).toEqual('string')
    });

  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    const susan = {
      id: '123-45-6789',
      name: 'Susan McDeveloperson',
      age: 37,
      children: [],
      haveAcar: 'no'

    };

    expect(susan.haveAcar.includes('yes')).toBeFalsy();
  });

  //   // TODO: Cover so, so many more cases

});