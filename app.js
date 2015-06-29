// Basic alert
// alert("hello from Me");


// Write something to web page
// document.write("Hello Boulder");


// Variables
// var nameList = 100;
//
//   alert(nameList);

// Arrays
// var arrayName = new Array(10, 20, 40, 4000, 200, "Dude!");
//
// alert(arrayName[3]);
// alert(arrayName[1]);
// alert(arrayName[0]);
// alert(arrayName[5]);

// Define a repeatify function on the String object. The function accepts an integer
// that specifies how many times the string has to be repeated. The function returns
// the string repeated the number of times specified. For example: console.log('hello'.repeatify(3));

String.prototype.repeatify = String.prototype.repeatify || function(times){
  var str = '';

  for(var i=0; i<times; i++){
    str +=this;
  }
  return str;
};

console.log('hello'.repeatify(3));
