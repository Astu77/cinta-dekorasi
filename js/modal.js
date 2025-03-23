function openModal(element) {
    var imageSrc = element.closest(".card").querySelector(".preview-image").src;
    document.getElementById("modalImage").src = imageSrc;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const icon = navToggle.querySelector("span");
  
    if (navToggle.classList.contains("collapsed") || !navToggle.classList.contains("show")) {
        icon.innerHTML = "&#9776;"; 
      } else {
        icon.innerHTML = "&times;"; 
      }
    

    navToggle.addEventListener("click", function () {
      if (navToggle.classList.contains("collapsed")) {
        icon.innerHTML = "&#9776;"; 
      } else {
        icon.innerHTML = "&times;"; 
      }
    });
  });