function toggleProductModal() {
    const modal = document.getElementById("product-modal");
    if (modal.classList.contains("show")) {
      window.history.back();
    } else {
      modal.classList.add("show");
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
      window.history.pushState({ modalOpen: true }, "");
    }
  }
  
  window.addEventListener("popstate", function (event) {
    const modal = document.getElementById("product-modal");
    if (modal.classList.contains("show")) {
      modal.classList.remove("show");
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });