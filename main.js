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

const form = document.getElementById('form-contatos')
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${formatarNumero(inputNumeroContato.value)}</td>`
    linha += '</tr>'

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML += linha

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
})