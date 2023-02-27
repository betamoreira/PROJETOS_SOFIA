var dog, sadDog, happyDog, database;
var foodS, foodStock;
var fedTime, lastFed;
var feed, addFood;
var foodObj;

function preload() {
  sadDog = loadImage("assets/Dog.png");
  happyDog = loadImage("assets/happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000, 400);

  foodObj = new Food();

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);

  dog = createSprite(800, 200, 150, 150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  feed = createButton("Alimente o cão");
  feed.position(700, 95);

  //Descomente o bloco de código correto para chamar a função "FeedDog"
  // feed.mousePressed(feedDog);
  // mousePressed(feedDog);
  // feed.pressedMouse(feedDog);
  // feed.mousePressed(function.feedDog);

  addFood = createButton("Adicionar Comida");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);
}

function draw() {
  background(46, 139, 87);
  foodObj.display();

  fedTime = database.ref("FeedTime");
  fedTime.on("value", function (data) {
    lastFed = data.val();
  });

  drawSprites();
}

//função para ler o estoque de comida
function readStock(data) {
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}

//função para atualizasr o estoque de comida e horário da última refeição
function feedDog() {
  //Descomente o bloco de código correto para alterar a imagem do Dog ao alimentá-lo
  // dog.addImg(happyDog);
  // dog.loadImage(happyDog);
  // dog.image(happyDog);
  // dog.addImage(happyDog);

  var food_stock_val = foodObj.getFoodStock();
  if (food_stock_val <= 0) {
    foodObj.updateFoodStock(food_stock_val * 0);
  } else {
    foodObj.updateFoodStock(food_stock_val - 1);
  }

  database.ref("/").update({
    Food: foodObj.getFoodStock(),
    FeedTime: hour(),
  });
}

//função para adicionar comida ao estoque
function addFoods() {
  dog.addImage(sadDog);
  foodS++;
  database.ref("/").update({
    Food: foodS,
  });
}
