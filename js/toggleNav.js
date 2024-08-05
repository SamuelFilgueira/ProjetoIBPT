export const toggleNav = () => {
  const mobileNav = document.querySelector(".hamburger");
  const navbar = document.querySelector(".menubar");

  const toggle = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
  };

  if (mobileNav && navbar) {
    mobileNav.addEventListener("click", toggle);
  } else {
    console.error(
      "Elementos não encontrados para inicializar o menu responsivo."
    );
  }
};
