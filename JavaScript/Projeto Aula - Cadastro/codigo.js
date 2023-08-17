function menu() {

    opcao = parseInt(prompt(
        "Menu Principal\n\n" +
        "1 - Avaliação fisica\n" +
        "2 - Montar treino"
    ));

    switch (opcao) {
        case 1:
            avaliacao_fisica();
            break;
        case 2:
            montar_treino();
            break;
        default:
            alert("Sistema centro de treinamento Boone")
            document.getElementById("relatorio").innerHTML = "CT Boone"

    }
};

/* Função cadastrar cliente */

function avaliacao_fisica() {
    let x = "n";
    relatorio = "Avaliação Fisica <br>"

    while (x.toUpperCase() != "S") {
        nome = prompt("Digite o nome do aluno");
        sexo = prompt("Digite o sexo do aluno");
        idade = parseInt(prompt("Digite a idade do aluno"));
        peso = parseFloat(prompt("Digite o peso do aluno"));
        altura = parseFloat(prompt("Digite a altura do aluno"));
        circunferenciaabdominal = parseFloat(prompt("Digite em centimentros a circuferencia abdominal do aluno"));
        circuferenciaescapular = parseFloat(prompt("Digite em centimentros a circuferencia escapular do aluno"));
        circuferenciaperna = parseFloat(prompt("Digite em centimentros a circuferencia da perna do aluno"));
        circuferenciabraco = parseFloat(prompt("Digite em centimentros a circuferencia do braço do aluno"));
        porcentualdegordura = parseInt(prompt("Digite o BF calculado do aluno"));

        relatorio = relatorio +  "<br>" +
            "Nome: " + nome + "<br>" +
            "Sexo: " + sexo + "<br>" +
            "Idade: " + idade + " anos<br>" +
            "Peso: " + peso + " kg<br>" +
            "Altura: " + altura + " m<br>" +
            "Circunferência Abdominal: " + circunferenciaabdominal + " cm<br>" +
            "Circunferência Escapular: " + circunferenciaescapular + " cm<br>" +
            "Circunferência da Perna: " + circuferenciaperna + " cm<br>" +
            "Circunferência do Braço: " + circuferenciabraco + " cm<br>" +
            "Porcentual de Gordura (BF): " + porcentualdegordura + "%<br>";

        confirme = prompt("Finalizar Cadastro - S para Sim - N para Não");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        };
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"

    }
}