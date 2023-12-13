function checkOddOrEven() {
  

  var numberInput = document.getElementById("numberInput");


  var resultElement = document.getElementById("result");


  var number = parseInt(numberInput.value);

  
  if (isNaN(number)) {
    resultElement.innerText = "Please enter a valid number.";
  } else if (number % 2 === 0) {
    resultElement.innerText = "The number is even.";
  } else {
    resultElement.innerText = "The number is odd.";
  }
}
