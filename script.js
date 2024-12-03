const btnConfirm = document.getElementById("Confirm");

btnConfirm.addEventListener("click", function (event) {
  event.preventDefault();

  // for coloring the border

  const cardholderNameField = document.getElementById("cardholder-name");
  const inputCardNumberField = document.getElementById("card-number");
  const inputMMField = document.getElementById("date-mm");
  const inputYearField = document.getElementById("date-yy");
  const inputCvcField = document.getElementById("cvc");

  const cardholderNames = document
    .getElementById("cardholder-name")
    .value.trim();
  const inputCardNumber = document.getElementById("card-number").value.trim();
  const inputMM = document.getElementById("date-mm").value.trim();
  const inputYear = document.getElementById("date-yy").value.trim();
  const inputCvc = document.getElementById("cvc").value.trim();

  const cardNameError = document.getElementById("cardName-error");
  const cardNumberError = document.getElementById("cardNumber-error");
  const cardMMError = document.getElementById("cardMM-error");
  const cardYYError = document.getElementById("cardYY-error");
  const cardCVCError = document.getElementById("cardCVC-error");

  cardNameError.textContent = "";
  cardNumberError.textContent = "";
  cardMMError.textContent = "";
  cardYYError.textContent = "";
  cardCVCError.textContent = "";

  let hasError = false;

  const cardholderNamePattern = /^[A-Za-z]+ [a-zA-Z]+$/;
  if (cardholderNames === "") {
    cardNameError.textContent = "Cardholder name is required";
    cardholderNameField.style.border = "1px solid red";
    hasError = true;
  } else if (!cardholderNamePattern.test(cardholderNames)) {
    cardNameError.textContent = "Enter a valid cardholder name";
    cardholderNameField.style.border = "1px solid red";
    hasError = true;
  } else {
    cardholderNameField.style.border = "1px solid hsl(0, 0%, 80%)";
   
  }

  // Validation for Card Number
  const cardNumberPattern = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
  if (inputCardNumber === "") {
    cardNumberError.textContent = "Card number is required";
    inputCardNumberField.style.border = "1px solid red";
    hasError = true;
  } else if (!cardNumberPattern.test(inputCardNumber)) {
    cardNumberError.textContent =
      "Enter a valid card number in the format 1234 5678 9123 0000";
    inputCardNumberField.style.border = "1px solid red";
    hasError = true;
  } else {
    inputCardNumberField.style.border = "1px solid hsl(0, 0%, 80%)";
  }

  // Validation for Expiry Month (MM)
  if (inputMM === "") {
    cardMMError.textContent = "Month is required";
    inputMMField.style.border = "1px solid red";
    hasError = true;
  } else if (isNaN(inputMM) || inputMM < 1 || inputMM > 12) {
    cardMMError.textContent = "Enter a valid month (01 - 12)";
    inputMMField.style.border = "1px solid red";
    hasError = true;
  } else {
    inputMMField.style.border = "1px solid hsl(0, 0%, 80%)";
  }

  // Validation for Expiry Year (YY)
  if (inputYear === "") {
    cardYYError.textContent = "Year is required";
    inputYearField.style.border = "1px solid red";
    hasError = true;
  } else if (isNaN(inputYear) || inputYear.length !== 2) {
    cardYYError.textContent = "Enter a valid year (e.g., 23)";
    inputYearField.style.border = "1px solid red";
    hasError = true;
  } else {
    inputYearField.style.border = "1px solid hsl(0, 0%, 80%)";
  }

  // Validation for CVC
  if (inputCvc === "") {
    cardCVCError.textContent = "CVC is required";
    inputCvcField.style.border = "1px solid red";
    hasError = true;
  } else if (isNaN(inputCvc) || inputCvc.length !== 3) {
    cardCVCError.textContent = "Enter a valid 3-digit CVC";
    inputCvcField.style.border = "1px solid red";
    hasError = true;
  } else {
    inputCvcField.style.border = "1px solid hsl(0, 0%, 80%)";
  }

  // Update the DOM if no errors
  if (!hasError) {
    document.getElementById("cardholder-names").textContent = cardholderNames;
    document.getElementById("card-numbers").textContent = inputCardNumber;
    document.getElementById("date").textContent = `${inputMM}/`;
    document.getElementById("years").textContent = inputYear;
    document.getElementById("show-cvc").textContent = inputCvc;
  }
});

// for focus

document.getElementById("cvc").addEventListener("focus", function () {
//   document.getElementById("cardCVC-error").textContent = "";
});
document.getElementById("date-yy").addEventListener("focus", function () {
  document.getElementById("cardYY-error").textContent = "";
});
document.getElementById("date-mm").addEventListener("focus", function () {
  document.getElementById("cardMM-error").textContent = "";
});
document.getElementById("card-number").addEventListener("focus", function () {
  document.getElementById("cardNumber-error").textContent = "";
});
document
  .getElementById("cardholder-name")
  .addEventListener("focus", function () {
    document.getElementById("cardName-error").textContent = "";
  });

    
 



