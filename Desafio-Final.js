const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
  { id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
  { id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
  { id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" },
];

function listarUsuarios() {
    return usuarios.map((usu) => {
        return `Nome: ${usu.nome}. Cargo: ${usu.cargo}`;
    });
};

//1. listarUsuarios() — Use map() para retornar apenas nome e cargo de cada usuário.
//2. buscarUsuarioPorId(id) — Use find() para buscar um usuário pelo ID informado.
//3. listarUsuariosAtivos() — Use filter() para retornar apenas os usuários ativos.
//4. existeUsuarioInativo() — Use some() para retornar true se existir pelo menos um usuário inativo.
//5. todosUsuariosMaioresDeIdade() — Use every() para retornar true somente se todos tiverem idade maior ou igual a 18.
//6. calcularMediaIdade() — Use reduce() para calcular a média de idade dos usuários.

console.log(listarUsuarios());
console.log(buscarUsuarioPorId(id));
console.log(listarUsuariosAtivos());
console.log(existeUsuarioInativo());
console.log(todosUsuariosMaioresDeIdade());
console.log(calcularMediaIdade());
