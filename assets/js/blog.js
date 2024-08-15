

document.addEventListener("DOMContentLoaded", () => {
  renderBlog(blogs);
});

function renderBlog(blogs) {
  blogs.sort((a, b) => b.id - a.id);
  const blogList = document.getElementById("blog-list");
  blogList.innerHTML = "";
  blogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("card");
    blogCard.setAttribute("data-aos", "zoom-in");
    blogCard.setAttribute("data-blog-id", blog.id);
    blogCard.innerHTML = `
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
                ${blog.description}
              </p>
              <a class="button"
                 onclick="openBlogPage(${blog.id})">
                Read More >
              </a>
            </div>
      `;
    blogList.appendChild(blogCard);
  });
}
