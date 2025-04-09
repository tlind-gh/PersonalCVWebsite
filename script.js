function showMainNavText(obj) {
  document.getElementById(obj.id + "-text").style.display = "block";
}

function hideMainNavText(obj) {
  document.getElementById(obj.id + "-text").style.display = "none";
}

const el = document.getElementById("education");
el.onclick = function () {
  alert("Hi");
};
