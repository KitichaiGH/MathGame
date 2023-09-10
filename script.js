var optors = ["+", "-", "*", "/"];
var soptor 
var fnum;
var lnum;
const answers = document.getElementById("answersbox");
var answerElement;
var result;
var i = 0;
var qnum = 0;
var resultAns;



function start(){
    getrandom();
    i = 0;
    qnum = 0;
    var qall;
    qall = i + "/" + qnum;
    point.textContent = qall
}

function fnumR(){
    fnum = Math.floor(Math.random()*10);
    return fnum;
}

function lnumR(){
    lnum = Math.floor(Math.random()*10)+1;
    return lnum;
}

function optorsR(){
    soptor = optors[Math.floor(Math.random()*4)]
    return soptor;
}

function getrandom() {
    let g;
    fnumR();
    lnumR();
    optorsR();
    g = fnum +" "+" "+ soptor +" " +" "+ lnum  + " " + "="
    question.textContent = g;
    return soptor;
}
function checkA(soptor){
    if(soptor === "+"){
        result = fnum + lnum;
    }
    else if(soptor === "-"){
        result = fnum - lnum;
    }
    else if(soptor === "*"){
        result = fnum * lnum;
    }
    else if(soptor === "/"){
        result = fnum / lnum;
    }
    else{
        alert("error");
    }
    return result;
    
}

function checkB(result){
    if(result == answers.value){
        return resultAns = 1;
    }
    else{
        return resultAns = 2;
    } 
}

function checkResult(){
    checkA(soptor);
    checkB(result);
    getPoint(resultAns)
    getrandom();
    document.getElementById("answersbox").value = " ";
} 

function getPoint(resultAns){
    qnum ++;
    var qall;
    if(resultAns == true){
        i++;
    }
    qall = i + "/" + qnum;
    point.textContent = qall
}