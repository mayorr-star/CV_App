const validateGeneralInfo = () => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const phoneNumber = document.getElementById("phoneNumber");
  const email = document.getElementById("email");
  const statement = document.getElementById("statement");
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const statementValue = statement.value.trim();
  const emailValue = email.value.trim();

  let isValid = true;

  if (firstNameValue === "") {
    isValid = false;
    setError(firstName, "Please enter your first name");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    isValid = false;
    setError(lastName, "Please enter your last name");
  } else {
    setSuccess(lastName);
  }

  if (phoneNumberValue === "") {
    isValid = false;
    setError(phoneNumber, "Phone number is required");
  } else {
    setSuccess(phoneNumber);
  }

  if (statementValue === "") {
    isValid = false;
    setError(statement, "Please provide a brief summary about yourself");
  } else {
    setSuccess(statement);
  }

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[@\s@]+\.[^\s@]+$/;
    return regex.text(email);
  };

  if (emailValue === "") {
    isValid = false;
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    isValid = false;
    setError(email, "Email is invalid");
  } else {
    setSuccess(email);
  }

  return isValid;
};


const setError = (element, message) => {
  const inputControl = element.parentNode;
  const errorDisplay = inputControl.querySelector(".error");
  console.log(inputControl)
  errorDisplay.textContent = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentNode;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.textContent = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};
export { validateGeneralInfo };
