/* Função para verificar se o usuário está logado ao acessar páginas da aplicação*/
/* export async function checkSession() {
  try {
    const response = await fetch(
      "https://localhost:7190/api/Session/usuariologado",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Usuário não logado");
    }
  } catch (error) {
    window.location.href = "../html/login.html";
  }
}
 */

export async function checkSession() {
  try {
    const response = await fetch(
      "https://localhost:7190/api/Session/usuariologado",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("User is not logged in");
    }
  } catch (error) {
    setTimeout(() => {
      window.location.href = "../html/login.html";
    }, 10000); // Delay de 0.5 segundos para garantir que a sessão seja verificada
  }
}