// Write your solution here!
const drivers=['Milo','Otis','Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph');
  return drivers;
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
  return drivers;
}

function destructivelyRemoveLastDriver(){
  