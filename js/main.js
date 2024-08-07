import {initComponents} from './loadComponents.js';
import {initTelFormatter} from './formatInputValue.js';
import {testApi, infoEmp} from './testApi.js';
import {loginUser} from './login.js';

/* Chamando a função para carregar dinamicamente os elementos(header/footer) e inicializa menu responsivo */
initComponents();

document.addEventListener("DOMContentLoaded",  () => {
  // Inicializa a formatação de telefone no cadastro de empresas
  initTelFormatter();

  // Carrega as informações da empresa na home após logado
  infoEmp();

  // Adiciona evento para teste da API
  const testButton = document.getElementById("test-api-button");
  if (testButton) {
    testButton.addEventListener("click", testApi);
  }

  // Adiciona evento para o formulário de login
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      loginUser();
    });
  }
});