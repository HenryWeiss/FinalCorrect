var button = document.createElement("button");

button.textContent = "Menu";
button.addEventListener("click", function(){
window.location.href="2.html";
});
button.classList.add("flash");
document.body.appendChild(button);

var button2 = document.createElement("button");

button2.textContent = "Gallery";
button2.addEventListener("click", function(){
window.location.href="3.html";
});
button2.classList.add("flash");
document.body.appendChild(button2);

var button3 = document.createElement("button");

button3.textContent = "About Us";
button3.addEventListener("click", function(){
window.location.href="4.html";
});
button3.classList.add("flash");
document.body.appendChild(button3);

var button4 = document.createElement("button");

button4.textContent = "Contact";
button4.addEventListener("click", function(){
window.location.href="5.html";
});
button4.classList.add("flash");
document.body.appendChild(button4);

var home = document.createElement("button");
home.textContent = "Home";
home.addEventListener("click", function(){
window.location.href="index.html";
});
document.body.appendChild(home);

button.style.position = "absolute"; 
button.style.top = "950px"; 
button.style.left = "525px"; 
button2.style.position = "absolute"; 
button2.style.top = "950px"; 
button2.style.left = "625px"; 
button3.style.position = "absolute"; 
button3.style.top = "950px"; 
button3.style.left = "725px"; 
button4.style.position = "absolute"; 
button4.style.top = "950px"; 
button4.style.left = "825px"; 

home.style.position = "absolute"; 
home.style.top = "50px"; 
home.style.left = "1000px"; 

var arrM = ["Cheeseburger", "Ribs", "Steak", "Shrimp", "FishTacos"];
var arrS = ["FrenchFries", "MacandCheese", "ChickenSoup"];
var arrA = ["HouseSalad", "Nachos"];
//I had to find errors using ai for a few functions which changed some of the original code, and I had to look things up on stack overflow
const combinations = {
    "Cheeseburger,FrenchFries,HouseSalad": "Classic Combo: Cheeseburger, Fries, and Salad! 12$",
    "Steak,MacandCheese,Nachos": "Hearty Meal: Steak, Mac and Cheese, and Nachos! 10$",
    "FishTacos,ChickenSoup,HouseSalad": "Healthy Choice: Fish Tacos, Chicken Soup, and Salad! 5$"
};
function main() {
    var sm = document.getElementById("search-barM");
    if (sm) {
        sm.value = arrM[0];
    }
}

function side() {
    var sm = document.getElementById("search-barS");
    if (sm) {
        sm.value = arrS[0];
    }
}

function app() {
    var sm = document.getElementById("search-barA");
    if (sm) {
        sm.value = arrA[0];
    }
}

document.addEventListener("DOMContentLoaded", function () {
    main();
    side();
    app();

document.getElementById("check-combination").addEventListener("click", function () {
var mainDish = document.getElementById("search-barM").value.trim();
var sideDish = document.getElementById("search-barS").value.trim();
var appetizer = document.getElementById("search-barA").value.trim();

    var combinationKey = `${mainDish},${sideDish},${appetizer}`;

    var outputDiv = document.getElementById("output");
    if (combinations[combinationKey]) {
        outputDiv.textContent = combinations[combinationKey];
    } else {
        outputDiv.textContent = "No matching combination found";
    }
});
});
console.log("Surprise");
console.log("Surprise1");
console.log("Surprise2");



function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color='#';
    for (var i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function flashColors(){
    var flashes = document.querySelectorAll('.flash');
    flashes.forEach(function(flash) {
        var randomColor = getRandomColor();
        flash.style.background = randomColor;
    });
    


}


let count = 0;
const maxFlashes = 200000;

function flashWithDelay() {
    if (count < maxFlashes) {
        flashColors();
        count++;
        setInterval(flashWithDelay,100); 
    }
}

flashWithDelay();

function changeColor(squareId){
    var bb = document.getElementById(back);
    var randomColor = getRandomColor();
     document.body.style.backgroundColor= randomColor
    }