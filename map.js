var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(array, action) {
  var mappy = [];
  for(x of array) {
    mappy.push(action(x));
  }
  console.log(mappy);
}