var questions=[
    {
        id:1,
        question:"Grand Central Terminal, Park Avenue, New York is the world's",
        rightanswer:"largest railway station",
        options:["highest railway station","longest railway station","None of the above","largest railway station"]
    },
    {
        id:2,
        question:"Entomology is the science that studies",
        rightanswer:"Insects",
        options:["Behavior of human beings","Insects","The origin and history of technical and scientific terms","The formation of rocks"]
    },
    {
        id:3,
        question:"For which of the following disciplines is Nobel Prize awarded?",
        rightanswer:"All of the above",
        options:["Physics and Chemistry","Physiology or Medicine","Literature, Peace and Economics","All of the above"]
    },
    {
        id:4,
        question:"Hitler party which came into power in 1933 is known as",
        rightanswer:"Nazi Party",
        options:["Labour Party","Nazi Party","Ku-Klux-Klan","Democratic Party"]
    },
    {
        id:5,
        question:"FFC stands for",
        rightanswer:"Film Finance Corporation",
        options:["Foreign Finance Corporation","Film Finance Corporation","Federation of Football Council","None of the above"]
    }
]



var questionno=0;


var score=0

// displayquestiononpage

function displayquestion(e){
    var question=document.getElementById("question");
    var option1=document.getElementById("option1");
    var option2=document.getElementById("option2");
    var option3=document.getElementById("option3");
    var option4=document.getElementById("option4");
    var label=document.getElementsByTagName("label");
    var inputvalue=document.getElementsByTagName("input")




    if(e==questions.length){
        btn.style.display='none';
        submitbtn.style.display="flex";
    }



    if(e<questions.length){
    question.innerHTML=questions[e].question



    for(i=0;i<questions[e].options.length;i++){
        inputvalue[i].value=questions[e].options[i]
        label[i].innerHTML=questions[e].options[i]
        
    }

}
}



// nextquestionbutton
if(location.href.split("/").slice(-1) =="quiz.html"){

var maindiv=document.getElementById("quizquestion")
var btn=document.createElement("button")
btn.className="nextquestionbtn"
btn.setAttribute("onclick","nextquestion()")
var btntext=document.createTextNode("Next Question")
btn.appendChild(btntext)
maindiv.appendChild(btn)

// submitbutton

var submitbtn=document.createElement("button")
submitbtn.className="submitbtn"
var submitbtntext=document.createTextNode("Submit")
submitbtn.appendChild(submitbtntext)
maindiv.appendChild(submitbtn)
submitbtn.setAttribute("onclick","submitresult()")
submitbtn.style.display= 'none';
// console.log(submitbtn)










window.onload=function(){
    displayquestion(0)
}
}
// displaynextquestionfunction

function nextquestion(){
    

// var opt = document.querySelectorAll('input[name="options"]');
    result(questionno)




    questionno+=1
    // console.log(questionno)
    displayquestion(questionno)
    var opt = document.getElementsByName('options');
    for(i=0;i<opt.length;i++){
        if(opt[i].checked){
            opt[i].checked=false;
        }
    }

}


// storeresult and display in end 
function result(e){
    var opt = document.getElementsByName('options');
    for(i=0;i<opt.length;i++){
        if(opt[i].checked && opt[i].value==questions[e].rightanswer){
            score +=10
            // alert(score)

        }
    }
    // console.log(score)
    // if(opt[2].checked){
    //     alert(opt[2].value)
    // }
    
    
}


// submitanddisplayresult
function submitresult(){
    sessionStorage.setItem("score",score)
    // console.log(score)
    location.href = "./result.html";
}

if(location.href.split("/").slice(-1) =="result.html"){
    // console.log(sessionStorage.getItem("score"))
    var resultscore=sessionStorage.getItem("score")
    var result=document.getElementById("result");
    result.innerHTML="Result:"+" "+resultscore+" "+"<br>"+"Percentage:"+" "+(resultscore/50)*100+" "+"%"
}



// switchpagefromindextoquizpage
function switchto() {
    var inputfield=document.getElementById("inputfield");
    sessionStorage.setItem("name",inputfield.value)
    location.href = "./quiz.html";
};


if(location.href.split("/").slice(-1) =="quiz.html"){
var heading=document.getElementById("quizpagewelcome")
heading.innerHTML="welcome"+" "+sessionStorage.getItem("name")    
// console.log(sessionStorage.getItem("name"))
}