//Create variables here
var food
function preload()
{
dogImg=loadImage("images/dogImg.png")
dogHappy=loadImage("images/dogImg1.png")


	//load images here
}

function setup() {
  database=firebase.database()
	createCanvas(800, 700);
  dog = createSprite(400,350,30,50);
dog.addImage(dogImg);
dog.scale=0.5;
var foodS=database.ref('food').on("value",readfood,showerr)

}
function readfood(data){
  food=data.val()
}
function showerr(){
  console.log("error")
}

function draw() {  
background("green");
textSize(25)
fill ("black")
text("Food Remaining "+food,10,50)
if(keyWentDown(UP_ARROW)){
  writefood (food)
  dog.addImage(dogHappy)
}
  drawSprites();

  //add styles here

}
function writefood(x){

 
  if(x>0){
    database.ref('/').update({
      food:x-1
    })
    
  }
  else{
    x=0
  }
}


