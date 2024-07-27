let op = '';
let prevValue = '';
let currValue = '';


document.addEventListener('DOMContentLoaded',function(){
    let clear = document.querySelector('#clear');
    let equal = document.querySelector('#equal');

    let number = document.querySelectorAll('.num');
    let operators = document.querySelectorAll('.operator');

    let prevScreen = document.querySelector('#previousnum');
    let currScreen = document.querySelector('#newnum');

    number.forEach((num)=>num.addEventListener('click', function(e){
        handleNum(e.target.textContent);
        currScreen.textContent=currValue;
        // console.log("entering number: ", currValue);
    }))

    operators.forEach((operator)=>operator.addEventListener('click',function(e){
        handleOperator(e.target.textContent);
        prevScreen.textContent=prevValue+ " " +op;
        currScreen.textContent=currValue;
        // console.log("entering number: ",currValue);
    }))

    clear.addEventListener('click',()=>{
        currValue="";
        op="";
        prevValue="";
        prevScreen.textContent=prevValue;
        currScreen.textContent=currValue;
    })

    equal.addEventListener('click',()=>{
        // console.log("Before conversion:", prevValue, currValue);
        prevValue=Number(prevValue);
        currValue=Number(currValue);
        // console.log("After conversion:", prevValue, currValue);
      
        if(op==='+'){
        prevValue+=currValue;
        }
        else if(op==='-'){
        prevValue-=currValue;
        }
        else if(op==='*'){
        prevValue*=currValue;
        }
        else{
        prevValue/=currValue;
        }
        currValue=prevValue;    
        // console.log(prevValue);
        currScreen.textContent=currValue;
        prevScreen.textContent="";

    })
})

function handleNum(num){
    currValue+=num;
}

function handleOperator(sign){
    op=sign;
    prevValue=currValue;
    currValue="";
}

function operate(){
    console.log("Before conversion:", prevValue, currValue);
    prevValue=Number(prevValue);
    currValue=Number(currValue);
    console.log("After conversion:", prevValue, currValue);
      
    if(op==='+'){
        prevValue+=currValue;
    }
    else if(op==='-'){
        prevValue-=currValue;
    }
    else if(op==='*'){
        prevValue*=currValue;
    }
    else{
        prevValue/=currValue;
    }
    currValue=prevValue;    
    // console.log(prevValue);
}