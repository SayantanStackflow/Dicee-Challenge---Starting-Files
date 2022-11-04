// generate the random value for player 1
var player1= Math.floor(Math.random()* 6)+1;
// assign dice images
var playerid= "images/dice"+player1+".png";
// changes into html using queryselector
document.querySelectorAll("img")[0].setAttribute("src", playerid);

//generate the random value for player 1
var player2= Math.floor(Math.random()* 6)+1;
// assign dice images
var playerid2= "images/dice"+player2+".png";
// changes into html using queryselector
document.querySelectorAll("img")[1].setAttribute("src", playerid2);

//asking user the players name
var p1= prompt("What's the player1 name: ");

var p2= prompt("What's the player2 name: ");

//winning decition 
if(player1 > player2){
    document.querySelector("h1").innerHTML= p1+ " wins";
}else if (player1 < player2){
    document.querySelector("h1").innerHTML= p2+ " wins";
}else{
    document.querySelector("h1").innerHTML= "Refesh again!";
}