# PersonalCVWebpage

 // validera e-post
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    showError("email-error");
    isValid = false;
  } else {
    hideError("email-error");
  }

  // validera namn
  if (subject.value.trim() === "") {
    showError("subject-error");
    isValid = false;
  } else {
    hideError("subject-error");
  }

  // validera intresse
  if (message.value === "") {
    showError("message-error");
    isValid = false;
  } else {
    hideError("message-error");
  }
