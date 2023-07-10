// Navigation Toggle Menu Functionality
var menuBtn = document.getElementById("menuBtn");
var navMenu = document.getElementById("navMenu");
var navIcon = document.getElementById("navIcon");
function toggleMenu() {
  // toggles the show class on the navigation menu
  navMenu.classList.toggle("show");

  // changes the icon on the navigation button
  var currentSrc = navIcon.src;
  var newSrc = "";
  if (currentSrc.includes("assets/icons/hamburger-icon.svg")) {
    newSrc = currentSrc.replace(
      "assets/icons/hamburger-icon.svg",
      "assets/icons/close.svg"
    );
  } else {
    newSrc = currentSrc.replace(
      "assets/icons/close.svg",
      "assets/icons/hamburger-icon.svg"
    );
  }
  navIcon.src = newSrc;
}
menuBtn.addEventListener("click", toggleMenu);

// Sticky Navigation for Desktops
function checkScreenWidth() {
  var screenWidth = window.innerWidth;
  if (screenWidth > 650) {
    // selects the navigation element
    var navBar = document.getElementById("navwrapper");
    // checks for the offset position of the navigation element
    var stickyPosition = navBar.offsetTop;
    function handleScrollNav() {
      // adds sticky class if user scrolls past the offset position
      if (window.scrollY >= stickyPosition) {
        navwrapper.classList.add("sticky");
      } else {
        navwrapper.classList.remove("sticky");
      }
    }

    // listens for scroll event and calls handleScrollNav function
    window.addEventListener("scroll", handleScrollNav);
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

// selects the go-to-top button
var topBtn = document.getElementById("topBtn");
// checks if the user has scrolled to bottom of page and scrolls back to top
function checkScrollPosition() {
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (documentHeight - scrollTop <= windowHeight * 1.5) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
}
// Function to scroll back to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// Add event listener to check scroll position on scroll
window.addEventListener("scroll", checkScrollPosition);
// Add event listener to scroll to top when button is clicked
topBtn.addEventListener("click", scrollToTop);
