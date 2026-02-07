const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* No button runs away */
noBtn.addEventListener("mouseover", () => {
  let x = Math.random() * (window.innerWidth - 150);
  let y = Math.random() * (window.innerHeight - 150);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* Yes button opens gifts */
yesBtn.addEventListener("click", () => {
  window.location.href = "gifts.html";
});
