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





































































