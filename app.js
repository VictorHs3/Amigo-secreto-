const friendNameInput = document.getElementById("amigo")
const friendListElement = document.getElementById('listaAmigos')
const resultElement = document.getElementById("resultado")

let friends = []

function renderizar() {
    
    friendListElement.innerHTML = ''
    resultElement.innerHTML = ''  

    let index = 0;
    while (index < friends.length) {
        const li = document.createElement('li');
        li.innerText = friends[index];
        friendListElement.appendChild(li);

        index++;
    }
}

function adicionarAmigo() {
    const name = friendNameInput.value.trim()

    if (name === '') {
        return alert('o nome não pode ser vazio')
    }

    friends.push(name)
    friendNameInput.value = ''

    renderizar()
}

function sortearAmigo() {
    friendListElement.innerHTML = ''

    const randomNumber = Math.floor(Math.random() * friends.length)

    const li = document.createElement('li')

    const messageResult = `O amigo sorteado é: ${friends[randomNumber]}`

    li.innerText = messageResult

    resultElement.appendChild(li)

    friends = []
}