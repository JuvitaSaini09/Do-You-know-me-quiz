var readlineSync = require('readline-sync'); 
console.log("__________________________");
console.log("Welcome To DO YOU KNOW ME Quiz  ");
console.log("__________________________");
var score=0;
var name=readlineSync. question("What is your name ? \n"); 
console.log("\n<----Welcome  "+name+"---->") 


console.log("\n");


var array=[ 
  {ques:"Do you know me ?",ans:"yes"},
  {ques:"What is my full name ?",ans:"Juvita Saini"},
  {ques:"In Which country, do i live ? ",ans:"India"}, {ques:"Which is my fav Super Hero?",ans:"Spider Man"} ,{ques:"DO i like sports : yes or no ?",ans:"Yes"} ,
  {ques:"Do i like Dance : yes or no?",ans:"Yes"},
  {ques:"Which is my birthday month :December,november or may ?",ans:"December"}
  ]
   
  for(i=0;i<array.length;i++) 
   { 
     playgame(array[i].ques,array[i].ans);
   }


function playgame(QuestionOne, AnswerOne) {
	var userans = readlineSync.question(QuestionOne);
	if (userans.toUpperCase() === AnswerOne.toUpperCase()) {
		console.log('\n You are correct ');
		score = score + 1;
		console.log('\n scores are : ' + score);
	} else {
		console.log('\n You are wrong');
    console.log('\n Right Answer is :' + AnswerOne);
		console.log('\n scores are : ' + score);
	} 
	console.log("-----------------")
}
console.log("\n "); 
console.log("***************Game Ends************")

console.log("   your final scores are  -->  "+score);