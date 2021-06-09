let document_fullscreen = false; 

// Закриває діалогове вікно із планом зонування при виході із повноекранного режиму (виправляє помлку коли пропадає background-color при виході із повноекранного режиму)
document.addEventListener("fullscreenchange", function(e){

    if(document_fullscreen)  {
        setTimeout(() => {
            document_fullscreen = false;
            id_dialog_openseadragon_master_plan_map.close();
            id_dialog_openseadragon_scheme_engineering_thermal_networks_map.close();
        }, 0);

        return;
    }

    document_fullscreen = true; 
});