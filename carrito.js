const boton = document.getElementById("boton") // boton agregar al carrito
const cajas = document.getElementById("cajas") // productos
const listaCompras = document.getElementById("listaCompras") //  div lista
const mensaje = document.getElementById ("mensaje")

boton.addEventListener ("click", function () {

    cajas.innerHTML = cajas.value 
    listaCompras.appendChild(cajas)
    mensaje.innerText = "Se agrego al carrito "


    
})