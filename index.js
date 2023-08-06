let centro1 = document.querySelector(".centro")
let centro2 = document.querySelector(".segundo")

let boton = document.getElementById("submit")
let Numero = document.getElementById("number")
let botones = document.querySelectorAll(".rating-number")
let orange = 'hsl(25, 97%, 53%)'


botones.forEach((numero) => {

    numero.addEventListener("click", () => {
        Numero.innerHTML = numero.innerHTML
    })
})

//This code verifies that if you don't put the value, it gives you an alert

/*boton.addEventListener("click", () => {
    const create = document.getElementById("no select")
    
    if(create === null){
        alert("selecciona un valor")
    }else{
            centro2.classList.remove(".segundo")
            centro1.style.display = "none"
            centro2.style.display = "flex"
    }
})*/

//This code verifies that when I select a number it appears


boton.addEventListener("click", () => {
    const create = document.getElementById("no select")
    
    if((create === null) && (create === botones)){
        alert("selecciona un valor")
    }else{
            centro2.classList.remove(".segundo")
            centro1.style.display = "none"
            centro2.style.display = "flex"
    }
})
