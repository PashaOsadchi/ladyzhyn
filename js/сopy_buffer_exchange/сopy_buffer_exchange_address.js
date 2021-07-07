// Копіює адресу до буферу обміну
function сopy_buffer_exchange_address() {
    if (full_address_str == "") return open_dialog_error(error_text_1);

    copy_clipboard(full_address_str, error_text_1);
}
