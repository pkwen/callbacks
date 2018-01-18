// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(e, i) {
    if (e === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him at the " + index + " position!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);