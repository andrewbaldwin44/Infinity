function scrollToSection(section) {
  window.scrollTo(0, section.offsetTop - navHeight);
}

const navHeight = window.innerHeight / 14;

const featuresLink = document.querySelector("#featuresLink");
const advantagesLink = document.querySelector("#advantagesLink");
const galleryLink = document.querySelector("#galleryLink");

const featuresSection = document.querySelector("#featuresSection");
const advantagesSection = document.querySelector("#advantagesSection");
const gallerySection = document.querySelector("#gallerySection");

featuresLink.addEventListener("click", () => scrollToSection(featuresSection));
advantagesLink.addEventListener("click", () => scrollToSection(advantagesSection));
galleryLink.addEventListener("click", () => scrollToSection(gallerySection));
