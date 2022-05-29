let number = document.getElementById("number").innerText;
console.log(number);
number = 1;
document.getElementById("number").innerText = number;

console.log(number);

function numberEl() {
  // console.log(meters);
  // console.log(meters);
  document.getElementById("metersEl").innerText = number;
  let feet = 3.2808 * number;
  document.getElementById("feet").innerText = feet;
  let feetQ = number;
  document.getElementById("feetQ").innerText = feetQ;
  // 0.3048
  let meters = 0.3048 * number;

  document.getElementById("meters").innerText = meters;

  let liters = number;
  document.getElementById("litersEl").innerText = liters;
  let gallons = number * 0.264172;
  document.getElementById("gallons").innerText = gallons;

  document.getElementById("gallonsQ").innerText = number;
  document.getElementById("liters").innerText = number * 3.78541;

  document.getElementById("kilos").innerText = number;
  document.getElementById("pounds").innerText = number * 2.205;
  document.getElementById("poundsEl").innerText = number;
  document.getElementById("kilo").innerText = number * 0.453592;
}

numberEl();
