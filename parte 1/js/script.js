console.log("hola daaaa nana") 
// AUMENTAR LIKES
let tocarbtn= document.getElementById("like_linn").addEventListener("click", incrementolike);
let nlike= document.querySelector("#num_linn")

// AUMENTAR LIKES
function incrementolike(){
    nlike.innerText ++;
}