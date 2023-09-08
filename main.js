$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000',{
        placeholder: '(00)00000-0000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por gentileza digite seu nome',
            email: 'Por gentileza digite um email válido',
            telefone: 'Por gentileza digite o número de telefone'
        }
    })
});