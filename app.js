//Sets each of the elements being used
const cookieBtn = document.getElementById("cookieBtn");
const mixerBtn = document.getElementById("mixerBtn");
const mixerCost = document.getElementById("mixerCost");
const mixerStock = document.getElementById("mixerStock");
const ovenBtn = document.getElementById("ovenBtn");
const toolsBtn = document.getElementById("toolsBtn");
const pressBtn = document.getElementById("pressBtn");
const factoryBtn = document.getElementById("factoryBtn");

const resetBtn = document.getElementById("resetBtn"); //resets coookes

//Array for the upgrade items
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
resetBtn.addEventListener("click", resetData);

//upgrade uses an array to set the costs and cookies per second
mixerBtn.addEventListener("click", function () {
  buyUpgrade(upgradeItems[0].cost, upgradeItems[0].cps);
});
ovenBtn.addEventListener("click", function () {
  buyUpgrade(upgradeItems[1].cost, upgradeItems[1].cps);
});
toolsBtn.addEventListener("click", function () {
  buyUpgrade(upgradeItems[2].cost, upgradeItems[2].cps);
});
pressBtn.addEventListener("click", function () {
  buyUpgrade(upgradeItems[3].cost, upgradeItems[3].cps);
});
factoryBtn.addEventListener("click", function () {
  buyUpgrade(upgradeItems[4].cost, upgradeItems[4].cps);
});

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
  //   console.log(pageData); //test to check buyCookie is being updated
  updatePage();
  updateStorage();
}

function updatePage() {
  enableButtons(); //added so the buttons are disabled before the upgrade can be made if there aren't enough cookies
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

//enables and disables the upgrade purchases if there aren't enough cookies
function enableButtons() {
  if (pageData.cookieCount < 10) {
    mixerBtn.disabled = true;
  }
  if (pageData.cookieCount >= 10) {
    mixerBtn.disabled = false;
  }
  if (pageData.cookieCount < 100) {
    ovenBtn.disabled = true;
  }
  if (pageData.cookieCount >= 100) {
    ovenBtn.disabled = false;
  }
  if (pageData.cookieCount < 1000) {
    toolsBtn.disabled = true;
  }
  if (pageData.cookieCount >= 1000) {
    toolsBtn.disabled = false;
  }
  if (pageData.cookieCount < 10000) {
    pressBtn.disabled = true;
  }
  if (pageData.cookieCount >= 10000) {
    pressBtn.disabled = false;
  }
  if (pageData.cookieCount < 100000) {
    factoryBtn.disabled = true;
  }
  if (pageData.cookieCount >= 100000) {
    factoryBtn.disabled = false;
  }
}

setInterval(function () {
  pageData.cookieCount += pageData.cookiesPerSecond;
  updatePage();
  updateStorage();
  enableButtons();
  //   console.log(setInterval);
}, 1000);

function resetData() {
  pageData.cookieCount = 0;
  storageData.cookieCount = 0;
  pageData.cookiesPerSecond = 0;
  storageData.cookiesPerSecond = 0;
  enableButtons();
}
