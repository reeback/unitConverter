let number = document.getElementById("number").innerText;
//console.log(number);
number = 20;
document.getElementById("number").innerText = number;

//console.log(number);

function numberEl() {
  // console.log(meters);
  // console.log(meters);
  document.getElementById("metersEl").innerText = number;
  let feet = 3.280839895 * number;
  document.getElementById("feet").innerText = feet.toFixed(3);
  let feetQ = number;
  document.getElementById("feetQ").innerText = feetQ;
  // 0.3048
  let meters = 0.3048 * number.toFixed(3);

  document.getElementById("meters").innerText = meters.toFixed(3);

  let liters = number;
  document.getElementById("litersEl").innerText = liters;
  let gallons = number * 0.264172;
  document.getElementById("gallons").innerText = gallons.toFixed(3);

  document.getElementById("gallonsQ").innerText = number;
  let litersQQ = number * 3.785412;
  document.getElementById("liters").innerText = litersQQ.toFixed(3);

  document.getElementById("kilos").innerText = number;
  let poundsQQ = number * 2.20462262185;
  document.getElementById("pounds").innerText = poundsQQ.toFixed(3);
  document.getElementById("poundsEl").innerText = number;
  let kiloQQ = number * 0.45359237;
  document.getElementById("kilo").innerText = kiloQQ.toFixed(3);
}

numberEl();
