import {initComponents} from './loadComponents.js';
import {initTelFormatter} from './formatInputValue.js';

/* Chamando a função para carregar dinamicamente os elementos(header/footer) e inicializa menu responsivo */
initComponents();

document.addEventListener("DOMContentLoaded",  () => {
  // Inicializa a formatação de telefone no cadastro de empresas
  initTelFormatter();
});