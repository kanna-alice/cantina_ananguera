function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(item.name + " adicionado ao carrinho!");
}
function completePurchase() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert("Compra finalizada! Total: R$ " + total.toFixed(2));
    localStorage.removeItem('cart');
}
