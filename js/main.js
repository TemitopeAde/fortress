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
  const name = document.getElementById("name");
  const phone = document.getElementById("phone")

  // Get error elements
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");

  // Reset error messages
  usernameError.textContent = "";
  passwordError.textContent = "";
  name.textContent = "";
  phone.textContent = "";

  if (!name.value) {
    nameError.textContent = "Name is required"
  } 

  if (!phone.value) {
    phoneError.textContent = "Phone number is required"
  } else if (phone.value.length < 11) {
    phoneError.textContent = "Enter a valid phone number"
  }

  // Validate username/email
  if (!usernameInput.value) {
    usernameError.textContent = "Email is required";
  } else if (!isValidEmail(usernameInput.value)) {
    usernameError.textContent = "Invalid email format";
  }

  // Validate password
  if (!passwordInput.value) {
    passwordError.textContent = "Password is required";
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password too short"
  }

  // If no errors, submit the form
  if (!usernameError.textContent && !passwordError.textContent && phoneError.textContent) {
    // Perform form submission or other actions here
    console.log("Form submitted successfully");
    // You can add code to send the data to the server or perform other actions here
  }
});




