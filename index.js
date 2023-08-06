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

boton.addEventListener('click', () => {
    if (Numero.innerHTML.length === 0) {
    alert('selecciona un valor')
    } else {
    centro2.classList.remove('.segundo')
    centro1.style.display = 'none'
    centro2.style.display = 'flex'
    }
    })