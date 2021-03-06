var initialPrice = document.querySelector("#initial-price");
var stockCount = document.querySelector("#stock-count");
var currentPrice = document.querySelector("#current-price");
var result = document.querySelector("#output");
var GIF = document.querySelector(".gif-overlay");

document.addEventListener("submit", clickHandler);

function clickHandler(e) {
  e.preventDefault();
  hide();
  var ini = Number(initialPrice.value);
  var cnt = Number(stockCount.value);
  var cur = Number(currentPrice.value);
  calculateProfitOrLoss(ini, cnt, cur);
}

function calculateProfitOrLoss(initial, count, current) {
  var status;
  if (initial > current) {
    //loss
    var loss = (initial - current) * count;
    var lossper = ((initial - current) / initial) * 100;
    status = 1;
    show(
      `WHOOPS!!!  Your loss is ${loss.toFixed(
        2
      )} and loss Percentage is ${lossper.toFixed(2)}% :(`,
      status
    );
    GIF.style.backgroundImage = "url('imgs/rain.gif')";
  } else if (initial < current) {
    //profit
    var profit = (current - initial) * count;
    var profitper = ((current - initial) / initial) * 100;
    status = 2;
    show(
      `YAYYY!!! Your Profit is ${profit.toFixed(
        2
      )} and profit Percentage is ${profitper.toFixed(2)}% :)`,
      status
    );
    GIF.style.backgroundImage = "url('imgs/confetti.gif')";
  } else {
    //neither
    status = 0;
    show(`No pain No gain, and No gain No pain :)`, status);
  }
}

function show(text, key) {
  switch (key) {
    case 1:
      result.style.display = "block";
      result.innerText = text;
      result.style.color = "red";
      break;

    case 2:
      result.style.display = "block";
      result.innerText = text;
      result.style.color = "green";
      break;

    case 0:
      result.style.display = "block";
      result.innerText = text;
      result.style.color = "white";
      break;

    default:
      break;
  }
}

function hide() {
  result.style.display = "none";
  result.style.color = "none";
  GIF.style.backgroundImage = "none";
}
