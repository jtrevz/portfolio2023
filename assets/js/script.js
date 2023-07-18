let ovalNum = 40;
const ovalContainer = document.querySelector(".oval-container");

function circleAnimation() {
  for (let i = 0; i < 36; i++) {
    let oval = document.createElement("div");
    oval.setAttribute("class", "oval");
    oval.style.width = `${15 + i}vw`;
    oval.style.height = `${4 + i / 2}vw`;
    oval.style.margin = `${10 + i * 6}px 0px 0px ${i * 4}px`;
    oval.style.animation = `appearAnimation ${i * 0.3}s forwards`;
    if (i % 2 && i > 21) {
      oval.style.animation = `appearAnimationUp ${i * 0.3}s forwards`;
    }
    if (i % 3 && i > 25) {
      oval.style.animation = `appearAnimationMid ${i * 0.3}s forwards`;
    }
    if (i > 22) {
      oval.style.width = `${15 + i * 0.8}vw`;
      oval.style.height = `${4 + i / 3}vw`;
    }
    ovalContainer.appendChild(oval);
  }
}

$(".hamburger").click(function () {
  $(this).hide();
});

$(".btn-close").click(function () {
  setTimeout(function () {
    $(".hamburger").show();
  }, 300);
});
circleAnimation();
