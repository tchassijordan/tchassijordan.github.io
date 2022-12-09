import disableBtn from "./disableBtn.js";

const portfolioItems = document.querySelectorAll(".portfolio-item");
const displayAllPortfolio = document.getElementById("d-all");
const displayWebPorfolio = document.getElementById("d-web");
const displayGamesPorfolio = document.getElementById("d-games");
const portfolioNavLinks = [
  ...document.querySelectorAll(".portfolio-navigation li"),
];
const web = document.querySelectorAll(".web");
const portfolioList = Array.from(portfolioItems); //convert portfolio nodelist into an array
let isAll = false;
let isWebsite = false;
let isGames = false;
const navLinks = document.querySelector(".nav-bar-links");
const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);
const activePortfolioNav = rootStyles.getPropertyValue("--white");
const openSlider = document.getElementById("open-slider");
const closeSlider = document.getElementById("close-slider");
let navIsActive = false;
const h = document.querySelector("header");
const f = document.querySelector("footer");
let aboutIsActive = false;
const abtController = document.getElementById("abt-txt");
const abtNav = document.querySelector(".nav-bar-about-nav");
const topSettingIcon = document.getElementById("setting-top");
const topSettingNav = document.querySelector(".setting-top-nav");
let settingIsActive = false;
const bottomSettingBtn = document.getElementById("setting-bottom-btn");
const bottomSettingBtnIcon = document.querySelector(".setting-bottom-i");
const bottomSettingNav = document.querySelector(".setting-bottom-nav");
let settingBelowIsActive = false;
const setLightTheme = document.getElementById("light-theme");
const setDarkTheme = document.getElementById("dark-theme");
const setLightThemeTop = document.getElementById("light-theme-top");
const setDarkThemeTop = document.getElementById("dark-theme-top");
let isLight = false;
let isDark = false;
const rs = root.style;
const locker = [...document.querySelectorAll(".lock")];

function closeNav() {
  h.classList.remove("fullNav");
  if (window.innerWidth < 726) {
    navIsActive = false;
    handleNavbar();
    setTimeout(() => {
      navLinks.style.display = "none";
    }, 300);
  }
  setTimeout(() => (bottomSettingNav.style.display = "none"), 300);
  setTimeout(() => (topSettingNav.style.display = "none"), 300);
  setTimeout(() => (abtNav.style.display = "none"), 300);
  aboutIsActive = false;
  settingIsActive = false;
  settingBelowIsActive = false;
  handleAboutNav();
  handleSetting();
}

locker.forEach((item) => item.addEventListener("click", closeNav));

openSlider.addEventListener("click", () => {
  navIsActive = !navIsActive;
  handleNavbar();
});

closeSlider.addEventListener("click", () => {
  navIsActive = !navIsActive;
  handleNavbar();
});

function handleNavbar() {
  if (navIsActive) {
    navLinks.classList.remove("out");
    navLinks.classList.add("in");
    navLinks.style.display = "block";
    openSlider.style.display = "none";
    closeSlider.style.display = "block";
  } else {
    navLinks.classList.remove("in");
    navLinks.classList.add("out");
    setTimeout(() => (navLinks.style.display = "none"), 300);
    openSlider.style.display = "block";
    closeSlider.style.display = "none";
  }
}

function handleAboutNav() {
  if (aboutIsActive) {
    abtController.classList.add("el");
    abtNav.classList.remove("out");
    abtNav.classList.add("in");
    abtNav.style.display = "block";
  } else {
    abtController.classList.remove("el");
    abtNav.classList.remove("in");
    abtNav.classList.add("out");
    setTimeout(() => (abtNav.style.display = "none"), 300);
  }
}

abtController.addEventListener("click", () => {
  aboutIsActive = !aboutIsActive;
  handleAboutNav();
});

