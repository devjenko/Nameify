document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel, carouselIndex) => {
    const images = Array.from(carousel.querySelectorAll("img"));

    if (!images.length) return; // Skip if no images

    let currentIndex = 0;
    let intervalId = null;
    let isTransitioning = false;

    // Ensure all images are loaded before starting
    Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Handle broken images
        });
      })
    ).then(() => {
      // Initialize states
      images.forEach((img, index) => {
        img.classList.add(index === 0 ? "opacity-100" : "opacity-0");
        img.classList.add("transition-opacity", "duration-1000", "ease-in-out");
      });

      function rotateImage() {
        if (isTransitioning || !images.length) return;
        isTransitioning = true;

        const prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % images.length;

        // Fade out current image
        images[prevIndex].classList.remove("opacity-100");
        images[prevIndex].classList.add("opacity-0");

        // Fade in next image
        images[currentIndex].classList.remove("opacity-0");
        images[currentIndex].classList.add("opacity-100");

        // Reset transition lock after animation completes
        setTimeout(() => {
          isTransitioning = false;
        }, 700); // Match the duration in tailwind classes
      }

      // Start rotation
      intervalId = setInterval(rotateImage, 20000);

      // Pause on hover
      carousel.addEventListener("mouseenter", () => {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      });

      // Resume on mouse leave
      carousel.addEventListener("mouseleave", () => {
        if (!intervalId) {
          intervalId = setInterval(rotateImage, 20000);
        }
      });
    });
  });
});
