the scren shot showing the watchers for num1 and num2 <br>
 ![img](sc-part3-q1.jpg)
 <br>
q1<br>
the bug was that the num1 and num2 is reading as string and adding them up as string insted of interger
<br>
q2<br>
the fix is to add parseInt in the function that add both number as shown 
<br>


the fix 
<br>
function printSum() {<br>
  debugger<br>
  let num1 = document.getElementById("num1").value;<br>
  let num2 = document.getElementById("num2").value;<br>
  document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);<br>
}<br>
<br>
function calculateSum(num1, num2) {<br>
  let x = parseInt(num1);<br>
  let y = parseInt(num2);<br>
  let result = x + y ;<br>
  console.log(result);<br>
  return result<br>
}<br>
<br>
function init() {<br>
  document.getElementById('printSum').addEventListener('click', printSum);<br>
}<br>

window.addEventListener('DOMContentLoaded', init);<br>