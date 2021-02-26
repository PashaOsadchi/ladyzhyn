// Копіює адресу до буферу обміну
function сopy_buffer_exchange_address() {
    if (full_address_str == "") return open_dialog_error(error_text_1);

    navigator.clipboard
        .writeText(full_address_str)
        .then(() => {
            //Текст успішно скопійований
        })
        .catch((err) => {
            open_dialog_error(`${error_text_1} (${err})`);
        });
}
