function open_dialog_error(str) {
    const dialog_error = document.getElementById("id_dialog_error");

    dialog_error.showModal();

    dialog_error.innerHTML = `
    <div id="dialog_header">
        <div id="dialog_error_header">Помилка</div>
        <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_error.close();"> 
    </div> 

    <div id="dialog_error_content">${str}</div>
    `;
}

document.onclick = (event) => {
    if (event.target.tagName == "DIALOG") {
        id_dialog_error.close();
        id_dialog_detailed_information.close();
        id_dialog_openseadragon_master_plan_map.close();
        id_dialog_circles_preloader.close();
        id_dialog_openseadragon_scheme_engineering_thermal_networks_map.close();
    }
};

function open_circles_preloader() {
    disable_scrolling();

    const circles_preloader = document.getElementById("id_dialog_circles_preloader");

    circles_preloader.showModal();

    circles_preloader.innerHTML = `
<div style="border: none !important" class="preloader">
    <div style="border: none !important"></div>
    <div style="border: none !important"></div>
    <div style="border: none !important"></div>
    <div style="border: none !important"></div>
    <div style="border: none !important"></div>
    <div style="border: none !important"></div>
    <div style="border: none !important"></div>
    <div style="border: none !important"></div>
    <div style="border: none !important"></div>
    <div style="border: none !important"></div>
</div>
    `;
}

// Блокує прокрутку сторінки
function disable_scrolling() {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
}
