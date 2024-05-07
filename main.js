// função  para formatar o número de telefone com DDD
function formatarNumero(numero) {
    // Verificar se o número tem o formato correto (11 dígitos para o DDD e 8 ou 9 ddígitos para o número)
    const regexNumero = /(\d{2})(\d{4,5})(\d{4})/;
    const match = numero.match(regexNumero);

    if (match) {
        const ddd = match[1];
        const primeiraParte = match[2];
        const segundaParte = match[3];

        // Formatar o número com DDD 
        return `(${ddd}) ${primeiraParte}-${segundaParte}`;
    } else {
        // Se o número não estiver no formato correto, apenas retornar o número original
        return numero;
    }
}

// Selecionando o formulário pelo ID
const form = document.getElementById('form-contatos')
// Adicionando um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function (e) {
// Prevenindo o comportamento padrão do formulário, que é recarregar a página após o envio
    e.preventDefault()

// Selecionando os elementos de input pelo ID
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

// Criando uma linha de tabela HTML com os valores dos inputs
    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>` // Inserindo o nome do contato na célula da tabela
    linha += `<td>${formatarNumero(inputNumeroContato.value)}</td>` // Inserindo o número do contato formatado na célula da tabela
    linha += '</tr>'

// Selecionando o corpo da tabela
    const corpoTabela = document.querySelector('tbody')

// Adicionando a linha criada ao final do corpo da tabela
    corpoTabela.innerHTML += linha

// Limpando os valores dos inputs após o envio do formulário
    inputNomeContato.value = ''
    inputNumeroContato.value = ''
})
