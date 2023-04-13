// Recuperar o elemento tBody que esta no HTML, ele sera usado para gravar as informacoes digitadas
const tbody = document.querySelector('tbody');

// Atribuir ao Formulario um escutador de eventos
// Ele ficara ouvindo o evento submit
// Quando o submit for disparado, uma funcao sera chamada para cancelar o evento padrao (submit)
document.querySelector('form').addEventListener('submit', function(e){
    // Cancelar o evento
    e.preventDefault();     // Este cara ira cancelar o evento padrao

    //Recupera os Campos do formulario
    const campos = [
        document.querySelector('#usuario'), //o # significa ID
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ]
    console.log(campos);

    // Criando a TR do HTML que recebera os dados digitados
    const tr = document.createElement('tr');

    // Percorrer o array campos e para cada elemento do array vamos criar uma
    // td, essa td deve ser inserida dentro da tr

    campos.forEach(campo => {
        // Criar uma td
        const td = document.createElement('td');
        
        // Colcoar na td o valor que esta no campo
        td.textContent = campo.value;

        // Adicionar a td na tr
        tr.appendChild(td);
    });

    // Colocar a td dentro do tbody
    tbody.appendChild(tr);

    // Apos executar, vamos limpar o formulario
    this.reset();
});


