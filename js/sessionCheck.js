import {checkSession} from './checkSession.js';

/* Importar em todas as páginas exceto a de login para validar se o usuário está logado */
document.addEventListener("DOMContentLoaded", () => {
  checkSession();
  console.log('olá')
});