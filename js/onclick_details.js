function onclick_details(el) {
    document.getElementById("id_sidebar").childNodes.forEach((el_child_sidebar) => {
        if (el_child_sidebar.id !== undefined && el_child_sidebar.id !== el.id) {
            document.getElementById(el_child_sidebar.id).open = false;
        }
    });
}