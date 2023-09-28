const password = document.querySelector(".input-div.password input");
const showBtn = document.querySelector(".login-form-container .show-password button");

showBtn.addEventListener('click', (e) => {
  e.preventDefault()
  switch (password.type) {
    case "text":
      password.type = "password"
      showBtn.textContent = "Show"
      break;
      
    case "password":
      password.type = "text"
      showBtn.textContent = "Hide"
      break;
  
    default:
      break;
  }

  
})




// Function to validate email format
function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form fields
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  // Get error elements
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  // Reset error messages
  usernameError.textContent = "";
  passwordError.textContent = "";

  // Validate username/email
  if (!usernameInput.value) {
    usernameError.textContent = "Username/Email is required";
  } else if (!isValidEmail(usernameInput.value)) {
    usernameError.textContent = "Invalid email format";
  }

  // Validate password
  if (!passwordInput.value) {
    passwordError.textContent = "Password is required";
  }

  // If no errors, submit the form
  if (!usernameError.textContent && !passwordError.textContent) {
    // Perform form submission or other actions here
    console.log("Form submitted successfully");
    // You can add code to send the data to the server or perform other actions here
  }
});

