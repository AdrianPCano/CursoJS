/*
var markHeight = 1.86; // Meters
var markMass = 90;// Kg

var johnHeight = 1.65; // Meters
var johnMass = 69; // Kg

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);
console.log(markBmi, johnBmi)

var isMarkBmiHigher = markBmi > johnBmi;
console.log('is Mark\'s BMI higher than John\'s? ' + isMarkBmiHigher) 
*/


/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;
if (isMarried) { 
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon');
}
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
	console.log(firstName + ' is a young man.');
} else {
	console.log(firstName + ' is a man.');
}

*/
/*
var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


if (age >= 18) {
	var drink = 'beer';
} else {
	var drink = 'juice';
}
console.log(drink);
*/


/*


-------------------- FUNCTIONS ---------------------------------

function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	if (retirement > 0) {
		console.log(firstName + ' retires in ' + retirement + ' years.');
	} else {
		console.log(firstName + ' is already retired.');
	}
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/


/* 


// Function Declaration
//function whatDoYouDo(job, firstName) {}


// Function Expression
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code.';
		case 'driver':
			return firstName + ' drives a cab in Lisbon.';
		case 'designer':
			return firstName + ' designs beautiful websites.';
		default :
			return firstName + ' does something else.';
	}
}


console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('driver', 'Mike'));
*/

/*
// ---------------------- ARRAYS -----------------

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John' , 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/


/*

---------------------- OBJECTS -------------------

var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//New Object Syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1992,		
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function(birthYear) {
		this.age = 2018 - this.birthYear;
	}
};

john.calcAge();
console.log(john);
*/


/* 

--------------- LOOPS AND ITERETION ------------------------



for (var i = 1; i < 20; i += 2) {
	console.log(i);
}
console.log(i);

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

var i = 0;
while (i < john.length) {
	console.log(john[i]);
	i++;
}

 Continue and Break statements


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}


// Looping backwards

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = john.length - 1; i >= 0; i--) {
	if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
*/