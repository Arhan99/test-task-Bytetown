// animation scroll

gsap.registerPlugin(ScrollTrigger);

gsap.to("#grid1", {
  scrollTrigger: {
    scrub: 1,
  },
  y: -500,
});
gsap.to("#grid2", {
  scrollTrigger: {
    scrub: 3,
    // trigger: "#grid2",
  },
  y: -500,
});
gsap.to("#grid3", {
  scrollTrigger: {
    scrub: 6,
    // trigger: "#grid2",
  },

  y: -500,
});
// form inputs
const inputName = document.getElementById("input-name");
const inputNumber = document.getElementById("input-number");
const inputComment = document.getElementById("input-comment");

document.getElementById("name").addEventListener("keyup", function () {
  if (this.value.length) {
    inputName.classList.add("main__input--visible");
  } else {
    inputName.classList.remove("main__input--visible");
  }
});

document.getElementById("number").addEventListener("keyup", function () {
  if (this.value.length) {
    inputNumber.classList.add("main__input--visible");
  } else {
    inputNumber.classList.remove("main__input--visible");
  }
});

document.getElementById("comment").addEventListener("keyup", function () {
  if (this.value.length) {
    inputComment.classList.add("main__input--visible");
  } else {
    inputComment.classList.remove("main__input--visible");
  }
});

// burger menu

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);
const icons = document.querySelector("#icons").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
  popup.appendChild(icons);
}

const links = Array.from(menu.children);

links.forEach(link => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
