function view_video_1() {
    const ratio_parties = 560 / 280; // 395;
    const ratio_parties_2 = 560 / 280;

    let width = 1000;

    if (window.innerWidth < 1000) width = window.innerWidth;

    let height_2 = width / ratio_parties;

    let height_1 = width / ratio_parties_2;

    document.getElementById("iframe_video_content").innerHTML = `
    <div class="iframe_video">
        <iframe src="https://www.facebook.com/plugins/video.php?height=${height_1}&href=https%3A%2F%2Fwww.facebook.com%2Fosadchyi.p%2Fvideos%2F1838327683015610%2F&show_text=false&width=${width}&t=0" width="${width}" height="${height_2}" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        
        <iframe src="https://www.facebook.com/plugins/video.php?height=${height_1}&href=https%3A%2F%2Fwww.facebook.com%2Fosadchyi.p%2Fvideos%2F1838336223014756%2F&show_text=false&width=${width}&t=0" width="${width}" height="${height_2}" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

        <iframe src="https://www.facebook.com/plugins/video.php?height=${height_1}&href=https%3A%2F%2Fwww.facebook.com%2Fosadchyi.p%2Fvideos%2F1838343079680737%2F&show_text=false&width=${width}&t=0" width="${width}" height="${height_2}" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

        <iframe src="https://www.facebook.com/plugins/video.php?height=${height_1}&href=https%3A%2F%2Fwww.facebook.com%2Fosadchyi.p%2Fvideos%2F1838353019679743%2F&show_text=false&width=${width}&t=0" width="${width}" height="${height_2}" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
    
    </div>`;

    setTimeout(() => {
        document.getElementById("id_page_header").style.display = "none";
        document.getElementById("map").style.display = "none";
        document.getElementById("id_sidebar").style.display = "none";
        document.getElementById("id_body").style.display = "block";
        document.getElementById("id_body").style.backgroundColor = "rgb(255, 255, 255)";

        document.getElementById("iframe_video").style.display = "block";
    }, 100);
}
