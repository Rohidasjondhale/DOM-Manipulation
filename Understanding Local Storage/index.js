
function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    console.log("Data saved in local storage:", { username, email, phone });
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = handleFormSubmit;
}