// Копіює у буфер обміну інформацію про останню вибрану організацію
function сopy_buffer_exchange_data_last_selected_organization() {
    if (last_selected_data_organization_arr.length == 0) return open_dialog_error(error_text_3);

    let organization_str = `
Назва: ${last_selected_data_organization_arr[0].organization_name}
Тип: ${last_selected_data_organization_arr[0].organization_type}
Адреса: ${last_selected_data_organization_arr[0].organization_address}`;

    if (last_selected_data_organization_arr[0].organization_note_address) organization_str += `Примітка до адреси: ${last_selected_data_organization_arr[0].organization_note_address}`;

    organization_str += `
Графік роботи
Понеділок: ${last_selected_data_organization_arr[0].organization_monday}
Вівторок: ${last_selected_data_organization_arr[0].organization_tuesday}
Середа: ${last_selected_data_organization_arr[0].organization_wednesday}
Четвер: ${last_selected_data_organization_arr[0].organization_thursday}
Пятниця: ${last_selected_data_organization_arr[0].organization_friday}
Субота: ${last_selected_data_organization_arr[0].organization_saturday}
Неділя: ${last_selected_data_organization_arr[0].organization_sunday}
`;

    navigator.clipboard
        .writeText(organization_str)
        .then(() => {
            //Текст успішно скопійований
        })
        .catch((err) => {
            open_dialog_error(`${error_text_4} (${err})`)
        });
    
}