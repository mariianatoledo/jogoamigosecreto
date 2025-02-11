//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo Amigo Secreto');
exibirTextoNaTela('h2', 'Crie a lista de amigos secretos');

let nomesAmigos = [];
let lista = document.getElementById('listaAmigos');

function limpandoCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function adicionarAmigo() {
    let nome = document.querySelector('input').value.trim(); 
    if (nome.length < 2) { 
        alert('Insira um nome válido');
        return;
    }
    if (nome == '') {
        alert('Insira um nome válido');
        return;
    } else {
        nomesAmigos.push(nome);
        limpandoCampo();
    }
    criarLista();
    return nome;
    
}

function criarLista() {
    lista.innerHTML = ''; 

    nomesAmigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nomesAmigos.length === 0) {
        alert('Crie uma lista de amigos para o sorteio');
        return;
    }

    let amigoSorteado = nomesAmigos[Math.floor(Math.random() * nomesAmigos.length)];
    resultado.innerHTML = `<li>Seu amigo secreto é: ${amigoSorteado}</li>`;
}


