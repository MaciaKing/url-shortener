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

window.onload = function() {
    var id_shortcut_option_0_button = document.getElementById("id_shortcut_option_0");
    var id_shortcut_option_1_button = document.getElementById("id_shortcut_option_1");

    id_shortcut_option_0_button.addEventListener("change", detectRadioButtonSelected);
    id_shortcut_option_1_button.addEventListener("change", detectRadioButtonSelected);
    createDataTable();
}


function createDataTable(){
    const data = [
        {
            'url': 'https://chatgpt.com/c/60893c8e-53c6-40c5-94cd-76bbc2f0d2cc',
            'custom_url': 'pyrz'
        },
        {
            'url': 'https://chatgpt.com/c/60893c8e-53c6-40c5-94cd-76bbc2f0d2cc',
            'custom_url': 'uoud'
        },
        {
            'url': 'https://chatgpt.com/c/60893c8e-53c6-40c5-94cd-76bbc2f0d2cc',
            'custom_url': 'bhbr'
        }
    ];
    // Initialize DataTable
    $('#example').DataTable({
        data: data,
        columns: [
            { data: 'url' },
            { data: 'custom_url' }
        ]
    });
}
