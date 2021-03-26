function open_dialog_error(str) {
    const dialog_error = document.getElementById('id_dialog_error');

    dialog_error.showModal();

    dialog_error.innerHTML = `
    <div>
        <div id="dialog_error_header">Помилка</div>
        <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_error.close();"> 
    </div> 

    <div class="dialog_value">${str}</div>
    `;
}

document.onclick = (event) => {
    if (event.target.tagName == 'DIALOG') {
        id_dialog_error.close();
        id_dialog_detailed_information.close();
        id_dialog_openseadragon_master_plan_map.close();
        id_dialog_circles_preloader.close();
        id_dialog_search.close();
    }
};

function open_circles_preloader() {
    disable_scrolling();

    const circles_preloader = document.getElementById('id_dialog_circles_preloader');

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
};

function open_dialog_search() {
    const dialog_error = document.getElementById('id_dialog_search');

    dialog_error.showModal();

    dialog_error.innerHTML = `
    <div>
        <div id="dialog_search_header">Пошук</div>
        <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_search.close();"> 
    </div>
    <div id="id_block_search">
        <input type="text" list="id_datalist_search" id="id_input_search">

        <datalist id="id_datalist_search" style="height:5.1em;overflow:hidden" >
            <option id="id_option_datalist_search"></option>
        </datalist>

        <button id="id_button_search" onclick="search()">
            <img height="26" width="26" id="icon_dialog_search" src="icon/search.png"> 
        </button>
    </div>
    `;

    add_datalist_search();
}

// Блокує прокрутку сторінки
function disable_scrolling() {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
}