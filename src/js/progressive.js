// src/js/progressive.js
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function submitForm(event) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const errorEl = document.getElementById("form-error");

  let error = "";

  if (nameInput.value.trim() === "") {
    error += "Name is required.\n";
  }

  if (emailInput.value.trim() === "") {
    error += "Email is required.\n";
  } else if (!validateEmail(emailInput.value.trim())) {
    error += "Please enter a valid email address.\n";
  }

  if (error) {
    event.preventDefault();
    errorEl.textContent = error;
  } else {
    errorEl.textContent = "";
    console.log("Form is valid and would submit.");
  }
}

document
  .getElementById("contact-form")
  .addEventListener("submit", submitForm);
