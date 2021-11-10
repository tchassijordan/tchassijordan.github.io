const portfolioItems = document.querySelectorAll('.portfolio-item');
const displayAllPortfolio = document.getElementById("d-all");
const displayWebPorfolio = document.getElementById("d-web");
const displayGamesPorfolio = document.getElementById("d-games");
const web = document.querySelectorAll(".web");
const portfolioList = Array.from(portfolioItems); //convert my nodelist into an array
let isAll = false;
let isWebsite = false;
let isGames = false;
const navLinks = document.querySelector(".nav-bar-links");
const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);
const activePortfolioNav = rootStyles.getPropertyValue('--white-gn');
const inActivePortfolioNav = rootStyles.getPropertyValue('--brownish-white');
const openSlider = document.getElementById("open-slider");
const closeSlider = document.getElementById("close-slider");
let navIsActive = false;
const h = document.querySelector("header");

openSlider.addEventListener('click', () => {
    navIsActive = !navIsActive
    handleNavbar()  
})

closeSlider.addEventListener('click', () => {
    navIsActive = !navIsActive
    handleNavbar()  
})

function handleNavbar() {
    if (navIsActive) {
        h.classList.add('fullNav');
        navLinks.classList.remove('out');
        navLinks.classList.add('in');
        navLinks.style.display = "block";
        openSlider.style.display = "none";
        closeSlider.style.display = "block";
    }
    else {
        h.classList.remove('fullNav');
        navLinks.classList.remove('in');
        navLinks.classList.add('out');
        setTimeout(()=> navLinks.style.display  = "none", 300);
        openSlider.style.display = "block";
        closeSlider.style.display = "none";
    }
}

function setInitial() {
    isAll = false;
    isWebsite = false;
    isGames = false;
    displayAllPortfolio.style.color = inActivePortfolioNav;
    displayGamesPorfolio.style.color = inActivePortfolioNav;
    displayWebPorfolio.style.color = inActivePortfolioNav;
    portfolioList.map(item => item.style.display = "none");
}

function handleActivePortfolio() {
    if (isAll) {
        displayAllPortfolio.style.color = activePortfolioNav;
        portfolioList.map(item => item.style.display = "block");
    }
    else if (isGames) {
        displayGamesPorfolio.style.color = activePortfolioNav;
        portfolioList.filter(item => item.classList.contains('game')).map(item => item.style.display = "block");

    } else if (isWebsite) {
        displayWebPorfolio.style.color = activePortfolioNav;
        portfolioList.filter(item => item.classList.contains('web')).map(item => item.style.display = "block");
    }
}

displayGamesPorfolio.addEventListener('click', () => {
    setInitial();
    isGames = !isGames;
    handleActivePortfolio();
});

displayWebPorfolio.addEventListener('click', () => {
    setInitial();
    isWebsite = !isWebsite;
    handleActivePortfolio();
});

displayAllPortfolio.addEventListener('click', displayAll);

function displayAll() {
    setInitial();
    isAll = !isAll;
    handleActivePortfolio();
}

window.addEventListener('load', displayAll);
