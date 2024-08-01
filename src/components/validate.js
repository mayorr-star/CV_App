const validateGeneralInfo = (e) => {
    const parentFieldset = e.target.closest("fieldset");
  const firstName = parentFieldset.querySelector("#firstName");
  const lastName = parentFieldset.querySelector("#lastName");
  const phoneNumber = parentFieldset.querySelector("#phoneNumber");
  const email = parentFieldset.querySelector("#email");
  const statement = parentFieldset.querySelector("#statement");
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

const validateEducationInfo = (e) => {
    const parentFieldset = e.target.closest("fieldset");
    const schoolName = parentFieldset.querySelector("#schoolName");
    const programOfStudy = parentFieldset.querySelector("#program");
    const daetOfStudy = parentFieldset.querySelector("#duration");
    const schoolNameValue = schoolName.value.trim();
    const programOfStudyValue = programOfStudy.value.trim();
    const daetOfStudyValue = daetOfStudy.value.trim();
    let isValid = true;

    if (schoolNameValue === "") {
        isValid = false;
        setError(schoolName, "Provide name of school");
    } else {
        setSuccess(schoolName)
    }

    if (programOfStudyValue === "") {
        isValid = false;
        setError(programOfStudy, "Provide title of study");
    } else {
        setSuccess(programOfStudy)
    }

    if (daetOfStudyValue === "") {
        isValid = false;
        setError(daetOfStudy, "Provide duration of study")
    } else {
        setSuccess(daetOfStudy)
    }

    return isValid;
}

const validateWorkHistoryInfo = (e) => {
    const parentFieldset = e.target.closest("fieldset");
    const companyName = parentFieldset.querySelector("#companyName");
    const position = parentFieldset.querySelector("#position");
    const duration = parentFieldset.querySelector("#duration");
    const roles = parentFieldset.querySelector("#roles");
    const companyNameValue = companyName.value.trim();
    const positionValue = position.value.trim();
    const durationValue = duration.value.trim();
    const rolesValue = roles.value.trim();
    let isValid = true;

    if (companyNameValue === "") {
        isValid = false;
        setError(companyName, "Company name is required"); 
    } else {
        setSuccess(companyName)
    }

    if (positionValue === "") {
        isValid = false;
        setError(position, "Position title is required"); 
    } else {
        setSuccess(position)
    }

    if (rolesValue === "") {
        isValid = false;
        setError(roles, "Provide your roles"); 
    } else {
        setSuccess(roles)
    }

    if (durationValue === "") {
        isValid = false;
        setError(duration, "Provide duration of stay"); 
    } else {
        setSuccess(duration)
    }

    return isValid
}

const setError = (element, message) => {
  const inputControl = element.parentNode;
  const errorDisplay = inputControl.querySelector(".error");
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
export { validateGeneralInfo, validateEducationInfo, validateWorkHistoryInfo };
