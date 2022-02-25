const arrayI = [
  {
    imagen: "img1.jpg",
  },
  {
    imagen: "img2.jpg",
  },
  {
    imagen: "img3.jpg",
  },

  {
    imagen: "cafe-g1e5c8d58a_1920.jpg",
  },
];

const imgH = document.getElementById("imgH");

document.addEventListener("DOMContentLoaded", (e) => {
  let cont = 0;

  e.preventDefault();

  setInterval(() => {
    if (cont >= arrayI.length) {
      cont = 0;
    }
    let imgA = arrayI[cont].imagen;
    cont++;

    imgH.src = imgA;

    console.log(imgH);
  }, 3000);
});



window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowH = window.innerHeight;
    let revealT = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;



    if (revealT < windowH - revealpoint) {
      reveals[i].classList.add('active')
    }

    else {
      reveals[i].classList.remove('active');
    }
  }
}