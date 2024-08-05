export const initComponents = async () => {
  const loadComponent = async (selector, url) => {
    const response = await fetch(url);
    const html = await response.text();
    document.querySelector(selector).innerHTML = html;
  };

  await loadComponent("#header-placeholder", "../html/header.html");
  await loadComponent("#footer-placeholder", "../html/footer.html");

  // Chama a função para inicializar o menu responsivo após os componentes serem carregados
  import('./toggleNav.js').then(module => {
    module.toggleNav();
  });
};