// function likes(el) {
//     let id = el.id;
//     if (id === "nichole-btn") {
//         let like = document.getElementById("nichole-like")
//         like.innerText = Number(like.innerText) + 1
//     } else if (id === "neil-btn") {
//         let like = document.getElementById("neil-like")
//         like.innerText = Number(like.innerText) + 1
//     } else {
//         let like = document.getElementById("jim-like")
//         like.innerText = Number(like.innerText) + 1
//     }
// }


const neilbtn = document.getElementById("neil-btn");
const nicholebtn = document.getElementById("nichole-btn");
const btn = document.getElementById("btn");
const likeBtn1 = document.getElementById("likeBtn1");
const likeBtn2 = document.getElementById("likeBtn2");
const likeBtn3 =document.getElementById("likeBtn3");
const nicholelike = document.getElementById("nichole-like");
const neillike = document.getElementById("neil-like");
const jimlike = document.getElementById("jim-like");


// let count = 0;
// neilbtn.onclick = () => {
//     count++
//     document.getElementById("likeBtn1").textContent = `${count} like(s)`
// }


// let count1 = 0;

// nicholebtn.onclick = () => {
//     count1++;
//     document.getElementById("likeBtn2").textContent = `${count1} like(s)`

// }

// let count2 = 0;
// btn.onclick = () => {
//     count2++;
//     document.getElementById("likeBtn3").textContent = `${count2} like(s)`
// }


function increase(elementLikes) { 
   let element = Number(elementLikes.textContent) 
    element++;
    elementLikes.textContent = element;
 }


neilbtn.addEventListener("click", () =>{
    increase(neillike)
})



nicholebtn.addEventListener("click", () =>{
    increase(nicholelike)
})



btn.addEventListener("click", () =>{
    increase(jimlike)
})