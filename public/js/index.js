const socket = io();

const formProducts = document.getElementById('form-products');

formProducts.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputProducts = document.getElementsByClassName('input-products');
    const msg = inputProducts.value;
    socket.emit('message', msg);
    inputProducts.value = '';
});

socket.on('products', ({realTimeProducts}) => {
    const listProduct = document.getElementById('list-products');
    listProduct.innerText = '';
    realTimeProducts.forEach((data) =>{
        const li = document.createElement('li');
        li.innerText = `${data}`;
        listProduct.appendChild(li);
    })
});