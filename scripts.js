var proteins = ["Carne Asada", "Pre-cooked chicken", "Hard Boiled Egg", "Lamb", "Game Hen", "Pork Chop", "Baked Ham", "Bacon", "Taco Meat", "Smoked Salmon", "Beef Jerky", "Tofu (you're welcome sarah)", "Ground bison", "Pre-cooked chicken wings", "Hot Italian sausage", "Tilapia", "Stew Meat", "Greek Yogurt"]
var vegetable = ["Arugula", "Cucumber", "Cauliflower", "Broccoli", "Snap Peas", "Roasted Red Peppers", "Mukimane", "Canned Artichokes", "Lemon Grass", "White Mushrooms", "Turnips", "Rainbow Carrots", "Chard", "Canned Corn", "Shallots", "Garlic", "Sun Dried Tomatos"]
var fruit = ["Strawberries", "Mandarin Orange Cups", "Pineapple Chunks", "Dragon Fruit", "Raspberries", "Grapes", "Pear", "Apple", "Black Plums", "Mangoes", "Kiwi", "Cherry Pie Filling", "Fruit Cocktail", "Grapefruit"]
var weird = ["Jalapeno Chips", "Cheetos", "Flamin Hot Cheetos", "Cinnamon", "Crushed Red Pepper", "Spicy Pickles"]
var beverages = ["Whiskey", "Rum", "Whipped Cream Vodka", "The Kraken", "Champagne", "Malt Liquor", "Coke"]
var fats = ["Duck Fat", "Agave Nectar", "Turbino", "Lard", "Irish Butter", "Bacon Fat"]
var sugars = ["Twinkies", "Little Debbie Oatmeal Pies", "Donuts", "Chocolate Bar", "Candy Cane", "Sour Patch Kids", "Marshmellows", "Lemon Hard Candy", "Gum Drops", "Peeps"]
var carbstarch = ["Baked Potato", "Hawaiian Rolls", "Crostinis", "Minute Rice", "Brown Rice", "Stuffing Shells", "Mac and Cheese", "Cavatappi Pasta", "Saltine Crackers", "Hamburger Buns", "Taco Shells", "Frozen Lasagne", "Wonton Wrappers"]



function returnEntree(){
  var rand = proteins[Math.floor(Math.random() * proteins.length)];
  document.getElementById('entreeDisplay').innerHTML = rand;
  console.log(rand)
}


function returnEntreeTwo(){

  //This randomizes and then returns an array of sub-categories
  var potentialCat = ["proteins", "vegetable", "fruit", "weird", "beverages"];
  var usedCat = [];
  for(i = 0; i<4; i++){
  var rand = [Math.floor(Math.random() * potentialCat.length)]
  console.log(rand);
  usedCat.push(potentialCat[rand]);
  potentialCat.splice(rand, 1);
  console.log(usedCat[i])
  
  }
  document.getElementById('entreeDisplay').innerHTML = "Sub Categories are: " + usedCat[0] +" "+ usedCat[1] + " " + usedCat[2] + " " + usedCat[3];
  //document.getElementById('entreeDisplay').innerHTML = 'Steve';
}
//Current plan. Create an array for each category type that contains the possible sub-category options for that category
//Randomize a selection from that array, put that into a new array, then remove it for that run of the generator (prevent duplicates)
//Using the new array, randomize a selection from it's list of items. Store this in a 3rd array. Do this for each item (4 items)
//Once the 3rd array is full (4 items), update the Display object with the items from the array. 