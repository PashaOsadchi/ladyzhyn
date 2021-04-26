function onclick_details(el) {
    document.getElementById("id_sidebar").childNodes.forEach((el_child_sidebar) => {
        if (el_child_sidebar.id !== undefined && el_child_sidebar.id !== el.id) {
            document.getElementById(el_child_sidebar.id).open = false;
        };
    });
};

function onclick_details_address(el) {
    ["id_details_human_settlement", "id_details_street", "id_details_house", "id_details_entrance"].forEach((el_child) => {
        if (el_child !== el.id) document.getElementById(el_child).open = false;
    });
};

function onclick_details_forms_list_search_commands(el) {
    ["id_details_commands_service_teams", "id_details_commands_address", "id_details_commands_types_organizations"].forEach((el_child) => {
        if (el_child !== el.id) document.getElementById(el_child).open = false;
    });
};

/* window.addEventListener("load", () => {
    document.getElementById("id_sidebar").childNodes.forEach((el_child_sidebar) => {
        if (el_child_sidebar.id !== undefined) {
            document.getElementById(el_child_sidebar.id).addEventListener("click", (event) => {
                document.getElementById("id_sidebar").childNodes.forEach((el_child_sidebar) => {
                    if (el_child_sidebar.id !== undefined && el_child_sidebar.id !== event.path[1].id) {
                        document.getElementById(el_child_sidebar.id).open = false;
                    }
                });
            });
        }
    });
}); */