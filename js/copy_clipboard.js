// Копіює у буфер обміну детальну інформацію про вибрану адресу
function copy_clipboard(data, text_error) {
    if (data) return open_dialog_error(`${error_text_15} ${text_error}!`);

    navigator.clipboard
        .writeText(data)
        .then(() => {
            //Текст успішно скопійований
        })
        .catch((err) => {
            open_dialog_error(`${error_text_16} (${err})`);
        });
    
}