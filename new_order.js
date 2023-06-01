// JavaScript code for filter functionality
function filterSelection(category) {
    const items = document.getElementsByClassName("gallery-item");
    if (category === "all") {
      for (let i = 0; i < items.length; i++) {
        items[i].style.display = "block";
      }
    } else {
      for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains(category)) {
          items[i].style.display = "block";
        } else {
          items[i].style.display = "none";
        }
      }
    }
  }