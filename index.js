function dwarfRollCall(dwarves) {
    var answer = '';
 for (var i = 0; i < dwarves.length; i++){
 answer += `${i+1}. ${dwarves[i]} `;
 }
 return answer;
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
