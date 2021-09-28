var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#chk-btn");
var outputB= document.querySelector(".output");
var bodyColor = document.querySelector(".body");

checkBtn.addEventListener('click', submitHandler);

function submitHandler() {
     var ip = Number(initialPrice.value);
     var qty = Number(stocksQuantity.value);
     var curr = Number(currentPrice.value);
     if (ip && qty && curr) {
          calculateProfitAndLoss(ip, qty, curr);
     } else {
          showMessage(`Please enter all three fields`);
     }
}




function calculateProfitAndLoss(initial, quantity, current) {

    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / (initial * quantity)) * 100;
         bodyColor.style.backgroundColor="red"
        showMessage (`OOPS!  Your loss is ${loss} and the loss percentage is ${lossPercentage} %`);

    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / (initial * quantity)) * 100;
        bodyColor.style.backgroundColor="green"
         showMessage(` Your Profit is ${profit} and the profit percentage is ${profitPercentage} %`);


    } else {
         
         showMessage(`No pain no gain , No gain no pain `);
    }

}

function showMessage(message) {
    outputB.innerHTML = message;
}










