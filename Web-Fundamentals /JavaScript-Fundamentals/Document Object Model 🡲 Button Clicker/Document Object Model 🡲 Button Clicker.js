// const mySubmit = document.getElementById("mySubmit");

// mySubmit.onclick = function() {
//     if (mySubmit.textContent === "Login") {
//         mySubmit.textContent = "Logout";
//     } else {
//         mySubmit.textContent = "Login";
//     }
// }
const ninjaLike = document.getElementById("ninjaLike");
ninjaLike.onclick = function(){
    ninjaLike = window.alert("Ninja was liked")
}

const addDefinition = document.getElementById("addDefinition");

addDefinition.onclick = function(){
    addDefinition = addDefinition.remove();
}

   let count = 0;
 const increaseBtn = document.getElementById("increaseBtn");

 increaseBtn.onclick = function(){
     count++;
     increaseBtn.textContent = ` ${count} Likes`;
 }

 const myH1 = document.getElementById("myH1");

 myH1.onclick = function(){
    myH1.textContent = "Nizar Aljamal";
 }


//  turnOn = (elemnt) => {
//     if( elemnt.innerText === "login"){
//     elemnt.innerText = "logout"

//     }else{
//         elemnt.innerText ="login"
//     }
//  }

