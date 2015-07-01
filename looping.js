var i = 0;
var message = "hello";
  while(i < 5){
    document.write("<li>" + i + " " + message + "</li>");
    i++;
    // Should "pop-up" 5 times - illustrating iterating through the loop.
    alert("Must be working!");
}
