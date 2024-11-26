const pantalla = document.querySelector("#num")
const btnAdd = document.querySelector("#btnAdd")
let count = 1


btnAdd.addEventListener( "click", function(){
    pantalla.textContent = count++

    if(count == 4){
        console.log('Habilitaste el cap 3')
        let cap3 = JSON.parse( localStorage.getItem('todosCapitulos') )
        cap3[2].habilitado = true
        localStorage.setItem( 'todosCapitulos', JSON.stringify(cap3) ) 
        console.log(cap3)
    }

} )