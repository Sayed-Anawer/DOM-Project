let input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let element = document.getElementsByTagName("li");
let addEl = document.querySelector(".add-element");
let h4El = document.createElement("h4");
let contents = document.querySelector(".container");

// define funcitons
h4El.innerText = "You must write something !!";
h4El.style.color = "red";
const btnEvent = () => {
  let txt = input.value;
  if (txt === "") {
    contents.insertBefore(h4El, addEl);
  } else {
    let li = document.createElement("li");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = "";
    h4El.innerText = "";
  }
};
btn.addEventListener("click", btnEvent);
list.onclick = function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
};
