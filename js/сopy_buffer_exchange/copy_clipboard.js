// Копіює текст до буферу обміну
function copy_clipboard(copy_text, error_text) {
    navigator.clipboard
        .writeText(copy_text)
        .then(() => {
            //Текст успішно скопійований
        })
        .catch((err) => open_dialog_error(`${error_text} (${err})`));
}
