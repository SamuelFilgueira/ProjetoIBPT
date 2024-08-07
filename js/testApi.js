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

export async function infoEmp() {
  const nomeEmp = document.getElementById("nome-emp").value;
  const cnpjEmp = document.getElementById("cnpj-value").value;
  const vinculoEmp = document.getElementById("vinculo-value").value;
  const vigenciaEmp = document.getElementById("vigencia-value").value;

  try {
    const response = await fetch("https://localhost:7190/api/Empresa")
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error){
    
  }
}
