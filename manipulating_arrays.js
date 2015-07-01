var cars = [" BMW", " Land Rover", " Mercedes", " Honda", " Knight Rider"];

  // cars[0] = " BMW";
  // cars[1] = " Land Rover";
  // cars[2] = " Knight Rider";

  // Removing an item from an Array.
  // cars.pop();

  // Adding items to an Array.
  // cars.push(" Porsche", " Yugo", " Festiva");

  // Removing the first item in the array using shift.
    // cars.shift();

    // Adding items to the beginning of an array, using unshift.
    // cars.unshift(" Pegeout", " Saab");

    // Using splice (first position is where to add, second position is to remove from the insert position)
    // cars.splice(2, 0, " Barracuda", " Avenger");

    // Using slice - first number is the spot to copy, the second parameter is how many to copy.
    var fancyCars = cars.slice(2, 5);

  // alert(cars);
  // document.write(cars);
  document.write(fancyCars);
