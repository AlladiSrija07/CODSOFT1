let input = "";

function append(value) {
  input += value;
  updateDisplay();
}

function calculate() {
  try {
    input = eval(input).toString();
  } catch {
    input = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").textContent = input || "0";
}
