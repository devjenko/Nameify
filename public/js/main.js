// Remove skeleton classes when everything has loaded
window.onload = async () => {
  const aiResponse = document.querySelector(".aiResponse");
  const category = document.body.dataset.category;
  const loadingElement = document.querySelector(".loading");
  const skeleton = document.querySelectorAll(".skeleton");

  // Center loading text
  aiResponse.classList.add("text-center");
  // Show the loading element
  loadingElement.classList.remove("hidden");

  // Don't allow users to be able to scroll below skeleton loader
  const resultsTable = document.querySelector(".results");
  resultsTable.classList.add("overflow-hidden");

  // Fetch data generated from the ai and change the inner html of the loading html to the ai data
  try {
    const res = await fetch(`/api/generate/${encodeURIComponent(category)}`);
    const data = await res.json();
    aiResponse.innerHTML = data.aiResponse || "No names generated.";
  } catch (error) {
    console.log(error);
    aiResponse.textContent = "Error loading business names. Please try again.";
  }

  // Show the heading of the results
  const resultsHeading = document.querySelector(".results-heading");
  resultsHeading.classList.remove("hidden");

  // Allow users to scroll through the results table
  resultsTable.classList.remove("overflow-hidden");

  // Remove text center from the loading html as it now contains ai data
  aiResponse.classList.remove("text-center");

  // re-hide the loading element
  loadingElement.classList.add("hidden");
  // Remove skeleton loader for the results page
  skeleton.forEach((el) => {
    el.classList.add("hidden");
  });
};
