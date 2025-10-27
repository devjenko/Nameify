document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  const slideInterval = 3000; // 3 seconds

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;
    setInterval(() => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }, slideInterval);
  });
});
