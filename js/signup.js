const eyeButton = document.querySelector("#eyeButton");
const passwordInput = document.querySelector("#pass");

eyeButton.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";

    eyeButton.classList.toggle("fa-eye", !isPassword);
    eyeButton.classList.toggle("fa-eye-slash", isPassword);
});
