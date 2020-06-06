// const placeForResults = document.getElementById("results")

// new URLSearchParams(window.location.search).forEach((value, name) => {
//   placeForResults.append(`${name} : ${value}`)
//   placeForResults.append(document.createElement("br"))
// })

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      //Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
      }
  });
      //Burger Animation
      burger.classList.toggle('toggle');


  })

}


navSlide();