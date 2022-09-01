let id1 = Symbol("id");

//acesso a propriedade usando simbolo

let user = {
    name: "pitu",
}

user[id1] = "sharingan";

//alert(user[id1]);

// ** symbol props sao puladas durante o loop for in

// Symbols sao usados por exemplo qnd vc quer modificar um obj que vem de uma biblioteca 3rd party. Sao considerados
// "hidden" props, e nao afetam o objeto principal

//Ex: client eh um obj complexo

let client = {
    id: 3210321,
}

//se vc quiser adicionar uma prop id ao obj, usando symbols nao modifcia o obj original

let id = Symbol("id");

client[id] = 321;

alert(client.id);