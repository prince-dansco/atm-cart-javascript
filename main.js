const displayToggleDetail = document.querySelector(".toggle-container");
let isFormValidation = true;

function handleClick(event) {
  event.preventDefault();
  const inputCardName = document.getElementById("cardholder-name");
  const inputCardNumber = document.getElementById("card-number");
  const inputMM = document.getElementById("date-mm");
  const inputYY = document.getElementById("date-yy");
  const inputCvc = document.getElementById("cvc");

  // Error spans
  const cardNameError = document.getElementById("cardName-error");
  const cardNumberError = document.getElementById("cardNumber-error");
  const cardMMError = document.getElementById("cardMM-error");
  const cardYYError = document.getElementById("cardYY-error");
  const cardCVCError = document.getElementById("cardCVC-error");

  // Clear previous errors
  cardNameError.textContent = "";
  cardNumberError.textContent = "";
  cardMMError.textContent = "";
  cardYYError.textContent = "";
  cardCVCError.textContent = "";

  // Input event listeners
  // inputCardName.addEventListener("input", function () {
  //   const cardName = inputCardName.value;
  //   document.getElementById("cardholder-names").textContent = cardName;
  // });

  inputCardName.addEventListener("input", function () {
    const cardName = inputCardName.value;
    document.getElementById("cardholder-names").textContent = cardName;

    if (!cardName) {
      cardNameError.textContent = "Cardholder name is required";
      inputCardName.style.border = "1px solid red";
    } else {
      cardNameError.textContent = "";
      inputCardName.style.border = "1px solid hsl(0, 0%, 80%)";
    }
  });

  // inputCardNumber.addEventListener("input", function () {
  //   const cardNumber = inputCardNumber.value.trim();
  //   document.getElementById("card-numbers").textContent = cardNumber;
  // });

  inputCardNumber.addEventListener("input", function () {
    const cardNumber = inputCardNumber.value.trim();
    document.getElementById("card-numbers").textContent = cardNumber;

    const cardNumberPattern = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
    if (!cardNumber) {
      cardNumberError.textContent = "Field cannot be empty";
      inputCardNumber.style.border = "1px solid red";
    } else if (!cardNumberPattern.test(cardNumber)) {
      cardNumberError.textContent = "Enter a valid format 1234 5678 9123 0000";
      inputCardNumber.style.border = "1px solid red";
    } else {
      cardNumberError.textContent = "";
      inputCardNumber.style.border = "1px solid hsl(0, 0%, 80%)";
    }
  });

  // inputMM.addEventListener("input", function () {
  //   const cardMM = inputMM.value;
  //   document.getElementById("date").textContent = `${cardMM}/`;
  // });

  inputMM.addEventListener("input", function () {
    const cardMM = inputMM.value;
    document.getElementById("date").textContent = `${cardMM}/`;

    if (!cardMM || isNaN(cardMM) || cardMM < 1 || cardMM > 12) {
      cardMMError.textContent = "Enter a valid month (01-12)";
      inputMM.style.border = "1px solid red";
    } else {
      cardMMError.textContent = "";
      inputMM.style.border = "1px solid hsl(0, 0%, 80%)";
    }
  });

  inputYY.addEventListener("input", function () {
    const cardYY = inputYY.value;
    document.getElementById("years").textContent = cardYY;
  });

  inputCvc.addEventListener("input", function () {
    const cardCvc = inputCvc.value;
    document.getElementById("show-cvc").textContent = cardCvc;
  });

  // Form validation logic
  let hasError = false;
  const cardNamePattern = /^[A-Z][a-zA-Z]{1,15}$/;
  if (!inputCardName.value) {
    cardNameError.textContent = "Cardholder name is required";
    document.getElementById("cardholder-name").style.border = "1px solid red";
    hasError = true;
  }else if(!cardNamePattern.test(inputCardName.value)){
    cardNameError.textContent = "Enter a valid name";
    document.getElementById("cardholder-name").style.border ="1px solid red"
  }
  
  
  else {
    document.getElementById("cardholder-name").style.border =
      "1px solid hsl(0, 0%, 80%)";
  }
// form validation for card number
  const cardNumberPattern = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
  if (!inputCardNumber.value) {
    cardNumberError.textContent = "field cannot be empty";
    document.getElementById("card-number").style.border = "1px solid red";
    hasError = true;
  } else if (!cardNumberPattern.test(inputCardNumber.value)) {
    cardNumberError.textContent = "Enter a valid format 1234 5678 9123 0000";
    hasError = true;
  } else {
    document.getElementById("card-number").style.border ="1px solid hsl(0, 0%, 80%)";
  }
// form validation for mm and yy
  if (
    !inputMM.value ||
    isNaN(inputMM.value) ||
    inputMM.value < 1 ||
    inputMM.value > 12
  ) {
    cardMMError.textContent = "Enter a valid month (01-12)";
    document.getElementById("date-mm").style.border = "1px solid red";
    hasError = true;
  } else {
    document.getElementById("date-mm").style.border =
      "1px solid hsl(0, 0%, 80%)";
  }

  if (!inputYY.value || isNaN(inputYY.value) || inputYY.value.length !== 2) {
    cardYYError.textContent = "Enter a valid year (2 digits)";
    document.getElementById("date-yy").style.border = "1px solid red";
    hasError = true;
  } else {
    document.getElementById("date-yy").style.border =
      "1px solid hsl(0, 0%, 80%)";
  }

  if (!inputCvc.value || isNaN(inputCvc.value) || inputCvc.value.length !== 3) {
    cardCVCError.textContent = "Enter a valid 3-digit CVC";
    document.getElementById("cvc").style.border = "1px solid red";
    hasError = true;
  } else {
    document.getElementById('cvc').style.border = "1px solid hsl(0, 0%, 80%)"
  }

  // Handle form submission if no errors
  if (!hasError && event.target.id === "Confirm") {
    displayToggleDetail.innerHTML = completedDetails();
    isFormVisible = false;
  } else if (event.target.id === "continue") {
    displayToggleDetail.innerHTML = formDetails();
    isFormValidation = true;
  }
}

