'use strict';

const generalStudentDetails = {
    firstName: 'Karthik',
    lastName: 'N',
    birthYear: 1991,
    gender: 'M',
    job: 'SRE',
    Org: ['Tesla' , 'Bosch' , 'Conti'],
    calculateAge: function(){
        this.age = 2022 - this.birthYear
    },
    getElibiblity: function(){
        this.eligblity = this.age >=21 ? true : false;
    }
};

// // To add key and value with prompt
// const add_key = prompt("Please type a key to add:");
// const add_val = prompt("Please type a value to add:");
// generalStudentDetails[add_key] = add_val;

// //To add to the Organization
// const add_org = prompt("Please enter the Organization to add:");
// generalStudentDetails['Org'].push(add_org)

// //Safe way to access any element from the hash-map.
// const fetch_val = prompt("Please type a valid atribute to fetch:");
// console.log(generalStudentDetails[fetch_val] ? generalStudentDetails[fetch_val] : "Unknown attribute supplied!" );

// console.log(`Organization Number: ${generalStudentDetails.Org.length}\n
// Organization Name: ${generalStudentDetails.Org[generalStudentDetails.Org - 1]}`)

// generalStudentDetails.calculateAge();
// generalStudentDetails.getElibiblity();

// console.log(generalStudentDetails.age)
// console.log(generalStudentDetails.eligblity)

// Destructuring Hashmap (Object)
// mutating variables
let a = 12;
let b = 11;

const obj_123 = { a: 21 , b: 43 , c: 69 };
({a, b} = obj_123);

console.log(a, b)
