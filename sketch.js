//Create variables here
var dog, happydog, database, foods, foodStock;
var dog1img,dog2img;
var milkObject;
var feedDog, addFood;
var fedTime, lastFeed;

function preload()
{//load images here
	dog1img=loadImage("images/dogImg.png");
  dog2img=loadImage("images/happyDog.png");

}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();

  dog=createSprite(750,350,50,50);
  dog.addImage(dog1img);
  dog.scale=0.2;

  milkObject = new milk();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  feedDog = createButton("Feed the Dog");
  feedDog.position(800,80);
  feedDog.mousePressed(feedTheDog);


  addFood = createButton("Add Food");
  addFood.position(900,80);
  addFood.mousePressed(addFoods);
}


function draw() {  
 background("skyblue")

 milkObject.display();


fedTime = database.ref('feedTime');
fedTime.on("value", function(data){
  lastFeed = data.val();
})

if(lastFeed>=12){
  text("Last Feed:"+lastFeed%12+ "PM",700,40);

}else if(lastFeed==0){
  text("Last Feed: 12 AM",700,40);

}else{
  text("Last Feed:"+lastFeed+ "AM",700,40);

}
  drawSprites();
  

}

function readStock(data){
  foods = data.val();
  milkObject.updateFoodStock(foods);
}

function addFoods(){

  foods++;
 
database.ref('/').update({
  Food: foods
})

}

function feedTheDog(){
  dog.addImage(dog2img);

if(milkObject.getFoodStock()<=0 ){

  milkObject.updateFoodStock(milkObject.getFoodStock()*0);
}

else{
  milkObject.updateFoodStock(milkObject.getFoodStock()-1);

}

database.ref('/').update({
  Food:milkObject.getFoodStock(),
  feedTime: hour()
})

}