// Initial form render
displayToggleDetail.innerHTML = formDetails();

// Attach click event to the toggle container
displayToggleDetail.addEventListener("click", handleClick);

function formDetails() {
  return ` <div class="form-container">
          <form>
            <div class="card-details">
              <label for="cardholder-name">Cardholder Name</label>
              <input
                type="text"
                id="cardholder-name"
                placeholder="e.g. Jane Appleseed"
                autofocus
              />
              <span id="cardName-error" class="error"></span>
            </div>
            <div class="card-details">
              <label for="card-number">Card Number</label>
              <input
                type="text"
                id="card-number"
                placeholder="e.g. 1234 5678 9123 0000"
                
              />
              <span id="cardNumber-error" class="error"></span>
            </div>
            <div class="expiry-cvc">
              <div class="expiry">
                <label for="date">EXP. DATE (MM/YY)</label>
                <div class="date-inputs">
                  <div class="">
                    <input type="text" id="date-mm" placeholder="MM" />
                    <span id="cardMM-error" class="error"></span>
                  </div>
                  <div class="">
                    <input type="text" id="date-yy" placeholder="YY" />
                    <span id="cardYY-error" class="error"></span>
                  </div>
                </div>
              </div>
              <div class="cvc">
                <label for="cvc">CVC</label>
                <input type="text" id="cvc" placeholder="e.g. 123" />
                <span id="cardCVC-error" class="error"></span>
              </div>
            </div>
            <button type="submit" id="Confirm">Confirm</button>
          </form>
        </div>`;
}

function completedDetails() {
  return `   <div class="">
          <img src="./images/icon-complete.svg" alt="completed">
        <div class="">
          <h1>Thank you</h1>
          <p>We've added your card details</p>
          <button id="continue">Continue</button>
        </div>
        </div> `;
}
