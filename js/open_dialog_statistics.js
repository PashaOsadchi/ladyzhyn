function open_dialog_statistics_information_registered_vehicles() {
    const statistics = document.getElementById("id_dialog_statistics");

    statistics.showModal();

    let str = `
        <div>
             <div id="dialog_statistics_header">Інформація про зареєстровані <br>транспортні засоби у м.Ладижин</div>
            <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_statistics.close()"> 
        </div> 

        <div id="dialog_statistics_content">

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

    statistics.innerHTML = `${str} 
        </table> 
    </div>`;
}
