export const formataTel = (event) => {
  var inputTel = event.target;
  var x = inputTel.value.replace(/\D/g, "");
  var numeroFormatado = "";

  if (x.length > 0) {
    numeroFormatado += "(" + x.substring(0, 2);
  }
  if (x.length >= 3) {
    numeroFormatado += ") " + x.substring(2, 7);
  }
  if (x.length >= 8) {
    numeroFormatado += "-" + x.substring(7, 11);
  }

  inputTel.value = numeroFormatado;
};

export const initTelFormatter = () => {
  const inputTel = document.getElementById("tel");
  if (inputTel) {
    inputTel.addEventListener("input", formataTel);
  } else {
    console.error("Elemento com ID 'tel' não encontrado.");
  }
};