document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", (event) => {
    const content = event.target.querySelector(".summary-content");
    if (event.target.open) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`; // Set the current height
      setTimeout(() => {
        content.style.maxHeight = "0"; // Trigger the close animation
      }, 10); // Small delay to ensure the height is set before closing
    }
  });
});
