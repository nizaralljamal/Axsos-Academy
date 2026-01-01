// function weatherLoading() {
//     alert("Loading weather report...")
// }

// function dismissCookie(el) {
//     let parent = el.parentElement
//     parent.remove()
// }

// function tempConvert(el) {
//     let degrees = document.querySelectorAll(".degree")
//     for (let i = 0; i < degrees.length; i++) {
//         if (el.value === "fehrenhite") {
//             degrees[i].innerText = Math.round((Number(degrees[i].innerText) * (9 / 5)) + 32)
//         } else {
//             degrees[i].innerText = Math.round((Number(degrees[i].innerText) - (32)) * 5 / 9)
//         }
//     }
// }

const weatherLoade = document.querySelectorAll(".city-btn");

weatherLoade.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Loading weather report...");
  });
});

const acceptBtn = document.getElementById("accept-btn");

const cookiescontainer = document.getElementById("cookies-container");
acceptBtn.addEventListener("click", () => {
  cookiescontainer.remove();
});

let degrees = document.querySelectorAll(".degree");


function tempConvert(element) {
    if (element.value === "fehrenhite") {
        degrees.forEach(degree => {
            let temp = Number(degree.textContent);
            degree.textContent = Math.round((temp * 9/5) + 32);
        });
    } else {
        degrees.forEach(degree => {
            let temp = Number(degree.textContent);
            degree.textContent = Math.round((temp - 32) * 5/9);
        });
    }
}