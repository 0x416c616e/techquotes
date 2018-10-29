window.onscroll = function() {checkWidth()};
window.onresize = function() {checkWidth()};

function checkWidth() {
    if (window.innerWidth > 991) {
        myFunction1();
    } else {
        myFunction2();
    }
}
navbar = document.getElementById("navThingId");
mainVar = document.getElementById("mainId");
//for desktop scrolling
//based on header height changes due to max-width CSS selectors
var desktopHeight = 239; //subject to change
function myFunction1() {
    if (window.pageYOffset > desktopHeight) {
      navbar.classList.add("fixed-top");
      mainVar.classList.add("extraPadding");
    } else {
      navbar.classList.remove("fixed-top");
      mainVar.classList.remove("extraPadding");
    }
  }
//for mobile scrolling
var mobileHeight = 0;
function myFunction2() {
    if (window.pageYOffset >= mobileHeight) {
      navbar.classList.add("fixed-top");
      mainVar.classList.add("extraPadding");
    } else {
      navbar.classList.remove("fixed-top");
      mainVar.classList.remove("extraPadding");
    }
}