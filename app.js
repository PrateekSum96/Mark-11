const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const message = document.querySelector("#message-shown");

function compareValue(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    message.innerText = luckyNumber + " is lucky number🥳🥳";
  } else {
    message.innerText = luckyNumber + " is not that lucky☹️☹️";
  }
}

function checkBirthDayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (dob && luckyNumber.value) {
    compareValue(sum, luckyNumber.value);
  } else {
    message.innerText = "Please enter both the fields😡😡";
  }
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
