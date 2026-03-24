// function loadHTML(id, file) {
//   return fetch(file)
//     .then((res) => res.text())
//     .then((data) => {
//       document.getElementById(id).innerHTML = data;
//     });
// }

// Promise.all([
//   loadHTML("header", "./partials/header.html"),
//   loadHTML("hero", "./partials/hero.html"),
// ]).then(() => {

// });

const openBtn = document.getElementById("openModal");
const overlay = document.getElementById("modalOverlay");
const closeBtn = document.querySelector(".modal__close");

if (openBtn && overlay && closeBtn) {
  const closeModal = () => {
    overlay.classList.remove("is-open");
    setTimeout(() => {
      overlay.style.pointerEvents = "none";
    }, 300);
  };

  openBtn.addEventListener("click", () => {
    overlay.classList.add("is-open");
    overlay.style.pointerEvents = "all";
  });

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}


const langButtons = document.querySelectorAll(".lang-btn");
const texts = document.querySelectorAll(".language-content .text");

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    langButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const lang = btn.dataset.lang;

    texts.forEach((t) => {
      t.classList.toggle("active", t.dataset.lang === lang);
    });
  });
});


let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

if (menuOpenBtn && menuCloseBtn && navLinks) {
  menuOpenBtn.onclick = () => {
    navLinks.style.left = "0";
  };

  menuCloseBtn.onclick = () => {
    navLinks.style.left = "-100%";
  };
}

// ===== СТРЕЛКА =====
let htmlcssArrow = document.querySelector(".htmlcss-arrow");

if (htmlcssArrow && navLinks) {
  htmlcssArrow.onclick = () => {
    navLinks.classList.toggle("show1");
  };
}