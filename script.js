const msgError = document.querySelector(".error-msg");
const emailLabel = document.querySelector(".email-label");
const inputEmail = document.querySelector("#email-input");
const btnSubmit = document.querySelector("#submit-btn");
const successDialog = document.querySelector("#success-dialog");
const btnClose = document.getElementById("close-button");
const msgConfirm = document.querySelector(".confirmation");

//FUNCTIONS

function isVaild(email) {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return regexEmail.test(email);
}

function handleSubmit() {
  const email = inputEmail.value;

  if (isVaild(email)) {
    successDialog.showModal();

    renderConfirmation(email);
    inputEmail.value = "";
    msgError.classList.add("hidden");
    inputEmail.classList.remove("error-styles");
  } else {
    msgError.classList.remove("hidden");
    inputEmail.classList.add("error-styles");
  }
}

function handleCloseModal() {
  successDialog.close();
}

function renderConfirmation(email) {
  const massage = `A confirmation email has been sent to ${email}. Please
  open it and click the button inside to confirm your subscription.`;

  msgConfirm.textContent = massage;
}

//EVENTS

btnSubmit.addEventListener("click", handleSubmit);
btnClose.addEventListener("click", handleCloseModal);
