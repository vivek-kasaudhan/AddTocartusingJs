// function showElement(){
//     const element = document.getElementById("cart-pd");
//     const element2 =  document.getElementById("unit1")
//     const element3 =  document.getElementById("radio")
//     element.style.display = "flex";
//     element2.style.border = "1px solid #FF6B82"
//     element3.style.background = "#FF6B82"

// }

function showElement(unit) {
    // Hide other cart sections and remove styles from other units
    document.querySelectorAll('.cart').forEach(cart => cart.style.display = 'none');
    document.querySelectorAll('.units').forEach(el => el.classList.remove('highlighted'));

    // Show the selected cart and highlight the clicked unit
    const cart = unit.querySelector('.cart');
    const radio = unit.querySelector('input[type="radio"]');

    if (cart) cart.style.display = 'flex';
    unit.classList.add('highlighted');
    if (radio) radio.checked = true;  // Check the corresponding radio button
}