function handleSetting() {
  if (settingIsActive) {
    topSettingIcon.classList.add("el", "spin");
    topSettingNav.classList.remove("out");
    topSettingNav.classList.add("in");
    topSettingNav.style.display = "block";
  } else if (!settingIsActive) {
    topSettingIcon.classList.remove("el", "spin");
    topSettingNav.classList.remove("in");
    topSettingNav.classList.add("out");
    setTimeout(() => (topSettingNav.style.display = "none"), 300);
  }

  if (settingBelowIsActive) {
    bottomSettingBtn.classList.add("el", "el-b");
    bottomSettingBtnIcon.classList.add("spin");
    bottomSettingNav.classList.remove("out");
    bottomSettingNav.classList.add("in");
    bottomSettingNav.style.display = "block";
  } else if (!settingBelowIsActive) {
    bottomSettingBtn.classList.remove("el", "el-b");
    bottomSettingBtnIcon.classList.remove("spin");
    bottomSettingNav.classList.remove("in");
    bottomSettingNav.classList.add("out");
    setTimeout(() => (bottomSettingNav.style.display = "none"), 300);
  }

  if (isLight) {
    portfolioList.map((item) => item.classList.add("light"));
    rs.setProperty("--white", "var(--nav-bar-black)");
    rs.setProperty("--nav-txt-col", "var(--white)");
    rs.setProperty("--nav-bg", "var(--brownish-white-nh)");
    rs.setProperty("--about-bg", "var(--light-brownish-white)");
    rs.setProperty("--portfolio-bg", "whitesmoke");
    rs.setProperty("--skills-bg", "var(--light-blue-skl)");
    rs.setProperty("--footer-bg", "var(--brownish-white-nh)");
    rs.setProperty("--setting-bg", "var(--light-brownish-white)");
    rs.setProperty("--footer-txt-col", "var(--nav-bar-black-light)");
    rs.setProperty("--light-gray", "rgba(207, 206, 186, 0.288)");
    rs.setProperty("--article-bg", "var(--light-gray)");
    rs.setProperty("--code-bg", "rgba(92, 91, 91, 0.747)");
    f.classList.remove("dark-f");
    f.classList.add("light-f");
  } else if (isDark) {
    portfolioList.map((item) => item.classList.remove("light"));
    rs.setProperty("--white", "rgb(255, 255, 255");
    rs.setProperty("--nav-txt-col", "var(--brownish-white)");
    rs.setProperty("--nav-bg", "var(--nav-bar-black)");
    rs.setProperty("--about-bg", "var(--light-blue)");
    rs.setProperty("--portfolio-bg", "var(--dark-blue)");
    rs.setProperty("--skills-bg", "var(--light-gray)");
    rs.setProperty("--footer-bg", "var(--nav-bar-black)");
    rs.setProperty("--setting-bg", "var(--nav-bar-black-light)");
    rs.setProperty("--footer-txt-col", "rgba(255, 255, 255, 0.8)");
    rs.setProperty("--light-gray", "rgba(207, 206, 186, 0.062)");
    rs.setProperty("--article-bg", "var(--portfolio-bg)");
    rs.setProperty("--code-bg", "");
    f.classList.remove("light-f");
    f.classList.add("dark-f");
  }
}

topSettingIcon.addEventListener("click", () => {
  settingIsActive = !settingIsActive;
  handleSetting();
});

bottomSettingBtn.addEventListener("click", () => {
  settingBelowIsActive = !settingBelowIsActive;
  handleSetting();
});

setDarkTheme.addEventListener("click", () => {
  isLight = false;
  isDark = !isLight;
  handleSetting();
});

setLightTheme.addEventListener("click", () => {
  isDark = false;
  isLight = !isLight;
  handleSetting();
});

setDarkThemeTop.addEventListener("click", () => {
  isLight = false;
  isDark = !isLight;
  handleSetting();
});

setLightThemeTop.addEventListener("click", () => {
  isDark = false;
  isLight = !isLight;
  handleSetting();
});

function setInitial() {
  aboutIsActive = false;
  isAll = false;
  isWebsite = false;
  isGames = false;
  portfolioNavLinks.map((item) => {
    item.style.color = "var(--white)";
    item.style.opacity = 0.55;
  });
  portfolioList.map((item) => (item.style.display = "none"));
}

function handleActivePortfolio() {
  if (isAll) {
    displayAllPortfolio.style.color = "var(--white)";
    displayAllPortfolio.style.opacity = 1;
    portfolioList.map((item) => (item.style.display = "block"));
  } else if (isGames) {
    displayGamesPorfolio.style.color = "var(--white)";
    displayGamesPorfolio.style.opacity = 1;
    portfolioList
      .filter((item) => item.classList.contains("game"))
      .map((item) => (item.style.display = "block"));
  } else if (isWebsite) {
    displayWebPorfolio.style.color = "var(--white)";
    displayWebPorfolio.style.opacity = 1;
    portfolioList
      .filter((item) => item.classList.contains("web"))
      .map((item) => (item.style.display = "block"));
  }
}

displayGamesPorfolio.addEventListener("click", () => {
  setInitial();
  isGames = !isGames;
  handleActivePortfolio();
});

displayWebPorfolio.addEventListener("click", () => {
  setInitial();
  isWebsite = !isWebsite;
  handleActivePortfolio();
});

displayAllPortfolio.addEventListener("click", displayAll);

function displayAll() {
  setInitial();
  isAll = !isAll;
  handleActivePortfolio();
}

function displayWebsite() {
  setInitial();
  isWebsite = !isWebsite;
  handleActivePortfolio();
}

window.addEventListener("load", displayWebsite);

disableBtn("empty-href-btn");
