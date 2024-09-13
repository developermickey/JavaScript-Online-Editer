const copyButton = document.getElementById("copyButton");
const codeBlock = document.getElementById("codeBlock");

copyButton.addEventListener("click", function () {
  // Create a temporary textarea to copy the code
  const textarea = document.createElement("textarea");
  textarea.value = codeBlock.textContent;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Alert or notify the user that the code is copied
  alert("Code copied to clipboard!");
});
