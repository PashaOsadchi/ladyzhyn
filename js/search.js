function event_value_search_field_changes() {
    // Перелік пошукових параметрів
    let list_search_parameters = "";

    // Якщо в поле для пошук ведено більше одного символа
    if (id_input_search.value.length > 2) {
        // Додає типовий перелік команд
        list_search_parameters = adding_selecting_found(data_voice_search_commands_arr, "name");

        // Додає назви населених пунктів
        list_search_parameters += adding_selecting_found(data_human_settlement_arr, "human_settlement_name_voice_search");

        // Додає типи організацій
        list_search_parameters += adding_selecting_found(data_organization_type_arr, "organization_type");

        if (list_search_parameters == "") {
            document.querySelector("#id_list_search_parameters").innerHTML = '<div id="id_div_search_nothing_found">На жаль, за вашим запитом нічого не знайдено</div>';
        } else {
            document.querySelector("#id_list_search_parameters").innerHTML = list_search_parameters;
        }
    } else {
        document.querySelector("#id_list_search_parameters").innerHTML = '';
    }
};

function adding_selecting_found(arr, field_name) {
    let list_search_parameters = "";

    arr.forEach((el) => {
        const reg = new RegExp(id_input_search.value, "i");

        if (reg.test(el[field_name])) {
            const result_arr = el[field_name].match(reg);
            const name = el[field_name].replace(result_arr[0], `<span>${result_arr[0]}</span>`);
            list_search_parameters += `<button class="button_found_search_parameters"  onclick="determines_type_search_command('${el[field_name]}')">${name}</button>`;
        }
    });

    return list_search_parameters;
};