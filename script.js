const submit = document.getElementById("submit");
const input = document.getElementsByTagName("input");
submit.addEventListener("click", (e) =>
{
  e.preventDefault();
  alert(`First Name: ${input[0].value} Last Name: ${input[1].value} Phone Number: ${input[2].value} Email ID: ${input[3].value}`);
})
