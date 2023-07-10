var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openMenu() {
  sidemenu.style.right = "0";
}
function closeMenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzxUZ9-2qviBi-jCt7bDCAkStOaEQKbfM3bnjZQcBASozizvZdRRMt6LWtXavFwL1ce/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent Successfully";

      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "Something went wrong!";

      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
    });
});
