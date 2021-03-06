//Function Constructor

/*var john = {
	name: 'john',
	yearOfBirth: 1990,
	job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = this.calculateAge = function() {
		console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1988, 'scientist');
var mark = new Person('Mark', 1986, 'web developer');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/


// Object.create
/*
var personProto = {
	calculateAge: function() {
		console.log(2019 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
job = 'teacher';

var jane = Object.create(personProto, {
	name: { value: 'Jane'},
	yearOfBirth: { value: 1988},
	job: { value: 1986}
});
*/

/*
// Primitives vs Object

//Primitives

var a = 23;
var b = a;

a = 46;
console.log(a);
console.log(b);


// Objects

var obj1 = {
	name: 'John',
	age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// Functions

var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco'; 
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/*
// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arrayEx, functEx) {
	var arrRes = [];
	for (var i = 0; i < arrayEx.length; i++) {
		arrRes.push(functEx(arrayEx[i]));
	}
	return arrRes;
}

function calculateAge(element) {
	return 2019 - element;
}


function isFullAge(elementAge) {
	return elementAge >= 18;
}

function maxHeartRate(elementRate) {
	if (elementRate >= 18 && elementRate <= 81) {
	return Math.round( 206.9 - (0.67 * elementRate));
	} else {
		return -1;
	}	
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates	 = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

/*
// Functions returning functions

function intervewQuestion(job) {
	if (job  === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?');
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}

var teacherQuestion = intervewQuestion('teacher');
var designerQuestion = intervewQuestion('designer');

teacherQuestion('John');
designerQuestion('Sara');
intervewQuestion('teacher')('Adrian');
*/




// IIFE


/*
function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}

game();

(function ()  {
	var score = Math.random() * 10;
	console.log(score >= 5);
}) ();

(function (goodLuck)  {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
}) (5);
*/
/*

//	Closures

function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function(yearOfBirth) {
		var age = 2019 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function intervewQuestion(job) {
	return function(name) {
		if (job  === 'designer') {
				console.log(name + ', can you please explain what UX design is?');
			
		} else if (job === 'teacher') {
				console.log('What subject do you teach, ' + name + '?');
			
		} else {
				console.log('Hello ' + name + ', what do you do?');
		}
	}
}

var teacherQuestion = intervewQuestion('teacher');
var designerQuestion = intervewQuestion('designer');
var restQuestion = intervewQuestion('writer');

teacherQuestion('John');
designerQuestion('Sara');
intervewQuestion('teacher')('Adrian');
intervewQuestion('Futballer')('Messi');
*/


// Bind, call and apply

var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'friendly') {
			console.log('Hey what\'s up? I\'m  ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
};

var emily = {
	name: 'Emily',
	age: 35,
	job: 'nurse',
};

john.presentation('formal', 'evening');
john.presentation.call(emily, 'friendly', 'afternoon');


var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');
var emilyFormal =  john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');






var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arrayEx, functEx) {
	var arrRes = [];
	for (var i = 0; i < arrayEx.length; i++) {
		arrRes.push(functEx(arrayEx[i]));
	}
	return arrRes;
}

function calculateAge(element) {
	return 2019 - element;
}


function isFullAge(limit, elementAge) {
	return elementAge >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);












































