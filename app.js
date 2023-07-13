const quiz = [{

  question : 'The Binary Coded Decimal (BCD) uses?',
  a: "6 bits",
  b: "8 bits",
  c: "16 bits",
  d: "32 bits",
  ans: "ans1"
},
{

    question: 'The two kinds of main memory are',
    a: " CDs and DVDs",
    b: " RAM and ROM",
    c: "Primary and secondary",
    d: "Direct and sequential",
    ans: "ans2"
}, 
{
    question: "RAM is also called as",
    a: "Virtual memory",
    b: "Volatile memory",
    c: "Non volatile memory",
    d: "Cache memory",
    ans: "ans2"
},
{
    question: "Which of the following is billionth of a second?",
    a: "Microsecond",
    b: "Nanosecond",
    c: "Terabyte",
    d: "Gigabyte",
    ans: "ans2"
},

{
   question: "Using Microsoft word we can simply ___",
   a: "Paste picture",
   b: "Type",
   c: "Format a text",
   d: " All the above functions",
   ans: "ans4"
}
]

const question = document.querySelector('.question')
const choose1 = document.querySelector('#choose1')
const choose2 = document.querySelector('#choose2')
const choose3 = document.querySelector('#choose3')
const choose4 = document.querySelector('#choose4')
const button = document.querySelector('#btn')
const answers = document.querySelectorAll('.answer')
const showBoard = document.querySelector('#showBoard')

var arrayNum = 0;
var score = 0;


function loadPage () {
   const quizValue = quiz[arrayNum]
   question.innerText = quizValue.question

   choose1.innerText = quizValue.a
   choose2.innerText = quizValue.b
   choose3.innerText = quizValue.c
   choose4.innerText = quizValue.d


}

loadPage()

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsELem) => {
      if(curAnsELem.checked){
         answer = curAnsELem.id;
      }

  });
    return answer;
  };

  const unCheck = () => {
   
    answers.forEach((curAnsELem) =>{
      curAnsELem.checked = false;

    })

  }
  



  button.addEventListener('click', () => {
     const checkAnswer = getCheckAnswer()
    //  console.log(checkAnswer)
     if (checkAnswer === quiz[arrayNum].ans){
         score++;
     }
     
     arrayNum++;
      
      unCheck();
     if(arrayNum < quiz.length){
      loadPage();
     }else {
      showBoard.innerHTML = ` <h4> Your Score is ${score} / ${quiz.length} </h4>
      <button id="btn1" onclick="location.reload()" > Play Again </button>
      `;
      showBoard.classList.remove('score')
     }
});

