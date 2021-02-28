// Копіює у буфер обміну посилання із кординатами останньої вибраної організації
function сopy_buffer_exchange_link_coordinates_last_selected_organization() {
    if (last_selected_data_organization_arr.length == 0) return open_dialog_error(error_text_7);
    if (last_selected_data_organization_arr[0].organization_latitude == '' || last_selected_data_organization_arr[0].organization_longitude == '') return open_dialog_error(error_text_8);

    const text = `https://www.google.com/maps/search/?api=1&query=${last_selected_data_organization_arr[0].organization_latitude}, ${last_selected_data_organization_arr[0].organization_longitude}`;

    navigator.clipboard
        .writeText(text)
        .then(() => {
            //Текст успішно скопійований
        })
        .catch((err) => {
            open_dialog_error(`${error_text_9} (${err})`)
        });
}