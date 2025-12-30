console.log("page loaded...");

// function changeName() {
//     let name = document.querySelector("#jane-name")
//     name.innerText = "Nizar Aljamal"
// }

// function deleteBox(el) {
//     let parent = el.closest(".card-list-item")
//     parent.remove()
//     let connectionNumber = document.querySelectorAll(".badge")
//     connectionNumber[0].innerText = Number(connectionNumber[0].innerText) - 1
//     if (el.alt === "accept") {
//         connectionNumber[1].innerText = Number(connectionNumber[1].innerText) + 1
//     }
// }

const changeProfile = document.getElementById("changeProfile");
const deleteBox = document.getElementById("closeBox");
const num1 = document.getElementById("num1");
const acceptBox = document.getElementById("acceptBox");
const acceptBox1 = document.getElementById("acceptBox1");
const closeBox1 = document.getElementById("closeBox1");
const cardList = document.getElementById("cardList");

changeProfile.onclick = () => {
  document.getElementById("jane-name").textContent = "Nizar Aljamal";
};

deleteBox.onclick = () => {
  document.getElementById("cardListItem").remove();
  num1.textContent = Number(num1.textContent) - 1;
};

acceptBox.onclick = () => {
  const cardListItem = document.getElementById("cardListItem");
  const actionSpan = cardListItem.querySelector("span:last-child");
  if (actionSpan) {
    actionSpan.remove();
  }
  cardList.appendChild(cardListItem);
  num1.textContent = Number(num1.textContent) + 1;
};


closeBox1.onclick = () => {
  document.getElementById("cardListItem1").remove();
  num1.textContent = Number(num1.textContent) - 1;
};

acceptBox1.onclick = () => {
  const cardListItem1 = document.getElementById("cardListItem1");
  const actionSpan1 = cardListItem1.querySelector("span:last-child");
  if (actionSpan1) {
    actionSpan1.remove();
  }
  cardList.appendChild(cardListItem1);
  num1.textContent = Number(num1.textContent) + 1;
};
