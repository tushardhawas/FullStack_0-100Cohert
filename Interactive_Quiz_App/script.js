const questions = [
  {
    question: "What does 'DOM' stand for?",
    options: ["Document Object Model", "Data Object Model", "Digital Output Module"],
    answer: "Document Object Model"
  },
  {
    question: "Which keyword is used to declare a constant variable in JavaScript?",
    options: ["const", "let", "var"],
    answer: "const"
  },
  {
    question: "What is the purpose of the 'fetch' API in JavaScript?",
    options: ["To make HTTP requests", "To create a new array", "To declare a function"],
    answer: "To make HTTP requests"
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    options: ["// This is a comment", "/* This is a comment */", "# This is a comment"],
    answer: "// This is a comment"
  },
  {
    question: "What is the result of '3' + 2 in JavaScript?",
    options: ["32", "5", "String concatenation error"],
    answer: "32"
  },
  {
    question: "Which method is used to remove the last element from an array in JavaScript?",
    options: [".pop()", ".remove()", ".delete()"],
    answer: ".pop()"
  },
  {
    question: "What does the 'NaN' stand for in JavaScript?",
    options: ["Not a Number", "Null and None", "Negative Any Number"],
    answer: "Not a Number"
  },
  {
    question: "How do you check if a variable is undefined in JavaScript?",
    options: ["typeof variable === 'undefined'", "variable === undefined", "Both of the above"],
    answer: "Both of the above"
  },
  {
    question: "What is the purpose of the 'try...catch' statement in JavaScript?",
    options: ["To handle exceptions and errors", "To declare variables", "To create loops"],
    answer: "To handle exceptions and errors"
  },
  {
    question: "Which method is used to join elements of an array into a string in JavaScript?",
    options: [".join()", ".concat()", ".merge()"],
    answer: ".join()"
  }
];

const main_container = document.getElementById("main_container");
const questionContainer = document.getElementById("question_container");
const optionsForm = document.getElementById("options_form");
const nextBtn = document.querySelector('button[onclick="nextQuestion()"]');
const submitBtn = document.querySelector('button[onclick="submitAnswer()"]');
 
var score =0;
 var index =0;

function display_question(){
    const obj = questions[index];
    questionContainer.innerHTML=`<p>${obj.question}</p>`
    console.log(obj.question)
/* this is another way to add option in html here we have use maps and passsed  callback
 function  as an argument ot it */
    optionsForm.innerHTML = questions[index].options.map((option, index) => {
      console.log(option)
      return `<label id ="option_box" ><input  type="radio" name="options" value="${option}">${option}</label>`;
    }).join("<br><br>");  
//this the one way to add options using array indexing  this is not completed one here you can just fetch the 
// the index wise i prefer the map function
//    let optionsHTML = "";
//    var count =0;
// for (let i = 0; i < questions[count].options.length; i++) {
//   const option = questions[count].options[i];
//   console.log(option)
//   optionsHTML += `<label ><input  type="radio" name="options"  value="${option}">${option}</label>`;
// }
// count =count+1;
index =index+1;
  }
  

  function submitAnswer() {
    console.log(index)
    const selectedOption = document.querySelector('input[name="options"]:checked');
    console.log(selectedOption.value)
    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const correctAnswer = questions[index-1].answer;
      
      if (userAnswer === correctAnswer) {
        console.log("Correct answer!");
        score =score +1;
        // You can update the UI to show that the answer is correct
      } else {
        console.log("Incorrect answer. The correct answer was:", correctAnswer);
        // You can update the UI to show that the answer is incorrect
      }

const selectedLabel = selectedOption.closest('label');
    selectedLabel.classList.add('selected-option');

      // Disable the submit button after the user has submitted an answer
      submitBtn.disabled = true;
      // Enable the next button
      nextBtn.disabled = false;
      if(index==questions.length-1){      main_container.innerHTML=`<p>Quiz completed. Final score: ${score}</p>`
    }
    }
  }

  function nextQuestion() {
    if(index<questions.length){
    display_question()

    submitBtn.disabled = false;
    
    console.log(score);
    nextBtn.disabled = true;
    }else{
      main_container.innerHTML=`<p>Quiz completed. Final score: ${score}</p>`
    }}

    const mainContainer = document.getElementById("main_container");
    const quizContentContainer = document.getElementById("quiz_content");
    
    
    