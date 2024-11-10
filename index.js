function submit() {
  let referenceOfUserInput = document.getElementById("userInput");
  let userInput = referenceOfUserInput.value;
  // console.log("user has entered " + userInput);
  // this above code gets what the user has typed
  let referenceOfResult = document.getElementById("output");
  let result = referenceOfResult.innerText;
  // console.log(result);
  // this code get the text of the result para
  if (isNaN(userInput)) {
    console.log("user has not entered a number ");
    referenceOfResult.innerText = "Please enter a number";
  } else {
    //checks if num is even
    console.log("user entered number ");
    if ((userInput & 1) === 0) {
      console.log("yup user entered a number that is divisible by 2 ");
      referenceOfResult.innerText = "ur number is even";
    } else {
      console.log("nope user entered a number that is not divisible by 2 ");
      referenceOfResult.innerText = "ur number is odd";
    }
  }

}
