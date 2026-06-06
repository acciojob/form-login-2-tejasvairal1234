const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert(
        `First Name: ${document.getElementById("firstName").value} ` +
        `Last Name: ${document.getElementById("lastName").value} ` +
        `Phone Number: ${document.getElementById("phone").value} ` +
        `Email ID: ${document.getElementById("email").value}`
    );
});