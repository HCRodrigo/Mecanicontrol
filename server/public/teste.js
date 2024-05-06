function carregarDados(){
    const aula = [
        
    ]

    const tabelaAulas = document.getElementById("aulas")
    let elementosTabela = ""

    for(let i = 0; i < aula.length; i++){
        elementosTabela += '<tr>'
        elementosTabela += '<td>' + aula[i].inicio + '</td>'
        elementosTabela += '<td>' + aula[i].fim + '</td>'
        elementosTabela += '<td>' + aula[i].turma + '</td>'
        elementosTabela += '<td>' + aula[i].instrutor + '</td>'
        elementosTabela += '<td>' + aula[i].uc + '</td>'
        elementosTabela += '<td>' + aula[i].ambiente + '</td>'
        elementosTabela += '</tr>'
        
    }

    tabelaAulas.innerHTML += elementosTabela;
}