const city = document.getElementById("city");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const male = document.getElementById("male");
const female = document.getElementById("female");
const dob = document.getElementById("dob");
const address = document.getElementById("address");

const cityName = document.querySelector(".city");
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const gender = document.querySelector(".gender");
const emailValue = document.querySelector(".email");
const addressValue = document.querySelector(".address");
const dobValue = document.querySelector(".dob");

// validaiton ids
const errors = document.querySelectorAll(".error");
const cityValueError = document.getElementById("cityVal");
const firstNameValueError = document.getElementById("firstNameVal");
const lastNameValueError = document.getElementById("lastNameVal");
const genderValueError = document.getElementById("genderVal");
const emailValueError = document.getElementById("emailVal");
const dobValueError = document.getElementById("dobVal");
const addressValueError = document.getElementById("addressVal");

const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!city.value) {
    cityValueError.innerHTML = "Please select city!";
    return;
  } else if (!firstName.value) {
    firstNameValueError.innerHTML = "Please enter your firstname";
    return;
  } else if (!lastName.value) {
    lastNameValueError.innerHTML = "Please enter your lastname";
    return;
  } else if (!)
  errors.forEach((element) => {
    element.innerHTML = "";
  });

  cityName.innerHTML = city.value;
  firstname.innerHTML = firstName.value;
  lastname.innerHTML = lastName.value;
  if (male.checked) {
    gender.innerHTML = male.value;
  } else if (female.checked) {
    gender.innerHTML = female.value;
  }
  emailValue.innerHTML = email.value;
  addressValue.innerHTML = address.value;
  console.log(dobValue.innerHTML);
  dobValue.innerHTML = dob.value;
});
