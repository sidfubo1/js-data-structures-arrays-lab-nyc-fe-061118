// Write your solution here!
const drivers=['Milo','Otis','Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push(name);
  return drivers;
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
  return drivers;
}

function appendDriver(name){
  var newArray=[...drivers,name];
  return newArray;
}

function prependDriver(name){
  var newArray=[name,...drivers];
  return newArray;
}

function removeLastDriver(){
  var newArray=drivers.slice(0,drivers.length-1);
  return newArray;
}









