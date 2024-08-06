

export async function testApi() {
  const url = document.getElementById("api-url").value;
  const outputElement = document.getElementById("json-code");
  outputElement.textContent = ""; // Limpar o conteúdo anterior

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }
    const data = await response.json();
    outputElement.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    outputElement.textContent = "Erro: " + error.message;
  }
}
