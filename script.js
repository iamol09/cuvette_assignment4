let expression='';
let result='';
let temp='';
let opPresent=false;

const displayScreen=document.querySelector('.display');

//number display
const numButtons=document.querySelectorAll('.number');
numButtons.forEach((button) => {
    button.addEventListener('click', () => addNumExp(button.innerText));
});
function addNumExp(n){
    if(n==='.' && temp.includes('.')){
        return;
    }
    opPresent=false;
    temp+=n;
    expression+=n;
    displayScreen.innerText=expression;
}

//operators
const operatorButtons=document.querySelectorAll('.operator');
operatorButtons.forEach((operator)=>{
    operator.addEventListener('click',()=> addOpExp(operator.innerText));
});
function addOpExp(op){
    if(expression==='' && result==='' && op!='-'){
        return;
    }
    if(opPresent){
        return;
    }
    if(result!=''){
        expression+=result;
        result='';
    }
    opPresent=true;
    expression+=op;
    temp='';
    displayScreen.innerText=expression;
}

//evaluating exp
const equalsButton=document.getElementById('equals');
equalsButton.addEventListener('click',()=>evaluateExp());
function evaluateExp(){
    let result1=eval(expression).toFixed(3);
    result=parseFloat(result1);
    expression='';
    displayScreen.innerText=result;
}

//reset calculator
const resetButton=document.getElementById('reset');
resetButton.addEventListener('click',()=>{
    expression='';
    temp='';
    opPresent=false;
    result='';
    displayScreen.innerText=0;
});

//delete from left
const deleteButton=document.getElementById('delete');
deleteButton.addEventListener('click',()=>deleteLeftMost());

function deleteLeftMost(){
    if(expression==='' && result===''){
        return;
    }
    if(result!=''){
        expression+=result;
        result='';
    }
    expression=expression.slice(0,-1);
    if(expression===''){
        displayScreen.innerText=0;
        return;
    }
    displayScreen.innerText=expression;
}
    