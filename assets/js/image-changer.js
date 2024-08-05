document.getElementById("target-me").open = true;
const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

function ImgChanger(i) {
  document
    .getElementById("outcomes-img")
    .setAttribute("src", `assets/images/about-us-page/image-${i}.svg`);
}
