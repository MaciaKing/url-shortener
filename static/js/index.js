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
}
