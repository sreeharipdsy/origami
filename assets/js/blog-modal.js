function openBlogPage(blogId) {
  const blog = blogs.find((p) => p.id === blogId);
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
            <div class="image">
              <img
                src="${blog.image}"
                onclick="openBlogPage(${blog.id})"
                alt="Blog-Image"/>
            </div>
            <div class="content">
              <div class="author d-flex align-items-center">
                <div class="left d-flex align-items-center">
                  <img src="assets/icons/person.svg" alt="">
                  <p>${blog.author}</p>
                </div>
                <div class="right d-flex align-items-center">
                  <img src="assets/icons/calendar.svg" alt="">
                  <p>${blog.date}</p>
                </div>
              </div><hr>
              <h1>${blog.heading}</h1>
              <p class="blog-desc">
                ${blog.content}
              </p>
            </div>
      `;
  toggleBlogModal();
}

function toggleBlogModal() {
  const modal = document.getElementById("blog-modal");
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
  const modal = document.getElementById("blog-modal");
  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const modal = document.getElementById('blog-modal');
window.onclick = function(event) {
  if (event.target === modal) {
    modal.classList.remove("show");
    modal.style.display = 'none';
    document.body.style.overflow = "auto";
  }
};
