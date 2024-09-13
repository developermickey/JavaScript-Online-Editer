// Getting elements
const codeInput = document.getElementById("codeInput");
const runCodeButton = document.getElementById("runCode");
const output = document.getElementById("output");

// Function to run the user's JavaScript code
function runCode() {
  const userCode = codeInput.value;
  output.innerText = ""; // Clear previous output

  // Capture console.log output
  const originalLog = console.log;
  console.log = function (message) {
    output.innerText += message + "\n";
  };

  try {
    new Function(userCode)(); // Execute the user's code
  } catch (error) {
    output.innerText += `Error: ${error.message}\n`;
  }

  console.log = originalLog; // Restore the original console.log function
}

// Event listener to run code when the button is clicked
runCodeButton.addEventListener("click", runCode);
