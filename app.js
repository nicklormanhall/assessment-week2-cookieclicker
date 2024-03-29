// STEPS:
// Step 1: Sets the default values of 0
// Step 2: If data exist in the local storage it will update the webpage, converts to a JSON

const cookieBtn = document.getElementById("cookieBtn");
const mixerBtn = document.getElementById("mixerBtn");
const pressBtn = document.getElementById("pressBtn");
const factoryBtn = document.getElementById("factoryBtn");

const cookiesSpan = document.getElementById("cookiesSpan");
const cookiesPerSecondSpan = document.getElementById("cookiesPerSecondSpan");

// Step 1: Sets the default values of 0
const pageData = {
  cookieCount: 0,
  cookiesPerSecond: 0,
};

const storageData = JSON.parse(localStorage.getItem("pageData"));

if (storageData !== null) {
  pageData.cookieCount = storageData.cookieCount;
  pageData.cookiesPerSecond = storageData.cookiesPerSecond;
  updatePage();
}

function buyCookie() {
  pageData.cookieCount++;
  console.log(pageData); //test to check buyCookie is being updated
  updatePage();
  updateStorage();
}

cookieBtn.addEventListener("click", buyCookie);

function updatePage() {
  cookiesSpan.textContent = pageData.cookieCount;
  cookiesPerSecondSpan.textContent = pageData.cookiesPerSecond;
}

function updateStorage() {
  localStorage.setItem("pageData", JSON.stringify(pageData));
}
