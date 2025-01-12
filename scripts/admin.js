let admins = JSON.parse(localStorage.getItem('admins')) || [];

function cadastrarAdmin(event) {
    // event.preventDefault();

    const nome = document.getElementById('Nome').value.trim();
    const email = document.getElementById('Email').value.trim();
    const dataCadastro = new Date().toLocaleString();

    if (nome && email) {
        admins.push({ nome, email, dataCadastro });

        localStorage.setItem('admins', JSON.stringify(admins));

        alert('Administrador cadastrado com sucesso!');
        limpar();
    } else {
        alert('Todos os campos são obrigatórios!');
    }
}

function limpar() {
    document.getElementById('Nome').value = '';
    document.getElementById('Email').value = '';
}

function criaItem() {
    let admins = JSON.parse(localStorage.getItem('admins')) || [];

    const lista = document.getElementById('lista-cadastro');
    lista.innerHTML = '';

    admins.forEach((admin, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span>
                Nome: ${admin.nome} <br>
                Email: ${admin.email} <br>
                Data de Cadastro: ${admin.dataCadastro}
            </span>
            <button class="btn-excluir" onclick="excluirAdmin(${index})">Excluir</button>
        `;

        lista.appendChild(li);
    });
}

function excluirAdmin(index) {
    let admins = JSON.parse(localStorage.getItem('admins')) || [];

    admins.splice(index, 1);

    localStorage.setItem('admins', JSON.stringify(admins));
    criaItem();
}

function limparTodos() {
    localStorage.removeItem('admins');
    admins = [];
    criaItem();
    alert('Todos os administradores foram excluídos!');
}

function procuraNome() {
    const admins = JSON.parse(localStorage.getItem('admins')) || [];
    const pesquisa = document.getElementById('pesquisa').value.trim().toLowerCase();

    if (!pesquisa) {
        alert("Por favor, insira um nome ou e-mail para pesquisar!");
        return;
    }

    const resultado = admins.find(
        admin =>
            admin.nome.toLowerCase() === pesquisa
    );

    const lista = document.getElementById('lista-cadastro');
    lista.innerHTML = '';

    if (resultado) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>
                Nome: ${resultado.nome} <br>
                Email: ${resultado.email} <br>
                Data de Cadastro: ${resultado.dataCadastro}
            </span>
        `;
        lista.appendChild(li);
    } else {
        lista.innerHTML = '<li>Administrador não encontrado.</li>';
    }
}


function procuraEmail() {
    const admins = JSON.parse(localStorage.getItem('admins')) || [];
    const pesquisa = document.getElementById('pesquisa').value.trim().toLowerCase();

    if (!pesquisa) {
        alert("Por favor, insira um nome ou e-mail para pesquisar!");
        return;
    }

    const resultado = admins.find(
        admin =>
            admin.email.toLowerCase() === pesquisa
    )
    const lista = document.getElementById('lista-cadastro');
    lista.innerHTML = '';

    if (resultado) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>
                Nome: ${resultado.nome} <br>
                Email: ${resultado.email} <br>
                Data de Cadastro: ${resultado.dataCadastro}
            </span>
        `;
        lista.appendChild(li);
    } else {
        lista.innerHTML = '<li>Administrador não encontrado.</li>';
    }
}

window.onload = criaItem;


function resetaPag() {
    location.reload()
}

