/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

var john = {
	fullName: 'John Snow',
	mass: 80,
	height: 1.85,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

var mark = {
	fullName: 'Mark Markez',
	mass: 80,
	height: 1.78,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

if (mark.calcBMI() > john.calcBMI()) {
	console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
}else if (mark.calcBMI() < john.calcBMI()) {
	console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
}else {
	console.log('They have the same BMI: Mark\'s BMI = ' + mark.bmi + ' and John\'s BMI is = ' + john.bmi);
};
