// Animation Homepage

function detectmob() {
  if (window.innerWidth <= 576) {
    //disable animation for mobile
    return true;
  } else {
    return false;
  }
}

if (!detectmob()) {
  window.sr = ScrollReveal();

  sr.reveal(".main-left", {
    duration: 2000,
    origin: "top",
    distance: "300px",
  });

  sr.reveal(".main-right", {
    duration: 3000,
    origin: "bottom",
    distance: "300px",
  });

  sr.reveal(".main-btn", {
    duration: 9000,
  });
}

// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// $(document).ready(function(){

//   var color=$(".footcolor").css("color");
// alert(color);
// });

(function () {
  //form validation beggins
  "use strict";

  window.addEventListener(
    "load",
    function () {
      var form = document.getElementById("needs-validation");

      form.addEventListener(
        "submit",
        function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    },
    false
  );
})(); //form validation ends

$(".card").hover(
  function () {
    $(this).css("background-color", "#7ac5cd");
  },
  function () {
    $(this).css("background-color", "white");
  }
);
