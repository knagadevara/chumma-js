'use strict';

const mainElections = [1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018]
const midTermElections = ['mid-term 2004']
const votingPercentage = [99.99 , 99 , 101]

//Adding an element in the begining
midTermElections.unshift('mid-term 2000')
//Adding an element in the end
midTermElections.push('mid-term 2008')

console.log(midTermElections)

//Removing an element from the end
midTermElections.pop() // returns the removed element.
//Removing element from the begining
midTermElections.shift()

console.log(midTermElections)

console.log(mainElections.indexOf(1991)) // returns -1 as element is not found
console.log(mainElections.includes(1991)) // returns boolean