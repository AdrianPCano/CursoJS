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



























