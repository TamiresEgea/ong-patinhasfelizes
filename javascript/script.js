function mascaraCPF(campo){
    campo.value = campo.value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

}

function mascaraTelefone(campo){
    campo.value = campo.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
}

function mascaraCEP(campo){
    campo.value = campo.value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2');
}