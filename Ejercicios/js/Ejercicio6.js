/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


function Question(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
};

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
		console.log(i + ': ' + this.answer[i]);
	}
};

var firstQuestion = new Question('Who is the best footballer?', ['Lionel Messi', 'Kylian Mbappe', 'Cristiano Ronaldo'], 0);
var secondQuestion = new Question('What was Mohammed Ali’s birth name?', ['Richard Clay', 'Cassius Clay', 'Jack Clay'], 1);
var thirdQuestion = new Question('Who was known as the Maid of Orleans?', ['Joan of Bows', 'Christine of Arc', 'Joan of Arc'], 2)

var questions = [firstQuestion, secondQuestion, thirdQuestion];



var randomQuestion = Math.floor(Math.random() * questions.length);



questions[randomQuestion].displayQuestion();