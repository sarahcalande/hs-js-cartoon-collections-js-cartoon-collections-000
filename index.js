//take dwarves array and turn it to a string with numbered dwarves
//return string w/ numbered dwarves
//used for loop counter
//i+1 bc index starts at 0
function dwarfRollCall(dwarves) {
    var answer = '';
 for (var i = 0; i < dwarves.length; i++){
 answer += `${i+1}. ${dwarves[i]} `;
 }
 return answer;
}

//array of planeteer calls, converts each element to uppercase w/ exclamation
//create new array that runs through a counter and pushes each element to upper case w/ exclamation and returns new array
function summonCaptainPlanet(planeteerCalls){
   var newPlanet = [];
   for(var i = 0; i < planeteerCalls.length; i++) {
     newPlanet.push(planeteerCalls[i].toUpperCase() + '!');
   }
   return newPlanet; 
 }
 
 
 //takes array and tells us if any elements are longer than 4 characters
 //used for loop counter that will identify if length of each element is greater than 4, returns false if not
function longPlaneteerCalls(words) {
  	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
  	}
	return false;
}

//takes array of strings and returns first string that is a cheese
// need to create array with known cheeses
//use counter to run through the foods array
//use indexof method to test if any elements match
//else return no cheese
function findTheCheese (foods) {
  	var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		var cheeseIdx = cheese.indexOf(foods[i]);
		if(cheeseIdx !== -1) {
			return foods[i];
		}
	}
	return "no cheese!";

}
