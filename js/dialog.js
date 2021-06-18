function open_dialog_error(str) {
    document.getElementById("id_dialog_error").style.display = "flex";
    document.getElementById("dialog_error_data").innerHTML = str;
}

function close_dialog_error() {
    document.getElementById("id_dialog_error").style.display = "none";
}

function open_dialog_detailed_information() {
    document.getElementById("id_dialog_detailed_information").style.display = "flex";
}

function close_dialog_detailed_information() {
    document.getElementById("id_dialog_detailed_information").style.display = "none";
}

// План зонування м.Ладижина
function open_dialog_openseadragon_master_plan_map() {
    document.getElementById("id_dialog_openseadragon_master_plan_map").style.display = "flex";
}

function close_dialog_openseadragon_master_plan_map() {
    document.getElementById("id_dialog_openseadragon_master_plan_map").style.display = "none";
}

// Схема теплових та інженерних мереж м.Ладижина
function open_dialog_scheme_engineering_thermal_networks_map() {
    document.getElementById("id_dialog_openseadragon_scheme_engineering_thermal_networks_map").style.display = "flex";
}

function close_dialog_scheme_engineering_thermal_networks_map() {
    document.getElementById("id_dialog_openseadragon_scheme_engineering_thermal_networks_map").style.display = "none";
}

function open_circles_preloader() {
    disable_scrolling();
    document.getElementById("id_dialog_circles_preloader").style.display = "flex";
}

function close_circles_preloader() {
    document.getElementById("id_dialog_circles_preloader").style.display = "none";
}

// Закриває усі діалоги
document.onclick = (event) => {
    if (event.target.className == "dialog") {
        close_dialog_error();
        close_dialog_detailed_information();
        close_dialog_openseadragon_master_plan_map();
        close_dialog_scheme_engineering_thermal_networks_map();
        close_circles_preloader();
    }
};

// Блокує прокрутку сторінки
function disable_scrolling() {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
}
