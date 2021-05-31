const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");
let fakeScreenValue = "";
let buttonText;
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      fakeScreenValue += buttonText;
      screen.value = fakeScreenValue;
    } else if (buttonText == "C") {
      fakeScreenValue = "";
      screen.value = fakeScreenValue;
    } else if (buttonText == "=") {
      screen.value = eval(fakeScreenValue);
    } else {
      fakeScreenValue += buttonText;
      screen.value = fakeScreenValue;
    }
  });
}
