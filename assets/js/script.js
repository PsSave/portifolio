const intro = document.getElementsByClassName("intro")[0];
const btn_intro = document.getElementById("btn_intro");
const portfolio = document.getElementById("portfolio");

btn_intro.addEventListener("click", handleOpenPortfolio);

function handleOpenPortfolio() {
  intro.style.display = "none";
  portfolio.style.display = "block";
}
