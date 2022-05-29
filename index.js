let number = document.getElementById("number").innerText;
console.log(number);
number = 32;
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
}

numberEl();
