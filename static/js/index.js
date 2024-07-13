function detectRadioButtonSelected(){
    var id_shortcut_option_0_button = document.getElementById("id_shortcut_option_0")
    var id_shortcut_option_1_button = document.getElementById("id_shortcut_option_1")
    
    if (id_shortcut_option_0_button.checked) {
        addOrHiddeContent(id_shortcut_option_0_button.checked);
    } else if (id_shortcut_option_1_button.checked) {
        addOrHiddeContent(id_shortcut_option_0_button.checked);
    } 
}

function addOrHiddeContent(button0Cheked){
    var div = document.getElementById("insert_shortcut")
    if(button0Cheked){
        div.style.display = "none";
    }else{
        div.style.display = "block";
    }
}

function printTable() {
    $.ajax({
        url: 'http://localhost:8000/url/custom_urls',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            createTable(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('There has been a problem with your fetch operation:', textStatus, errorThrown);
        }
    });
}

function createTable(data) {
    $('#table').DataTable({
        data: data,
        columns: [
            { data: "custom_url" },
            { data: "url" },
            {
                // Define new column for buttons
                data: null,
                className: 'text-center', // Center content button
                render: function (data, type, row) {
                    return `<button type="button" class="btn btn-danger delete-button" data-url="${row.custom_url}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>`;
                }
            }
        ]
    });
}

function viewException(exeption){
    if (exeption){
        $(document).ready(function() {
            $('#exampleModal').modal('show');
          });
    } else { 
        $('#exampleModal').modal('hide');
    }
}

window.onload = function() {
    var id_shortcut_option_0_button = document.getElementById("id_shortcut_option_0");
    var id_shortcut_option_1_button = document.getElementById("id_shortcut_option_1");

    id_shortcut_option_0_button.addEventListener("change", detectRadioButtonSelected);
    id_shortcut_option_1_button.addEventListener("change", detectRadioButtonSelected);
    
    printTable();
}

$(document).on('click', '.delete-button', function() {
    var customUrl = $(this).data('url');
    console.log(customUrl)
    base_url = "http://localhost:8000/url/drop_custom_url"
    $.ajax({
        type: "POST",
        url: 'http://localhost:8000/url/drop_custom_url',
        data: {custom_url: customUrl},
        success: function(response) {
            $('#table').DataTable().destroy();
            printTable();
        },
        error: function(error) {
            // Manejar errores de la solicitud aquí
            console.error('Error al hacer la solicitud POST:', error);
            // Puedes manejar el error de alguna manera adecuada, como mostrar un mensaje al usuario
        }
    });
});
