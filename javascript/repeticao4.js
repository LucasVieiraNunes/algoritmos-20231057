
let nomeUsuario = prompt(`Digite o nome do usuario:`);
let senhaUsuario = prompt(`Digite a senha do usuario`);

for (; nomeUsuario === senhaUsuario; ) {
    alert(`Senha inválida! A senha não pode ser igual ao nome do usuário.`)
    nomeUsuario = prompt(`Digite o nome do usuario:`);
    senhaUsuario = prompt(`Digite a senha do usuario`);
}

alert(`Usuário e senha aceito!`);
