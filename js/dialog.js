function open_dialog_error(str) {
    const dialog_error = document.getElementById('id_dialog_error');

    dialog_error.showModal();

    dialog_error.innerHTML = `
    <div id="dialog_error_header">Помилка!</div>
    <div id="dialog_error_content">${str}</div>
    `;
}

document.onclick = (event) => {
    if (event.target.tagName == 'DIALOG') {
        id_dialog_error.close();
        id_dialog_detailed_information.close();
        id_dialog_openseadragon_master_plan_map.close();
    }
};
