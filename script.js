const keys = document.querySelectorAll(".key");
const reset = document.querySelector(".key-reset");
const del = document.querySelector(".key-action");
const operators = document.querySelectorAll(".key-operator");
const equalTo = document.querySelector(".key-equals");
const display_input = document.querySelector(".input");
const display_output = document.querySelector(".output");
let input = "";
for (let key of keys) {
  const value = key.dataset.key;

  key.addEventListener("click", () => {
    if (value == "reset") {
      input = " ";
      display_output.innerHTML = `<h1>0</h1>`;
      display_input.innerHTML = `<p>${input}</p>`;
    } else if (value == "delete") {
      input = input.slice(0, -1);
      display_input.innerHTML = `<p>${input}</p>`;
    } else if (value == "=") {
      let result = parseFloat(eval(input).toFixed(10));
      if (result.toString().length > 12) {
        result = result.toExponential(5);
        input = result;
      } else {
        input = result;
      }
      display_output.innerHTML = `<h1>${result}</h1>`;
    } else {
      input += value;
      display_input.innerHTML = `<p>${input}</p>`;
    }
  });
}
