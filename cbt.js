let quiz =[
 {
    question: "Which of the following is billionth of a second?",
    options:["Microsecond","Nanosecond","Terabyte","Gigabyte"],
   correctAns: "Nanosecond",
   answer:""
 },
 {
    question: "The Binary Coded Decimal (BCD) uses",
    options:["6 bits","8 bits","16 bits","32 bits",],
    correctAns: "6 bits",
    answer:""
 },
 {
    question: "The two kinds of main memory are",
    options:["CDs and DVDs","RAM and ROM","Primary and Secondary","Direct and Sequential",],
    correctAns: "RAM and ROM",
    answer:""
 },
 {
    question: "RAM is also called as",
    options:["Virtual memory","Volatile memory","Non volatile memory","Cache memory",],
    correctAns: "Volatile memory",
    answer:""
 },
 {
    question: "internal hard disk is",
    options:["Removable but not fixed","Removable","Not fixed","Fixed",],
    correctAns: "fixed",
    answer:""
 },
]
let score;
let ind = 0;
let display = document.getElementById('display');
let time = 30;

function timer() {
   setTimeout(() => {
      
   }, 2000);
}

function loadQuiz() {
  display.innerHTML = `<h2>${ind+1}. ${quiz[ind].question}</h2>`;
  quiz[ind].options.forEach(function (el, i) {
   display.innerHTML+=`<input type="radio" name="answer" ${quiz[ind].answer == el ? "checked":""} onclick= "correctAns('${el}')">${el}</input><br>`
  });   
  display.innerHTML +=` <br>
  <button type="button" class="btn btn-primary mx-auto" onclick="previous()">previous</button>
  <button type="button" class="btn btn-dark " onclick="next()">next</button>
  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="submit()">submit</button>
  `
}

function start() {
   loadQuiz()  

}

function correctAns(p) {
  quiz[ind].answer = p 
}

function previous() {
   if (quiz[ind - 1]) {
      ind --
      loadQuiz()
   }
}

function next() {
   if (quiz[ind + 1]) {
      ind++
      loadQuiz()
   }
}

function submit() {
   score = quiz.filter(function(param,i){
      return param.answer == param.correctAns
   })
}

function sure(params) {
    display.innerHTML= ''
    display.innerHTML +=` Total score: ${score.length}/${quiz.length}`
   display.innerHTML += `<h3> percentage: ${score.length / quiz.length * 100}% <br><br>
   <button type="button" class="btn btn-primary " onclick="record()">preview</button><br>`
}

function record(element) {
   display.innerHTML=''
   display.innerHTML +=`<table class="table table-striped" id="tab">
   <thead>
     <tr>
       <th scope="col">question</th>
       <th scope="col">ansPicked</th>
       <th scope="col">correctAns</th>
     </tr>
   </thead>`
   quiz.forEach(function (element) {
      tab.innerHTML +=`<tr>
      <td>${element.question}</td>
      <td>${element.answer}</td>
      <td>${element.correctAns }</td></tr>`
   })
   
}

