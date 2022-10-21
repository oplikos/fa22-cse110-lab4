
function printSum() {
  debugger
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
}

function calculateSum(num1, num2) {
  let x = parseInt(num1);
  let y = parseInt(num2);
  let result = x + y ;
  console.log(result);
  return result
}

function init() {
  document.getElementById('printSum').addEventListener('click', printSum);
}