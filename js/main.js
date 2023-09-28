const password = document.querySelector(".input-div.password input");
const showBtn = document.querySelector(".login-form-container .show-password button");

showBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(password.type);
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