function getDoors(){
	var doors = [];
	var chosen = Math.round(Math.random()*2);
  for(var i = 0; i < 3; i++){
    if(chosen == i){
    	doors.push(true);
    }else{
    	doors.push(false);
    }
  }
  return doors;
}
function openOtherDoor(doors, chosen){
	var door1 = (chosen+1)%3;
  var door2 = (chosen+2)%3;
  if(doors[door1]){
  	return door2;
  }else{
  	return door1;
  }
}
function switchMethod(doors, results){
	var chosen = Math.round(Math.random()*2);
	var opened = openOtherDoor(doors, chosen);
  var newChoice;
  for(var i = 0; i < 3; i++){
  	if(i != chosen && i != opened){
    	newChoice = i;
      break;
    }
  }
  if(doors[newChoice]){
  	results.wins++;
  }else{
  	results.losses++;
  }
}
function stayMethod(doors, results){
	var chosen = Math.round(Math.random()*2);
	var opened = openOtherDoor(doors, chosen);
  if(doors[chosen]){
  	results.wins++;
  }else{
  	results.losses++;
  }
}
function play(playMethod, numOfTimes){
	var results = {wins: 0, losses: 0};
	for(var i = 0; i < numOfTimes; i++){
  	playMethod(getDoors(), results);
  }
  return results;
}
function printResults(playMethod, results){
	console.log("using "+playMethod+" method - wins: "+results.wins+" losses: "+results.losses);
}
var numOfTimes = 10000;
printResults("stay", play(stayMethod, numOfTimes));
printResults("switch", play(switchMethod, numOfTimes));
