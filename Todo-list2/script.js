// variable Intialization
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var h4El = document.createElement("h4");
var h2EL = document.querySelector(".h2el");
var contents = document.querySelector("#main");
let input = document.querySelector("#item");

// Form Submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// creating addItem Function
function addItem(e) {
  e.preventDefault();
  h4El.innerText = "You must write something !!";
  h4El.style.color = "red";
  const newItem = document.getElementById("item").value;
  const li = document.createElement("li");
  const liText = document.createTextNode(newItem);

  //condition if have value or not
  if (newItem == "") {
    contents.insertBefore(h4El, h2EL);
  } else {
    li.className = "list-group-item";
    li.appendChild(liText);
    itemList.appendChild(li);
    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    input.value = "";
    h4El.innerText = "";
  }
}

// Creating removeItems function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure ?")) {
      let removeLi = e.target.parentElement;
      itemList.removeChild(removeLi);
    }
  }
}
