const form = document.getElementById('formAluno');
const lista = document.getElementById('listaAlunos');

const API = "http://localhost:3000/alunos";

// CADASTRAR
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const aluno = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        curso: document.getElementById('curso').value
    };

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    });

    form.reset();
    carregarAlunos();
});

// LISTAR
async function carregarAlunos() {
    const res = await fetch(API);
    const alunos = await res.json();

    lista.innerHTML = "";

    alunos.forEach(a => {
        const li = document.createElement('li');
        li.innerText = `${a.nome} - ${a.curso}`;
        lista.appendChild(li);
    });
}

carregarAlunos();