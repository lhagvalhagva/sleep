const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const popup = document.getElementById("popup");

yesButton.addEventListener("click", function () {
  popup.style.display = "block";
});

noButton.addEventListener("mouseover", function () {
  const x = Math.floor(Math.random() * 350);
  const y = Math.floor(Math.random() * 350);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});
