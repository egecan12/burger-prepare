const btnBegin = document.querySelector("#begin");

const coords = {
  "//": "vertical coordinate of the middle column where food will animate in",
  y: 600
};
//menu 
const beef = document.querySelector("main div.food.beef");
const chicken = document.querySelector("main div.food.chicken");
const vegetarian = document.querySelector("main div.food.vegetarian");
const ketchup = document.querySelector("main div.food.ketchup");
const mustard = document.querySelector("main div.food.mustard");
const cheese = document.querySelector("main div.food.cheese");
const lettuce = document.querySelector("main div.food.lettuce");
const tomato = document.querySelector("main div.food.tomato");
const pickles = document.querySelector("main div.food.pickles");





// will store all individual Ingredient objects in this array called ingredients
const ingredients = [];

const foodButtons = document.querySelectorAll("aside button")
foodButtons.forEach(btn => {btn.addEventListener('click',buildBurger)
  
});


/* Constructor Function
-------------------------------------------------- */
function Ingredient(name) {
    this.name= name ;
}

function greeting() {
  var synth = window.speechSynthesis;
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(
    "Welcome to Istanbul Kebab House, May I take your order?"
  );
  // Actually speak the text
  synth.speak(utterThis);
}

btnBegin.addEventListener("click", greeting);

// this function will store the ingredient pressed into the array ingredients
function buildBurger() {

ingredients.push(new Ingredient(this.dataset.choice));//tiklanan nesnenin getirdigi attirubute yeni bir nesne olarak olusturulup ingredients a gonderiliyor

TweenMax.to(cheese, 4, {x:200})








}

// this function will show the pre-built burger
function showBurger() {
  console.log(ingredients)
}


