const portfolioItems = document.querySelectorAll('.portfolio-item');
const displayAllPortfolio = document.getElementById("d-all");
const displayWebPorfolio = document.getElementById("d-web");
const displayGamesPorfolio = document.getElementById("d-games");
const web = document.querySelectorAll(".web");
//convert my nodelist into an array
const portfolioList = Array.from(portfolioItems);

displayGamesPorfolio.addEventListener('click', ()=>{
    for(let i = 0; i < portfolioItems.length; i++) {
        portfolioItems[i].style.display = "none";
        if(portfolioItems[i].classList.contains('game'))
        portfolioItems[i].style.display = "block";
        if((i === portfolioItems.length - 1) && 
        portfolioItems[i].classList.contains('game'))
        handleLastChild(portfolioItems[i]);
    }
});

function handleLastChild(child) {
    if(window.innerWidth < 500) {
        portfolioList.forEach(item => {
            item.style.borderBottom = "1px solid black";
            item.style.paddingBottom = "1em";
        })
        child.style.borderBottom = "none";
        child.style.paddingBottom = 0;
        return child;
    }
}

displayWebPorfolio.addEventListener('click', ()=>{
    for(let i = 0; i < portfolioItems.length; i++) {
        portfolioItems[i].style.display = "none";
        if(portfolioItems[i].classList.contains('web'))
        portfolioItems[i].style.display = "block";
        if((i === web.length - 1) && 
        portfolioItems[i].classList.contains('web'))
        handleLastChild(portfolioItems[i]);
    }
});

displayAllPortfolio.addEventListener('click', displayAll);

function displayAll() {
    handleLastChild(portfolioList[portfolioList.length - 1])
    const allItems = portfolioList.map(item => item.style.display = "block");
    return allItems;
}

window.addEventListener('load', displayAll);