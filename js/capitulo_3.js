const pantalla = document.querySelector("#num")
const btnAdd = document.querySelector("#btnAdd")
let count = 1



btnAdd.addEventListener( "click", function(){
    pantalla.textContent = count++
} )