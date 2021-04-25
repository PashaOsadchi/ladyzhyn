// Формує перелік команд
function forms_list_search_voice_commands() {
    // Перелік пошукових параметрів
    let list_search_parameters = "";

    // Додає типовий перелік команд
    data_voice_search_commands_arr.forEach((el) => {
        list_search_parameters += `<div onclick="determines_type_search_command('${el.name}')">${el.name}</div>`;
    });

    // Додає назви населених пунктів
    data_human_settlement_arr.forEach((el) => {
        list_search_parameters += `<div onclick="determines_type_search_command('${el.human_settlement_name_voice_search}')">${el.human_settlement_name_voice_search}</div>`;
    });

    // Додає типи організацій
    data_organization_type_arr.forEach((el) => {
        list_search_parameters += `<div onclick="determines_type_search_command('${el.organization_type}')">${el.organization_type}</div>`;
    });

    document.querySelector("#id_list_search_voice_commands").innerHTML = list_search_parameters;
}