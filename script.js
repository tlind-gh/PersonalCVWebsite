const allButtons = document.querySelectorAll(".main-section-nav-link");
const plantSwapButton = document.getElementById("plant-swap");
const airBnBCloneButton = document.getElementById("air-bnb");
const cvPageButton = document.getElementById("cv-page");
const educationButton = document.getElementById("education");
const workLifeButton = document.getElementById("work-life");
const skillsButton = document.getElementById("skills");
const allArticles = document.querySelectorAll(".main-section-article");

mainNavSelection(plantSwapButton);
mainNavSelection(airBnBCloneButton);
mainNavSelection(cvPageButton);
mainNavSelection(educationButton);
mainNavSelection(workLifeButton);
mainNavSelection(skillsButton);

//function for main section nav button menu
function mainNavSelection(obj) {
  if (obj) {
    obj.onclick = function () {
      buttonClickEffect(obj);
      mainContentArticleChange(obj);
    };
  }
}

//help-function for the visual effekt on the nav button when clicked (fixate hover over effect)
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

function mainContentArticleChange(obj) {
  allArticles.forEach((article) => {
    article.style.display = "none";
  });
  document.getElementById(obj.id + "-article").style.display = "flex";
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

/*fix styling when clicking on button*/

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

/**/

/*contact form validation*/
