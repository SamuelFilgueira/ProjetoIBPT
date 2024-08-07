export async function loginUser() {
    console.log("olá")
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(
      "https://localhost:7190/api/Login/autenticar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      // Sucesso no login
      window.location.href = "../index.html";
    } else {
      // Exibir mensagem de erro
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent =
        result.message || "Erro ao fazer login. Por favor, tente novamente.";
    }

  } catch (error) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent =
      "Erro ao fazer login. Por favor, tente novamente.";
  }
}
