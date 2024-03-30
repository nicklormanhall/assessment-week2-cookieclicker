// STEPS:
// Step 1: Sets the default values of 0
// Step 2: If data exist in the local storage it will update the webpage, converts to a JSON

const cookieBtn = document.getElementById("cookieBtn");
const mixerBtn = document.getElementById("mixerBtn");
const ovenBtn = document.getElementById("ovenBtn");
const whiskBtn = document.getElementById("whiskBtn");
const pressBtn = document.getElementById("pressBtn");
const factoryBtn = document.getElementById("factoryBtn");

const upgradeItems = [
  { cost: 10, cps: 1, item: "new mixer" },
  { cost: 100, cps: 10, item: "bigger oven" },
  { cost: 1000, cps: 100, item: "new baking tools" },
  { cost: 10000, cps: 1000, item: "cookie press" },
  { cost: 100000, cps: 10000, item: "cookie factory" },
];

// console.log(upgradeItems[0]);

const cookiesSpan = document.getElementById("cookiesSpan");
const cookiesPerSecondSpan = document.getElementById("cookiesPerSecondSpan");

cookieBtn.addEventListener("click", buyCookie);

//upgrade
mixerBtn.addEventListener("click", function () {
  buyUpgrade(upgradeItems[0].cost, upgradeItems[0].cps);
});
ovenBtn.addEventListener("click", function () {
  buyUpgrade(upgradeItems[1].cost, upgradeItems[1].cps);
});
whiskBtn.addEventListener("click", function () {
  buyUpgrade(upgradeItems[2].cost, upgradeItems[2].cps);
});
pressBtn.addEventListener("click", function () {
  buyUpgrade(upgradeItems[3].cost, upgradeItems[3].cps);
});
factoryBtn.addEventListener("click", function () {
  buyUpgrade(upgradeItems[4].cost, upgradeItems[4].cps);
});

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

function buyUpgrade(cost, cps) {
  pageData.cookiesPerSecond += cps;
  pageData.cookieCount -= cost;
  updatePage();
  updateStorage();
}

function enableButtons() {}

setInterval(function () {
  pageData.cookieCount += pageData.cookiesPerSecond;
  updatePage();
  updateStorage();
  enableButtons();
  //   console.log(setInterval);
}, 1000);
