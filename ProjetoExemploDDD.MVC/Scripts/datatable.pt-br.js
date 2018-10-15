$(document).ready(function () {

    $('.DataTable').DataTable({
        responsive: true,
        "language": {
            "lengthMenu": "Listar _MENU_ por pagina",
            "zeroRecords": "Nenhum registro encontrado",
            "info": "Mostrando a página _PAGE_ de _PAGES_",
            "infoEmpty": "Nenhum registro disponível",
            "infoFiltered": "(Filtrado de _MAX_  registros)",
            "search": "Buscar",
            "paginate": {
                "first": "Inicio",
                "last": "Fim",
                "next": "Avançar",
                "previous": "Voltar"
            }
        },
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    });
});