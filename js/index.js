function verificarCampos() {
  const nomeConvidado = document.getElementById("verificarNome").value;
  const convidadoPor = document.getElementById("convidadoPor").value;

  if (nomeConvidado === "" || convidadoPor === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  VerificarEntrada(nomeConvidado, convidadoPor);
}

function VerificarEntrada() {
  nomeConvidado = document.getElementById("verificarNome").value;
  convidadoFesta = document.getElementById("convidadoPor").value;

  convidadoPedro = [
    "Fernando Junior",
    "Cristiano Fernandes",
    "Maria Clara",
    "Ana Paula",
  ];

  if (convidadoPedro.includes(nomeConvidado)) {
    document.getElementById("PermissaoEntrada").innerText =
      "Entrada Permitida!";
  } else {
    document.getElementById("PermissaoEntrada").innerText = "Entrada Negada!";
  }

  convidado = ["Pedro"];

  if (convidado.includes(convidadoFesta)) {
    alert("Convidado Correto!");
    document.getElementById("PermissaoEntrada").innerText = "Entrada Liberada!";
  } else {
    alert("Convidado Errado!");
    document.getElementById("PermissaoEntrada").innerText = "Entrada Negada!";
  }
}
