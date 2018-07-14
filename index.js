function dwarfRollCall(dwarves) {
  var i = 0; i < dwarves.length; i++;
  return `${i}. ${dwarves[0]} ${i+1}. ${dwarves[1]} ${i+2}. ${dwarves[2]}`
}

function summonCaptainPlanet(planeteerCalls){
   var newPlanet = [];
   for(var i = 0; i < planeteerCalls.length; i++) {
     newPlanet.push(planeteerCalls[i].toUpperCase() + '!');
   }
   return newPlanet; 
 }
 
function longPlaneteerCalls(words) {
  	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}

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
