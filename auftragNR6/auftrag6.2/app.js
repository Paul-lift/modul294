const form = document.getElementById("form");
const btn = form.register;
const pw2 = form.passwordValidate;
const pw1 = form.passwordCreate;

    

pw2.addEventListener("input", () => {
  if (pw2.value !== pw1.value) {
    pw2.setCustomValidity("Passwörter stimmen nicht überein");
    btn.disabled = true;
  } else {
    pw2.setCustomValidity("");
    btn.disabled = false;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
