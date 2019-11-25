//Need to remove Beverages and re-do sugars into "desserts"
//Perhaps have multiple categories specific to dessert, that broaden the potential result set

var proteins = ["Carne Asada", "Rotisserie chicken", "Hard Boiled Egg", "Lamb", "Game Hen", "Pork Chop", "Baked Ham", "Bacon", "Taco Meat", "Smoked Salmon", "Beef Jerky", "Tofu (you're welcome sarah)", "Ground bison", "Pre-cooked chicken wings", "Hot Italian sausage", "Tilapia", "Stew Meat", "Greek Yogurt"]
var vegetable = ["Arugula", "Cucumber", "Cauliflower", "Broccoli", "Snap Peas", "Roasted Red Peppers", "Mukimane", "Canned Artichokes", "Lemon Grass", "White Mushrooms", "Turnips", "Rainbow Carrots", "Chard", "Canned Corn", "Shallots", "Garlic", "Sun Dried Tomatos"]
var fruit = ["Strawberries", "Mandarin Orange Cups", "Pineapple Chunks", "Dragon Fruit", "Raspberries", "Grapes", "Pear", "Apple", "Black Plums", "Mangoes", "Kiwi", "Cherry Pie Filling", "Fruit Cocktail", "Grapefruit"]
var weird = ["Jalapeno Chips", "Cheetos", "Flamin Hot Cheetos", "Cinnamon", "Crushed Red Pepper", "Spicy Pickles"]
var beverages = ["Whiskey", "Rum", "Whipped Cream Vodka", "The Kraken", "Champagne", "Malt Liquor", "Coke"]
var fats = ["Duck Fat", "Agave Nectar", "Lard", "Irish Butter", "Bacon Fat"]
var sugars = ["Twinkies", "Raw Sugar", "Little Debbie Oatmeal Pies", "Donuts", "Chocolate Bar", "Candy Cane", "Sour Patch Kids", "Marshmellows", "Lemon Hard Candy", "Gum Drops", "Peeps"]
var carbstarch = ["Baked Potato", "Hawaiian Rolls", "Crostinis", "Minute Rice", "Brown Rice", "Stuffing Shells", "Mac and Cheese", "Cavatappi Pasta", "Saltine Crackers", "Hamburger Buns", "Taco Shells", "Frozen Lasagne", "Wonton Wrappers"]

function returnEntree(){

  //Create the array of available sub categories and empty array of used sub categories
  //var potentialCat = ["proteins", "vegetable", "fruit", "weird", "beverages", "fats", "carbstarch"];
  var potentialCat = [proteins, vegetable, fruit, weird, fats, carbstarch];
  var usedCat = [];
  var selectedItems = [];
  
  //Iterate through 4 times, randomly picking categories from the list of potential categories and removing them from that list
  for(i = 0; i<4; i++){
    var rand = [Math.floor(Math.random() * potentialCat.length)]
    usedCat.push(potentialCat[rand]);
    potentialCat.splice(rand, 1);
    //console.log(usedCat[i])
  }
  //Use the used categories list an grab an individual item from each of those lists.
  for(i = 0; i<4; i++){
    var rand = [Math.floor(Math.random() * usedCat[i].length)]
    selectedItems.push(usedCat[i][rand])
    console.log(i, selectedItems[i])
  }
  document.getElementById('entreeDisplay').innerHTML = "Ingredients are: " + selectedItems[0] + ", " + selectedItems[1] + ", " + selectedItems[2] + ", " + selectedItems[3] + "<br><br>"
}

function returnAppetizer(){

  //Create the array of available sub categories and empty array of used sub categories
  var potentialCat = [proteins, vegetable, fruit, weird, fats, carbstarch];
  var usedCat = [];
  var selectedItems = [];
  
  //Iterate through 4 times, randomly picking categories from the list of potential categories and removing them from that list
  for(i = 0; i<4; i++){
    var rand = [Math.floor(Math.random() * potentialCat.length)]
    usedCat.push(potentialCat[rand]);
    potentialCat.splice(rand, 1);
 
  }
 
  for(i = 0; i<4; i++){
    var rand = [Math.floor(Math.random() * usedCat[i].length)]
    selectedItems.push(usedCat[i][rand])
    console.log(i, selectedItems[i])
  }
  document.getElementById('appetizerDisplay').innerHTML = "Ingredients are: " + selectedItems[0] + ", " + selectedItems[1] + ", " + selectedItems[2] + ", " + selectedItems[3] + "<br><br>"
}

//This needs to be refactored to provide better dessert type ingredients, as the list of ingredients from each sub category do not currently create good baskets
function returnDessert(){

  var potentialCat = [fruit, weird, sugars, sugars];
  var usedCat = [];
  var selectedItems = [];
  
  
  for(i = 0; i<4; i++){
    var rand = [Math.floor(Math.random() * potentialCat.length)]
    usedCat.push(potentialCat[rand]);
    potentialCat.splice(rand, 1);
  
  }
  
  for(i = 0; i<4; i++){
    var rand = [Math.floor(Math.random() * usedCat[i].length)]
    selectedItems.push(usedCat[i][rand])
    console.log(i, selectedItems[i])
  }
  document.getElementById('dessertDisplay').innerHTML = "Ingredients are: " + selectedItems[0] + ", " + selectedItems[1] + ", " + selectedItems[2] + ", " + selectedItems[3] + "<br><br>"
}
//Current plan. Create an array for each category type that contains the possible sub-category options for that category
//Randomize a selection from that array, put that into a new array, then remove it for that run of the generator (prevent duplicates)
//Using the new array, randomize a selection from it's list of items. Store this in a 3rd array. Do this for each item (4 items)
//Once the 3rd array is full (4 items), update the Display object with the items from the array. 