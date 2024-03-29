// STEPS:
// Step 1: Sets the default values of 0
// Step 2: If data exist in the local storage it will update the webpage, converts to a JSON

const cookieBtn = document.getElementById("cookieBtn");
const mixerBtn = document.getElementById("mixerBtn");
const ovenBtn = document.getElementById("ovenBtn");
const whiskBtn = document.getElementById("whiskBtn");
const pressBtn = document.getElementById("pressBtn");
const factoryBtn = document.getElementById("factoryBtn");

const cookiesSpan = document.getElementById("cookiesSpan");
const cookiesPerSecondSpan = document.getElementById("cookiesPerSecondSpan");

cookieBtn.addEventListener("click", buyCookie);
mixerBtn.addEventListener("click", buyMixer);
// ovenBtn.addEventListener("click", buyOven);
// whiskBtn.addEventListener("click", buyWhisk);
// pressBtn.addEventListener("click", byPress);
// factoryBtn.addEventListener("click", buyFactory);

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

function updatePage() {
  cookiesSpan.textContent = pageData.cookieCount;
  cookiesPerSecondSpan.textContent = pageData.cookiesPerSecond;
}

function updateStorage() {
  localStorage.setItem("pageData", JSON.stringify(pageData));
}

function buyMixer() {
  pageData.cookiesPerSecond++;
  pageData.cookieCount -= 100; //cost of mixer is 100
  updatePage();
  updateStorage();
}
