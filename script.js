function addToCart() {
    alert("Wonderfull Choice You have Made!!!!");

}
var quantityOFScarf = 0;
var price = 0;
var total = 0;
var cash = 0;
function cash() {
    if (total >= cash) {
        alert('your balance is 0');
    }
    document.querySelector('#cash').value = cash;
}
function add() {
    quantityOFScarf++;

    document.querySelector('#addMin').value = quantityOFScarf;
    total = quantityOFScarf * price;
    document.querySelector('#total').innerHTML = total;
}
function minus() {
    if (quantityOFScarf > 0) {
        quantityOFScarf--;
    }
    document.querySelector('#addMin').value = quantityOFScarf;
    total = quantityOFScarf * price;

    document.querySelector('#total').innerHTML = total;
}
