function search() {
    if (id_input_search.value == '') return document.querySelector('#id_search_error_message').innerHTML = 'Введіть значення для пошуку!';
    
    determines_type_voice_command(id_input_search.value);
}


function add_datalist_search() {

    // Додає назви населених пунктів у даталіст
    for (i = 0; i < data_human_settlement_arr.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", data_human_settlement_arr[i].human_settlement_name_voice_search);
        document.getElementById("id_datalist_search").appendChild(option);
    }

    // Додає назви вулиць у даталіст
    /* for (i = 0; i < data_street_arr.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", data_street_arr[i].street_voice_search);
        document.getElementById("id_datalist_search").appendChild(option);
    } */

    // Додає типи організацій у даталіст
    for (i_1 = 0; i_1 < data_organization_type_arr.length; i_1++) {
        for (i_2 = 0; i_2 < data_organization_type_arr[i_1].voice_search.length; i_2++) {
            const option = document.createElement("option");
            option.setAttribute("value", data_organization_type_arr[i_1].voice_search[i_2]);
            document.getElementById("id_datalist_search").appendChild(option);
        }
    }
}