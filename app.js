const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");

function compareValue(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    console.log(luckyNumber, "is lucky number🥳🥳");
  } else {
    console.log(luckyNumber, "is not that lucky☹️☹️");
  }
}

function checkBirthDayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  compareValue(sum, luckyNumber.value);
}
function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthDayIsLucky);
