find_organization_arr = [];

function find_organization() {
    // Визначає вибраний тип організації
    const select_organization_type_selectedIndex = document.getElementById('id_select_organization_type').selectedIndex;
    const select_organization_type_options = document.getElementById('id_select_organization_type').options;
    const select_value_organization_type = select_organization_type_options[select_organization_type_selectedIndex].value;
    const select_value_organization_type_text = select_organization_type_options[select_organization_type_selectedIndex].text;

    let str;
    id_input_organization.value != '' ? str = '1,' : str = '0,';
    select_value_organization_type != '' ? str += '1,' : str += '0,';
    id_chbox_all_find_organization.checked ? (str += "1") : (str += "0");

    switch (str) {
        // Вибрано одну організацію
        case '1,0,0':
            const organization_arr_1 = data_organization_arr.filter((e) => `${e.organization_id}. ${e.organization_type}: ${e.organization_name}` == id_input_organization.value);
            add_organization(organization_arr_1)
            break;
        // Вибрано тип організації
        case '0,1,0':
            const organization_arr_2 = data_organization_arr.filter((e) => e.organization_type == select_value_organization_type_text);
            add_organization(organization_arr_2);
            break;
        // вирано всі організації
        case '0,0,1':
            add_organization(data_organization_arr);
            break;
        case '0,0,0':
            open_dialog_error(error_text_27);
            break;
        default:
            open_dialog_error(error_text_28);
            break;
    }
}

function add_organization(arr) {

    find_organization_arr = arr; 
    
    // Очищає поля із детальною інформацією про організацію
    cleans_organization();

    // Очищає список із знайденими організаціями
    const select_found_organization = document.querySelector("#id_select_found_organization");
    select_found_organization.innerHTML = '<option value=""></option>';

    id_number_found_organization.value = `Знайдено організацій - ${arr.length}`;

    // Додає у список знайдених організацій
    for (let i = 0; i < arr.length; i++) {
        const name = `${arr[i].organization_id}. ${arr[i].organization_type}: ${arr[i].organization_name}`;
        o = new Option(name, arr[i].organization_id, false, false);
        select_found_organization.add(o);
    };
}

function onchange_organization() {
    // Визначає вибрану організацію
    const select_organization_selectedIndex = document.getElementById('id_select_found_organization').selectedIndex;
    const select_organization_options = document.getElementById('id_select_found_organization').options;
    const organization_code = select_organization_options[select_organization_selectedIndex].value;

    
    last_selected_data_organization_arr = data_organization_arr.filter((e) => e.organization_id == organization_code);

    const organization_arr = data_organization_arr.filter((e) => e.organization_id == organization_code);

    id_organization_type.value = organization_arr[0].organization_type;
    id_organization_name.value = organization_arr[0].organization_name;
    id_organization_monday.value = organization_arr[0].organization_monday;
    id_organization_tuesday.value = organization_arr[0].organization_tuesday;
    id_organization_wednesday.value = organization_arr[0].organization_wednesday;
    id_organization_thursday.value = organization_arr[0].organization_thursday;
    id_organization_friday.value = organization_arr[0].organization_friday;
    id_organization_saturday.value = organization_arr[0].organization_saturday;
    id_organization_sunday.value = organization_arr[0].organization_sunday;
    id_organization_address.value = organization_arr[0].organization_address;
    id_organization_note_address.value = organization_arr[0].organization_note_address;
}

// Очищає поля із детальною інформацією про організацію
function cleans_organization() {
    id_organization_type.value = '';
    id_organization_name.value = '';
    id_organization_monday.value = '';
    id_organization_tuesday.value = '';
    id_organization_wednesday.value = '';
    id_organization_thursday.value = '';
    id_organization_friday.value = '';
    id_organization_saturday.value = '';
    id_organization_sunday.value = '';
    id_organization_address.value = '';
    id_organization_note_address.value = '';
}