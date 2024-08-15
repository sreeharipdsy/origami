
const blogs = [
    {
        id: 1,
        image: 'assets/images/courses-page/cuet-foundation.svg',
        author: 'Risha',
        date: '14/08/2024',
        heading: 'Blog Heading',
        description: 'This is a blog description will be given here as description blog description will be given here as description blog description will be given here as description',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br><br> hi"
    }
]

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