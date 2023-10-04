const password = document?.querySelector(".input-div.password input");
const showBtn = document?.querySelector(".login-form-container .show-password button");

showBtn?.addEventListener('click', (e) => {
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

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
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




const btnProposal = document?.querySelectorAll(".action-btn");
const actionDiv = document?.querySelectorAll(".action-div-modal")

let lastClickedIndex = null; // Keep track of the last clicked button

btnProposal?.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (lastClickedIndex !== null) {
      // Remove the "hidden" class from the old button's actionDiv
      actionDiv[lastClickedIndex].classList.add("hidden");
    }

    // Toggle the "hidden" class for the new button's actionDiv
    actionDiv[index].classList.toggle("hidden");

    // Update the lastClickedIndex to the current index
    lastClickedIndex = index;
  })
})






const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector("#create-proposal");
const closeModalBtn = document.querySelector(".btn-close");


// close modal function
const closeModal = function () {
  modal?.classList.add("hidden");
  overlay?.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn?.addEventListener("click", closeModal);
overlay?.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document?.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal?.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal?.classList.remove("hidden");
  overlay?.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);


document.getElementById("file-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myButton").click();
});

// Listen for changes in the file input
document.getElementById("myButton")?.addEventListener("change", (e) => {
  const fileInput = e.target;
  const fileLabel = document.getElementById("file-label");

  // Check if a file is selected
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    fileLabel.textContent = fileName;
  } else {
    fileLabel.textContent = "Attach Proposal File here";
  }
});










document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("proposal-form");

  form?.addEventListener("submit", function (event) {
    const fileInput = document.getElementById("myButton");
    const fileError = document.getElementById("file-label");
    const tabOne = document.querySelector(".tab-one")
    const tabTwo = document.querySelector(".tab-two")



    if (fileInput.files.length === 0) {
      fileError.innerHTML = "Please select a file before submitting.";
      fileError.classList.toggle("error-file")
      event.preventDefault(); // Prevent form submission
    } else {
      fileError.textContent = ""; // Clear any previous error message
    }


    let isValid = true;

    // Reset error messages
    const errorElements = document.querySelectorAll(".error-text");
    errorElements.forEach(errorElement => {
      errorElement.textContent = "";
    });

    // Validation for Proposal Type 1
    const type1Select = document.getElementById("select-proposal-type-1");
    if (type1Select.value === "") {
      isValid = false;
      document.getElementById("type-1-error").textContent = "Select Proposal Type";
    }

    // Validation for Proposal Type 2
    const type2Select = document.getElementById("select-proposal-type-2");
    if (type2Select.value === "") {
      isValid = false;
      document.getElementById("type-2-error").textContent = "Select user";
    }

    // Validation for Proposal Title
    const titleInput = document.getElementById("proposal-title");
    const titleValue = titleInput.value.trim();
    if (titleValue === "") {
      isValid = false;
      document.getElementById("title-error").textContent = "Proposal Title is required.";
    }

    // Add more validations for other fields here...

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }
    tabOne.classList.add("hidden")
    tabTwo.classList.remove("hidden")
  });
});