// Формує перелік команд
function forms_list_search_commands() {
    // Перелік пошукових параметрів
    let list_search_parameters = `
    <details id="id_details_commands_service_teams" onclick="onclick_details_forms_list_search_commands(this)">
        <summary class="summary_first_forms_list_search_commands">Основні команди</summary>
    `;

    // Додає типовий перелік команд
    data_voice_search_commands_arr.forEach((el) => {
        list_search_parameters += `<button class="button_commands_service_teams" onclick="determines_type_search_command('${el.name}')">${el.name}</button>`;
    });

    list_search_parameters += `
    </details>
    <details id="id_details_commands_address" onclick="onclick_details_forms_list_search_commands(this)">
        <summary class="summary_next_forms_list_search_commands">Адреси</summary>
    `;

    // Додає назви населених пунктів
    data_human_settlement_arr.forEach((el) => {
        list_search_parameters += `<button class="button_commands_service_teams" onclick="determines_type_search_command('${el.human_settlement_name_voice_search}')">${el.human_settlement_name_voice_search}</button>`;
    });

    list_search_parameters += `
    </details>
    <details id="id_details_commands_types_organizations" onclick="onclick_details_forms_list_search_commands(this)">
        <summary class="summary_next_forms_list_search_commands">Типи організацій</summary>
    `;

    // Додає типи організацій
    data_organization_type_arr.forEach((el) => {
        list_search_parameters += `<button class="button_commands_service_teams" onclick="determines_type_search_command('${el.organization_type}', 'organization_type')">${el.organization_type}</button>`;
    });

    list_search_parameters += `
    </details>
    `;

    document.querySelector("#id_list_search_voice_commands").innerHTML = list_search_parameters;
}