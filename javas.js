function validateLogin() {
    const username = document.getElementById("username").value;
    const gmail = document.getElementById("gmail").value;
    const errorMessage = document.getElementById("error-message");

    // Simple validation: checking if the username is "user" and password is "gmail"
    if (gmail.endsWith("@gmail.com")) {
        alert("Login successful!")
		window.location.href='interface.html';
		
   //     errorMessage.textContent = "";  // Clear error message
    } else {
        errorMessage.textContent = "Invalid username or gmail";
    }
}