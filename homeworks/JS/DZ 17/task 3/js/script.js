let registrationFields = document.querySelector(".registration-fields");
document.getElementById("toggleButton").addEventListener("click", () => {
  registrationFields.style.display = "block";
});

document.getElementById("loginButton").addEventListener("click", (event) => {
  event.preventDefault();
  registrationFields.style.display = "none";
});
