const firstNameInput = document.getElementById("firstName");
const firstName = document.querySelector(".firstName");
const lastNameInput = document.getElementById("lastName");
const lastName = document.querySelector(".lastName");
const emailInput = document.getElementById("email");
const email = document.querySelector(".email");
const passwordInput = document.getElementById("password");
const password = document.querySelector(".password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstNameInput.value === "") {
    firstName.classList.add("invalid");
  } else {
    firstName.classList.remove("invalid");
  }

  if (lastNameInput.value === "") {
    lastName.classList.add("invalid");
  } else {
    lastName.classList.remove("invalid");
  }

  if (emailInput.value === "" || !emailInput.validity.valid) {
    email.classList.add("invalid");
  } else {
    email.classList.remove("invalid");
  }

  if (passwordInput.value === "") {
    password.classList.add("invalid");
  } else {
    password.classList.remove("invalid");
  }
});
