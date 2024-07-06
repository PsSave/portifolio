const intro = document.getElementsByClassName("intro")[0];
const btn_intro = document.getElementById("btn_intro");
const portfolio = document.getElementById("portfolio");
const listSocial = document.getElementsByClassName("list_social");

if (btn_intro) {
  btn_intro.addEventListener("click", handleOpenPortfolio);
}

Array.from(listSocial).forEach((item) => {
  item.addEventListener("mouseover", handleAlterColorSocialIcon);
  item.addEventListener("mouseout", handleResetColorSocialIcon);
});

function handleAlterColorSocialIcon(event) {
  const svg = event.currentTarget.querySelector(".social-svg");
  if (svg) {
    const path = svg.querySelector("path");
    if (path) {
      path.setAttribute("fill", "#FF7052");
    }
  }
}

function handleResetColorSocialIcon(event) {
  const svg = event.currentTarget.querySelector(".social-svg");
  if (svg) {
    const path = svg.querySelector("path");
    if (path) {
      path.setAttribute("fill", "white"); // Reset to original color
    }
  }
}

function handleOpenPortfolio() {
  intro.style.display = "none";
  portfolio.style.display = "flex";
}
