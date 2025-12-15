document.querySelector('.scrolldown').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');


window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
});


function gmail() {
  let redirect = alert("Are you sure you want to email me?");
  if (alert) {
    window.location.href = "mailto:ajinkyakhairnar007@gmail.com";
  }
  else{
    document.getElementById("index.html").scrollIntoView({ behavior: 'smooth' });
  }
}
