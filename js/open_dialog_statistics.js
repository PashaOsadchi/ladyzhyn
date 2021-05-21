function open_dialog_statistics_information_registered_vehicles() {
    const photo_gallery_content = document.getElementById("photo_gallery_content");

    let str = `
        <div id="statistics_information_registered_vehicles">

        <table>
            <tr> 
                <th>Виробник</th>
                <th>Кількість</th>
            </tr>
    `;

    data_information_registered_vehicles_arr.forEach(
        (el) =>
            (str += `
    <tr> 
        <td>${el.producer}</td>
        <td>${el.number}</td>
    </tr>`)
    );

    photo_gallery_content.innerHTML = `${str} 
        </table> 
    </div>`;

    document.getElementById("id_page_header").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("id_sidebar").style.display = "none";
    document.getElementById("id_body").style.display = "block";
    document.getElementById("id_body").style.backgroundColor = "rgb(255, 255, 255)";

    document.getElementById("photo_gallery").style.display = "block";
}
