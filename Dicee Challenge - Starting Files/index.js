// var randomNumber1 =Math.floor(Math.random() * 6)+1;
// console.log(randomNumber1);

function rollDice1(){
    //changing the dice 1
    var randomNumber1 =Math.floor(Math.random() * 6)+1;
    console.log(randomNumber1);
     let diceImage1 ="images/dice"+ randomNumber1+".png";
     const button1 =document.querySelector('.img1');
     button1.src =diceImage1;
    //  changing the dice 2
     var randomNumber2 =Math.floor(Math.random() * 6)+1;
    console.log(randomNumber2);
     let diceImage2 ="images/dice"+ randomNumber2+".png";
     const button2 =document.querySelector('.img2');
     button2.src =diceImage2;

     //decding the winner
     if(randomNumber1> randomNumber2){
        document.querySelector('h1').innerHTML="Player 1 wins";
     }else if(randomNumber1 < randomNumber2){
        document.querySelector('h1').innerHTML="Player 2 wins";

     }else{
        document.querySelector('h1').innerHTML="Draw";
     }

    }
rollDice1();



