// Listing nav
function myFunction() {
  var x = document.getElementById("nav-linkWrap");
  if (x.className === "nav-linkWrap") {
    x.className += " responsive";
  } else {
    x.className = "nav-linkWrap";
  }
}


// ToTop btn
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction(), stickyNav()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}


// Sticky navigation bar
var navbar = document.getElementById("myNavi");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= 200) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}