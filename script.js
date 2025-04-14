const allButtons = document.querySelectorAll(".main-section-nav-link");
const plantSwapButton = document.getElementById("plant-swap");
const airBnBCloneButton = document.getElementById("air-bnb");
const cvPageButton = document.getElementById("cv-page");
const educationButton = document.getElementById("education");
const workLifeButton = document.getElementById("work-life");
const skillsButton = document.getElementById("skills");
const allArticles = document.querySelectorAll(".main-section-article");
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const formResponse = document.getElementById("form-response");

//setting on click functions for all secondary nav buttons with the function below
mainNavSelection(plantSwapButton);
mainNavSelection(airBnBCloneButton);
mainNavSelection(cvPageButton);
mainNavSelection(educationButton);
mainNavSelection(workLifeButton);
mainNavSelection(skillsButton);

//function for main section nav button menu (calls the two help-functions below)
function mainNavSelection(obj) {
  if (obj) {
    obj.onclick = function () {
      if (!obj.classList.contains("clicked")) {
        buttonClickEffect(obj);
        mainContentArticleChange(obj);
      }
    };
  }
}

//help-function 1: for the visual effekt on the nav button when clicked (fixate hover over effect)
function buttonClickEffect(obj) {
  //clear effect on other buttons
  allButtons.forEach((button) => {
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      hideMainNavText(button);
    }
  });
  //add ".clicked" class to selected button
  obj.classList.add("clicked");
}

//help-function 2: to change the displayed article according to button
function mainContentArticleChange(obj) {
  allArticles.forEach((article) => {
    article.style.display = "none";
  });
  document.getElementById(obj.id + "-article").style.display = "flex";
  document.body.scrollTo(0, 0);
}

/*FUNCTIONS CALLED BY MOUSEOVER AND MOUSEOUT ---------------------------------------------------------
for main section nav link elements*/

//hover over -> show button text
function showMainNavText(obj) {
  if (!obj.classList.contains("clicked")) {
    document.getElementById(obj.id + "-text").style.display = "block";
  }
}

//hover end -> hide button text
function hideMainNavText(obj) {
  if (!obj.classList.contains("clicked")) {
    document.getElementById(obj.id + "-text").style.display = "none";
  }
}

//contact form validation, show error messages (non-valid input) or response text (valid input)
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      formResponse.style.display = "block";
      clearForm();
    } else {
      formResponse.style.display = "none";
    }
  });
}

//clear fields if the form was filled out correctly
function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
}

//validate all fields
function validateForm() {
  validateField(nameInput);
  validateField(emailInput);
  validateField(subjectInput);
  validateField(messageInput);

  return (
    validateField(nameInput) &&
    validateField(emailInput) &&
    validateField(subjectInput) &&
    validateField(messageInput)
  );
}

//validate a single field and show/hide error message accordingly
function validateField(obj) {
  let isValidField = true;
  if (obj.value.trim() === "") {
    document.getElementById(obj.id + "-error").style.display = "inline";
    console.log(isValidField);
    isValidField = false;
  } else {
    document.getElementById(obj.id + "-error").style.display = "none";
  }
  return isValidField;
}
