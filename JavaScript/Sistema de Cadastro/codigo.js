/* Criando a função menu */

function menu() {

    opcao = parseInt(prompt(
        "Menu Principal\n\n" +
        "1 - Cadastro de Cliente \n" +
        "2 - Cadastro de Colaborador \n" +
        "3 - Cadastro de Produto \n" +
        "4 - Sair do Sistema"
    ));

    switch (opcao) {
        case 1:
            cadastrar_cliente();
            break;
        case 2:
            cadastrar_colaborador();
            break;
        case 3:
            cadastrar_produto();
            break;
        default:
            alert("Finalizando o Sistema de Cadastro")
            document.getElementById("relatorio").innerHTML = "<p>Obrigado!</p>"
    }
};

/* Função cadastrar cliente */

function cadastrar_cliente() {
    let x = "n";
    relatorio = "*- Relatório de Clientes -* <br>"

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do cliente"));
        nome = prompt("Digite o nome do cliente");
        endereco = prompt("Digite o endereço do cliente");

        relatorio = relatorio + "<br>" +
            "ID: " + id + "<br>" +
            "Nome: " + nome + "<br>" +
            "Endereço: " + endereco +
            "<br>"

        confirme = prompt("Finalizar Cadastro - S para Sim - N para Não");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        };
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"
    }
}

function cadastrar_colaborador() {
    let x = "n";
    relatorio = "*- Relatório de Colaborador -* <br>"

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do colaborador"));
        nome = prompt("Digite o nome do colaborador");
        funcao = prompt("Digite a função do colaborador");
        gerente = prompt("Digite o nome do gerente do colaborador")

        relatorio = relatorio + "<br>" +
            "ID: " + id + "<br>" +
            "Nome: " + nome + "<br>" +
            "Função: " + funcao + "<br>" +
            "Gerente: " + gerente + "<br>"

        confirme = prompt("Finalizar Cadastro - S para Sim - N para Não");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        };
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"
    }
}

function cadastrar_produto() {
    let x = "n";
    relatorio = "*- Relatório do Produto -* <br>"

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do produto"));
        nome = prompt("Digite o nome do produto");
        marca = prompt("Digite a marca do produto");
        peso = prompt("Digite o peso do produto");
        categoria = prompt("Digite a categoria do produto");

        relatorio = relatorio + "<br>" +
            "ID: " + id + "<br>" +
            "Nome: " + nome + "<br>" +
            "Marca: " + marca + "<br>" +
            "Peso: " + peso + "<br>" +
            "Categoria: " + categoria + "<br>"

        confirme = prompt("Finalizar Cadastro - S para Sim - N para Não");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        };
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"
    }
}

