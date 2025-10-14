// document.querySelectorAll('button').addEventListener('click',buttonClicked);

// function buttonClicked(){
//     alert("Button is clicked");
// }

var counting = document.getElementsByClassName('drum');
var audio1 = new Audio("Sounds/crash.mp3");
var audio2 = new Audio("sounds/kick-bass.mp3");
var audio3 = new Audio("Sounds/snare.mp3");
var audio4 = new Audio("Sounds/tom-1.mp3");
var audio5 = new Audio("Sounds/tom-2.mp3");
var audio6 = new Audio("Sounds/tom-3.mp3");
var audio7 = new Audio("Sounds/tom-4.mp3");


for(let i =0;i<counting.length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var buttonHtml = this.innerHTML;
        buttonAnimation(buttonHtml);
        switch(buttonHtml){
            case "w":
               
                audio1.play();
                break;
            case "a":
                audio2.play();
                break;
            case "s":
                audio3.play();
                break;
            case "d":
                audio4.play();
                break;
            case "j":
                audio5.play();
                break;
            case "k":
                audio6.play();
                break;
            case "l":
                audio7.play();
                break;
            default:
                alert("press correct one");
        }
        
        
    })

}

document.addEventListener("keypress",function(event){
    var pressed =(event.key);
    switch(pressed){
        case "w":
           
            audio1.play();
            break;
        case "a":
            audio2.play();
            break;
        case "s":
            audio3.play();
            break;
        case "d":
            audio4.play();
            break;
        case "j":
            audio5.play();
            break;
        case "k":
            audio6.play();
            break;
        case "l":
            audio7.play();
            break;
        default:
            alert("press correct one");
    }

    buttonAnimation(pressed);
})

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100);
}