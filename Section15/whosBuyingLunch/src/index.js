function whosPaying(names) {
  random = getRandomInt(0, names.length);
  return names[random] + " is buying a lunch"
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log (whosPaying(["Angela", "Ben", "Jenny", "Michael", "Cloe"]));
