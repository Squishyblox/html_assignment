var openedFilter = false;

function filterOpen(){
    if (!openedFilter){
        document.getElementById("filtertext").style.padding = "12px 55px";
        document.getElementById("filterpanel").style.width = "160px";
        openedFilter = true;
    }
    else if(openedFilter){
        document.getElementById("filtertext").style.padding = "12px 12px";
        document.getElementById("filterpanel").style.width = "0px";
        openedFilter = false;
    }
}

//Filter Specific
function promoFilter(){filterFunc("Promo", ".LowPrice,.DropPrice,.TwoFOne,.None");}

function lowPriceFilter(){filterFunc("LowPrice", ".Promo,.DropPrice,.TwoFOne,.None");}

function dropPriceFilter(){filterFunc("DropPrice", ".Promo,.LowPrice,.TwoFOne,.None");}

function twoForOneFilter(){filterFunc("TwoFOne", ".Promo,.LowPrice,.DropPrice,.None");}

function noneFilter(){filterFunc("None", ".Promo,.LowPrice,.DropPrice,.TwoFOne");}

function allFilter(){
    var promoHider = document.querySelectorAll('.Promo,.LowPrice,.DropPrice,.TwoFOne,.None'); 
    for(var i = 0; i < promoHider.length; i++){promoHider[i].style.display = "block";}
}

function filterFunc(visible, invisible){
    var promoHider = document.getElementsByClassName(visible); 
    for(var i = 0; i < promoHider.length; i++){
        promoHider[i].style.display = "block";
    }

    var promoHider = document.querySelectorAll(invisible); 
    for(var i = 0; i < promoHider.length; i++){
        promoHider[i].style.display = "none";
    }
}