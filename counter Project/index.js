var count = 0;

var value = document.getElementById('value');
console.log(value);

var increase = document.getElementsByClassName('increase')[0];
var reset = document.getElementsByClassName('reset')[0];
var decrease = document.getElementsByClassName('decrease')[0];

console.log(increase, reset, decrease);

increase.addEventListener('click', function(){
    counter('increase');
    updateDisplay();
});

reset.addEventListener('click', function(){
    counter('reset');
    updateDisplay();
});

decrease.addEventListener('click', function(){
    counter('decrease');
    updateDisplay();
});

function counter(action){
    if(action === 'reset'){ 
        count = 0;
    } else if(action === 'increase'){ 
        count++;
    } else if(action === 'decrease'){ 
        count--;
    }
}

function updateDisplay(){
    value.textContent = count; 
    if(count<0){
        document.getElementById('value').style.color="red";
    }
    if(count>0){
        document.getElementById('value').style.color="green";

    }
    if(count ==0){
        document.getElementById('value').style.color="black";
    }
}




updateDisplay();


