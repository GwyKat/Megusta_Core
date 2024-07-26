// AUMENTAR LIKES
// linn
let tocarlinn= document.getElementById("like_linn").addEventListener("click", incrementolinn);
let nlikelinn= document.querySelector("#num_linn")
// lina
let tocarlina= document.getElementById("like_lina").addEventListener("click", incrementolina);
let nlikelina= document.querySelector("#num_lina")
// mateo
let tocarmateo= document.getElementById("like_mateo").addEventListener("click", incrementomateo);
let nlikemateo= document.querySelector("#num_mateo")


// AUMENTAR LIKES
// linn
function incrementolinn(){
    nlikelinn.innerText ++;
}
// lina
function incrementolina(){
    nlikelina.innerText ++;
}
// mateo
function incrementomateo(){
    nlikemateo.innerText ++;
}