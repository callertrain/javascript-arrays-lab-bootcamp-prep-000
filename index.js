const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(){
  return kittens.push("Ralph");
}

function destructivelyPrependKitten(){
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(){
  return [...kittens, "Broom"];
}

function prependKitten(){
  return ["Arnold", ...kittens];
}

function removeLastKitten(){
  var sliced = kittens.slice(1, 2);
  return sliced;

}
