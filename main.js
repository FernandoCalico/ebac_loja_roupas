const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const forms = document.querySelectorAll('.needs-validation')

$(document).ready(function() {
    //Para trocar de campo pressionando enter
    $('.form-control').on('keypress', function(e){
        var tecla = (e.keyCode?e.keyCode:e.which);      

        if(tecla == 13){
            campo = $('.form-control');
            indice = campo.index(this);

            if(campo[indice+1] != null){
                proximo = campo[indice + 1];
                proximo.focus();
                e.preventDefault(e);
            }
        }
    });

    //Mascara dos campos
    $('#telefone').mask('(00) Z0000-0000', {
        translation: {
            'Z': {
                pattern: /[ 0-9]/, optional: false
            }
        }
    });

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

        form.classList.add('was-validated')
        }, false)
    });

});
