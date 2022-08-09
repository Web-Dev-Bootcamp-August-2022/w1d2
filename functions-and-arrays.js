// functions

// greet()
// function declaration - this is hoisted (moved
// to the top of the file before execution)
// function greet() {
// 	console.log('hello')
// }
// calling a function

// function expression - this uses an anonymous 
// function (bc it has no name)

// greet()
// const greet = function () {
// 	console.log('hello')
// }

function welcome(word, name) {

	const result = word + ' ' + name
	// console.log(result)
	return result
	// this code will not be reached
	// const user = 'jan'
}
// console.log(result) -> Reference Error 
// result is only accessible in the function
// const user = 'camilla'
const greeting = welcome('hi', 'camilla')

// console.log(greeting) // -> 'hello marco'
// console.clear()

function display(text) {
	console.log(text)
}

function sum(a, b) {
	// return a + b
	const result = a + b
	// calling a function inside another function
	display(result)
}
// sum(3, 5)

// Arrays - ordered collection of (different) values

const numbers = [2, 4, 6, 8]
// console.table(numbers)
// access elements in an array
// bracket notation
// console.log(numbers[0])
// at() 
// this gives us the last element
// console.log(numbers.at(- 1))

const empty = []

// empty[0] = 'a'
// empty[3] = 'x'
// console.log(empty[1])

// push() adds to the end
empty.push('a')
empty.push('b')
// pop() removes from the end
empty.pop()

// add and remove from the beginning: unshift() shift()
console.log(empty)

// indexOf() gives us the index of an element
// includes() returns true or false
console.log(empty.includes('a'))

const countries = ['usa', 'france', 'uruguay', 'england', 'poland']
// splice()
// countries.splice(1, 1, 'italy')
// console.log(countries)

// write a function that gets an array of countries and returns  
// an array containing only the countries that start with 'u'
function filterCountries(array) {
	const result = []
	for (let country of countries) {
		// check if that country starts with 'u'
		if (country[0] === 'u') {
			// add it to the result array
			result.push(country)
		}
	}
	return result
}

const filtered = filterCountries(countries)
console.log(filtered)

// iterating over arrays 
// for (let i = 0; i < countries.length; i++) {
// 	console.log(countries[i])
// }

// for of loop for (<name for one of the elements> of <name of the array>)

// for (let country of countries) {
// 	// console.log('iteration')
// 	console.log(country)
// }

// multidimensionalal arrays 
const multidimensional = [['a', 'b'], ['x', 'y']]

// console.log(multidimensional[0][1])
