// script.js
function calculatePrice() {
    var pages = parseInt(document.getElementById('pages').value);
    var covers = parseInt(document.getElementById('covers').value);
    var profit;
    var price;
    var anerror = "Error: Too many covers";

    if (covers == 1) {
        profit = 100;
    } else if (covers >= 2 && covers <= 4) {
        profit = 50 * (covers - 1) + 100;
    } else if (covers >= 5) {
        profit = 250 + 25 * (covers - 4);
    } else {
        document.getElementById('result').innerText = anerror;
        return;
    }

    price = covers * 9 + Math.floor(pages * 0.5 * 0.60) + profit;

    document.getElementById('result').innerText = "The Book Price is " + price;
}
