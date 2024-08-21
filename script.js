document.addEventListener("DOMContentLoaded", (event) => {
  const number1Elem = document.getElementById("number1");
  const number2Elem = document.getElementById("number2");
  const sumElem = document.getElementById("sum");
  const generateBtn = document.getElementById("generate-btn");
  const sumBtn = document.getElementById("sum-btn");

  let num1 = null;
  let num2 = null;

  generateBtn.addEventListener("click", () => {
    num1 = Math.floor(Math.random() * 10) + 1; // Numbers between 1 and 10
    num2 = Math.floor(Math.random() * 10) + 1; // Numbers between 1 and 10

    number1Elem.textContent = `Number 1: ${num1}`;
    number2Elem.textContent = `Number 2: ${num2}`;
    sumElem.textContent = "Sum: -"; // Reset sum display
  });

  sumBtn.addEventListener("click", () => {
    if (num1 !== null && num2 !== null) {
      const sum = num1 + num2;
      sumElem.textContent = `Sum: ${sum}`;
    } else {
      sumElem.textContent = "Sum: -"; // Display placeholder if numbers are not generated yet
    }
  });
});
