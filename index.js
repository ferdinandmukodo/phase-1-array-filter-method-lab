// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

const findMatching = (parameter1,parameter2) => parameter1.filter(parameter1 => parameter1.toLowerCase() === parameter2.toLowerCase())

const fuzzyMatch = (parameter1,parameter2) => parameter1.filter(parameter1 => parameter1.charAt(0) === parameter2.charAt(0))

const matchName = (parameter1,parameter2) => parameter1.filter(parameter1 => parameter1.name === parameter2)
