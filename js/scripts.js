$(document).ready(function () {
  $("#terms_header").click(function () {
      $(".terms-and-conditions-content").toggle();
  });

  $('.scroll-down').click(function() {
    $('html, body').animate({
      scrollTop: $('section').next().offset().top
    }, 1000);
  });
});


// -------Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// ------Tabs
function openTab(evt, openActiveTab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(openActiveTab).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get elements
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

// Show the popup
openPopupButton.addEventListener("click", () => {
    popup.style.display = "flex";
});

// Close the popup
closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close the popup when clicking outside of the popup content
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

