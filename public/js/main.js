/* --------------------Skeleton Loader-------------------------*/

// Get all elements in the document (for skeleton loader)
const contentElements = document.querySelectorAll("*");

// Add skeleton classes when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  contentElements.forEach((el) => {
    el.classList.add("skeleton");
  });
});

// Remove skeleton classes when everything has loaded
window.onload = () => {
  contentElements.forEach((el) => {
    el.classList.remove("skeleton");
  });
};
