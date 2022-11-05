    // event listener

    document.querySelector("button").addEventListener("click",handleClick); 

    // function
    
    function handleClick(){

    // first dice

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var images1 = "IMAGES/dice" + randomNumber1 + ".png";


    var dice1 = document.querySelectorAll("img")[0].setAttribute("src",images1);

    // second dice

    var randomNumber2 = Math.floor(Math.random()*6) + 1;

    var images2= "IMAGES/dice" + randomNumber2 + ".png";

    var dice2 = document.querySelectorAll("img")[1].setAttribute("src",images2);

    // condition

    if (images1 > images2){
        document.querySelector("h2").textContent= "Player 1 Wins!";
    }
    else if(images1===images2){
        document.querySelector("h2").textContent= "It's a tie, refresh!";
    }
    else{
        document.querySelector("h2").textContent= "Player 2 Wins!";
    }

}

