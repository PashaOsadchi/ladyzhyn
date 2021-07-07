//https://overcoder.net/q/2429/%D0%BA%D0%B0%D0%BA-%D0%BC%D0%BD%D0%B5-%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%B2-%D0%B1%D1%83%D1%84%D0%B5%D1%80-%D0%BE%D0%B1%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B2-javascript

// Копіює у буфер обміну посилання із кординатами останньої вибраної адреси
function сopy_buffer_exchange_link_coordinates_last_selected_address() {
    if (last_selected_address_obj.lat == 0 || last_selected_address_obj.lon == 0) return open_dialog_error(error_text_5);

    const text = `https://www.google.com/maps/search/?api=1&query=${last_selected_address_obj.lat}, ${last_selected_address_obj.lon}`;

    copy_clipboard(text, error_text_6);
}
