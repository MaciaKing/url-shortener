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
            { data: "url" }
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
