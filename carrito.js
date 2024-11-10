const buttonsAgregar = document.querySelectorAll('.agregar');
const listaCarrito = document.getElementById('lista-carrito');
const totalElement = document.getElementById('total');
const botonComprar = document.getElementById('comprar');

let carrito = [];
let total = 0;

buttonsAgregar.forEach(button => {
    button.addEventListener('click', () => {
        const nombre = button.getAttribute('data-nombre');
        const precio = parseFloat(button.getAttribute('data-precio'));

        agregarAlCarrito(nombre, precio);
        actualizarCarrito();
    });
});

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
}

function actualizarCarrito() {
    listaCarrito.innerHTML = '';

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

botonComprar.addEventListener('click', () => {
    if (carrito.length > 0) {
        alert(`Pedido realizado. Total: $${total.toFixed(2)}`);
        carrito = [];
        total = 0;
        actualizarCarrito();
    } else {
        alert('El carrito está vacío.');
    }
});
