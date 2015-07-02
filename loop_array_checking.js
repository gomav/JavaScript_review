var bestCities = ["Denver", "Boulder", "San Francisco", "San Diego", "Austin"];

var userInput = prompt("What is your city?");

for(var i = 0; i <= bestCities.length; i++) {
  if(userInput === bestCities[i]) {
    // alert("Congratulations!!! You live in a kick-ass city.");
    swal({   title: "Awesome!",   text: "Congratulations!!! You live in a kick-ass city.",   type: "error",   confirmButtonText: "Cool" });
    break;
  } else
    // alert("Wow! Your city sucks, I am so sad for you!");
    swal({   title: "Sorry",   text: "Wow! Your city sucks, I am so sad for your!",   type: "error",   confirmButtonText: "Cool" });
    break;
}
