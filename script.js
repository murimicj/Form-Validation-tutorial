// Wait for form submission
document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();  // Stop the page from reloading on submit
    validateForm();      // Call validation function
  });
  
  // Main validation function
  function validateForm() {
    // Get values entered by user and clean them
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const termsChecked = document.getElementById("terms").checked;
  
    // Assume form is valid unless a check fails
    let isValid = true;
  
    // Clear old error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("termsError").innerText = "";
  
    // Check name is not empty
    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required.";
      isValid = false;
    }
  
    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").innerText = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Invalid email format.";
      isValid = false;
    }
  
    // Password should be at least 6 characters
    if (password.length < 6) {
      document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
      isValid = false;
    }
  
    // Confirm password must match password
    if (confirmPassword !== password) {
      document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
      isValid = false;
    }
  
    // Terms checkbox must be ticked
    if (!termsChecked) {
      document.getElementById("termsError").innerText = "You must agree to the terms.";
      isValid = false;
    }
  
    // If everything is valid, show success and reset form
    if (isValid) {
      alert("Form submitted successfully!");
      document.getElementById("myForm").reset(); // Clear form inputs
    }
  }
  