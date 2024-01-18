
let allCards = document.getElementsByClassName('card');
let tagList = ["card", "ntr", "cbt", "polish"];
let fiterList = [filterAllActive=true, filterNtrActive=false, 
    filterCbtActive=false, filterPolishActive=false];



function gigaFilter()
{
    for (var k = 0; k<allCards.length; k++) {
        allCards[k].style.display = 'none';
    }

    for (var i = 0; i<fiterList.length; i++) {
        for (var j = 0; j<allCards.length; j++) {
            if ((allCards[j].classList.contains(tagList[i])) && (fiterList[i] == true)) {
                allCards[j].style.display = 'inline';
            }
        }
    }
}





function toggleFilterAll() {
    if (fiterList[0] == true) {
        document.querySelector(".filter-all p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-deactive-background');
        fiterList[0] = false;

        gigaFilter()
    } 
    else if (fiterList[0] == false) {
        document.querySelector(".filter-all p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-active-background');
        document.querySelector(".filter-ntr p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-deactive-background');
        document.querySelector(".filter-cbt p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-deactive-background');
        document.querySelector(".filter-polish p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-deactive-background');
        fiterList[0] = true;
        fiterList[1] = false;
        fiterList[2] = false;
        fiterList[3] = false;

        gigaFilter()
    }
}

function toggleFilterNtr() {
    if (fiterList[1] == true) {
        document.querySelector(".filter-ntr p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-deactive-background');
        fiterList[1] = false;

        gigaFilter()
    }
    else if (fiterList[1] == false) {
        document.querySelector(".filter-ntr p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-active-background');
        document.querySelector(".filter-all p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-deactive-background');
        fiterList[1] = true;
        fiterList[0] = false;

        gigaFilter()
    }
}

function toggleFilterCbt() {
    if (fiterList[2] == true) {
        document.querySelector(".filter-cbt p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-deactive-background');
        fiterList[2] = false;

        gigaFilter()
    }
    else if (fiterList[2] == false) {
        document.querySelector(".filter-cbt p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-active-background');
        document.querySelector(".filter-all p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-deactive-background');
        fiterList[2] = true;
        fiterList[0] = false;

        gigaFilter()
    }
}

function toggleFilterPolish() {
    if (fiterList[3] == true) {
        document.querySelector(".filter-polish p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-deactive-background');
        fiterList[3] = false;

        gigaFilter()
    }
    else if (fiterList[3] == false) {
        document.querySelector(".filter-polish p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-active-background');
        document.querySelector(".filter-all p").style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-deactive-background');
        fiterList[3] = true;
        fiterList[0] = false;

        gigaFilter()
    }
}



