let amigos = [];
let campoAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let nomeAmigo = campoAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Digite um nome válido.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Esse nome já foi adicionado.');
        campoAmigo.value = '';
        return;
    }

    amigos.push(nomeAmigo);

    let item = document.createElement('li');
    item.textContent = nomeAmigo;
    listaAmigos.appendChild(item);

    campoAmigo.value = '';
    campoAmigo.focus();
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert('Adicione pelo menos três amigos.');
        return;
    }

    listaAmigos.style.display = 'none';

    resultado.innerHTML = '';

    let indice = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indice];

    let item = document.createElement('li');
    item.textContent = `Seu amigo secreto sorteado é: ${nomeSorteado}`;
    resultado.appendChild(item);
}
