let list = document.getElementById("list");
const taskInput = document.getElementById("taskInput");

function addTask() {
  const listItem = document.createElement("li");
  const textTag = document.createElement("p");
  const dltBtn = document.createElement("button");
  const dltTxt = document.createTextNode("Delete");
  const text = document.createTextNode(taskInput.value);
  if (taskInput.value == "") {
    alert("Enter some text!");
  } else {
    textTag.appendChild(listItem);
    list.appendChild(listItem);
    listItem.appendChild(textTag);
    textTag.appendChild(text);
    dltBtn.appendChild(dltTxt);
    listItem.appendChild(dltBtn);
    dltBtn.className = "delete-task";
    taskInput.value = "";
  }
}

const deleteButtons = document.querySelectorAll(".delete-task");
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log("Triggered!");
    let listItem = button.parentElement;
    list.removeChild(listItem);
  });
});

const close = document.getElementsByClassName("delete-task");

// let len = deleteButtons.length;
// console.log(len);
// for (let i = 0; i < len; i++) {
//   close[i].addEventListener("click", () => {
//     let parentList = this.parentElement;
//     // let list = document.getElementById("list");
//     parentList.style.display = "none";
//   });
// }

// close.addEventListener("click", () => {
//   console.log(len);
// });

// close.onclick = function () {
//   console.log("delete btn triggered!");
//   console.log(close[0].innerHTML);
// };

// for (let i = 0; i < len; i++) {
//   close[i].onclick = function () {
//     console.log("delete btn triggered again!");
//     let div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// close.addEventListener("click", targetButton(event));

// function targetButton(ev) {}

// function deleteTask() {
//   let parent = this.parentElement;
//   parent.style.display = "none";
// }

// var close = document.getElementsByClassName("close");
// var i;
// var l = close.length; //redeclared using var
// for (i = 0; i < l; i++) {
//     close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }
