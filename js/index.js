function verificarCampos() {
  const nomeConvidado = document.getElementById("verificarNome").value;
  const convidadoPor = document.getElementById("convidadoPor").value;

  if (nomeConvidado === "" || convidadoPor === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  VerificarEntrada(nomeConvidado, convidadoPor);
}

function VerificarEntrada(nomeConvidado, convidadoFesta) {
  const convidadoPedro = [
    "Fernando Junior",
    "Cristiano Fernandes",
    "Maria Clara",
    "Ana Paula",
  ];

  const convidado = "Pedro";

  if (convidadoPedro.includes(nomeConvidado) && convidadoFesta === convidado) {
    alert("Esse nome está na Lista!");
    document.getElementById("PermissaoEntrada").innerText =
      "Entrada Permitida!";
  } else {
    alert("Esse  não é o nome do convidado!");
    document.getElementById("PermissaoEntrada").innerText = "Entrada Negada!";
  }
}
