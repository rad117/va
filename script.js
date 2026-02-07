const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* No button runs away AFTER hover */
noBtn.addEventListener("mouseover", () => {

  noBtn.style.position = "absolute";

  let x = Math.random() * (window.innerWidth - 200);
  let y = Math.random() * (window.innerHeight - 200);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* Yes button redirect */
yesBtn.addEventListener("click", () => {
  window.location.href = "gifts.html";
});
