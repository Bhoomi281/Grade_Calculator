const handleChange = (input) => {
  if (input.value < 0) {
    input.value = 0;
    alert("Please enter number in 0-100 range");
  } else if (input.value > 100) {
    input.value = 100;
    alert("Please enter number in 0-100 range");
  }
};

function Calculate() {
  let a = parseInt(document.getElementById("one").value);
  let b = parseInt(document.getElementById("two").value);
  let c = parseInt(document.getElementById("three").value);
  let d = parseInt(document.getElementById("four").value);

  let total = a + b + c + d;
  let Average = total / 4;
  let overallgrade = (total / 400) * 100;
  document.getElementById("totalmarks").innerHTML = total;
  document.getElementById("average").innerHTML = Average;
  if (overallgrade >= 90) {
    document.getElementById("grade").innerHTML = "A";
  } else if (overallgrade >= 80 && overallgrade < 89) {
    document.getElementById("grade").innerHTML = "B";
  } else if (overallgrade >= 70 && overallgrade < 79) {
    document.getElementById("grade").innerHTML = "C";
  } else if (overallgrade >= 60 && overallgrade < 69) {
    document.getElementById("grade").innerHTML = "D";
  } else if (overallgrade < 60) {
    document.getElementById("grade").innerHTML = "E";
  }
  if (a <= 35 || b <= 35 || c <= 35 || d <= 35) {
    document.getElementById("grade").innerHTML = "F";
  }
  return false;
}
