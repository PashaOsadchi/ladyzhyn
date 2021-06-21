function close_iframe_video() {
    document.getElementById("iframe_video").style.display = 'none';

    document.getElementById("id_page_header").style.display = 'block';
    document.getElementById("map").style.display = 'block';
    document.getElementById("id_sidebar").style.display = 'block';
    document.getElementById("id_body").style.display = 'grid';
    document.getElementById("id_body").style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}