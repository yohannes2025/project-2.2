//Add event listener for the display and the buttons
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");
  //Add event listener for angleMode
  const angleModeElements = document.getElementsByName("angleMode");

  let currentValue = ""; // Current value being entered  
  let angleMode = "degree"; // Default angle mode
  

// Function to calculate factorial
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error(
      "Factorial Error: Only non-negative integers are allowed"
    );
  }
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Function to delete the last character from input
function deleteLast() {
  if (currentValue.length > 0) {
    currentValue = currentValue.slice(0, -1); // Remove the last character
    display.value = currentValue || "0"; // Update the display, default to "0" if empty
  }
}




  function calculateResult() {
    const convertedValue = currentValue
      .replace("x", "*")
      .replace("÷", "/")
      .replace("%", "*0.01")
      .replace("π", "Math.PI")
      .replace("e", "Math.PI")
      .replace("^", "**")
      .replace("sqrt", "Math.sqrt")
      .replace("Rand", "Math.random()")
      .replace("sin", "Math.sin")
      .replace("cos", "Math.cos")
      .replace("tan", "Math.tan")
      .replace("ln", "Math.log")
      .replace("log", "Math.log10")
      .replace(/(\d+)!/g, (match, number) => factorial(Number(number)));
      
      

      
    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
  }

  //Add click event listener for each button
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      const value = button.innerText;
      //if AC key is clicked clear the display or make it empty
      if (value == "AC") {
        currentValue = "";
        display.value = currentValue;
      } else if (value == "=") {
        calculateResult();
      } else if (value === "⌫") {
        deleteLast();
      }else {
        currentValue += value;
        display.value = currentValue; //set the innerText of the button to current value and then display it.
      }
    });
  }
  // Event listener for angle mode toggle
  angleModeElements.forEach((element) => {
    element.addEventListener("change", function (event) {
      angleMode = event.target.value;
      console.log("Angle Mode: ", angleMode);
    });
  });

});


