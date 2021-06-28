let document_fullscreen = false; 

// Закриває діалогове вікно із планом зонування при виході із повноекранного режиму (виправляє помлку коли пропадає background-color при виході із повноекранного режиму)
document.addEventListener("fullscreenchange", () => {

    if(document_fullscreen)  {
        setTimeout(() => {
            document_fullscreen = false;
            close_dialog_openseadragon_master_plan_map();
            close_dialog_scheme_engineering_thermal_networks_map();
        }, 0);

        return;
    }

    document_fullscreen = true; 
});