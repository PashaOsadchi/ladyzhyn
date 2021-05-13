/* const sponsors_arr = [
    {
        id: 1,
        name: 'Із пропозиціями щодо участі у проекті звертатися до Осадчого П.',
        phone: [
            {
                text: '098-97-111-30',
                number: '+380989711130'
            }
        ],
    },
    {
        id: 2,
        name: 'Дякуємо за підтримку депутату Ладижинської МР адвокату Бодачевському Р.',
        phone: [
            {
                text: '097-610-01-20',
                number: '+380976100120'
            },
            {
                text: '096-113-06-07',
                number: '+380961130607'
            }
        ],
    },
    {
        id: 3,
        name: 'Дякуємо за підтримку ФОП Бодачевському К. (ремонт, продаж, обслуговування комп. та офісної техніки)',
        phone: [
            {
                text: '067-139-56-97',
                number: '+380671395697'
            },
            {
                text: '093-264-11-90',
                number: '+380932641190'
            }
        ],
    },
]

let counter_sponsors = 1;

setInterval(() => {
    if (sponsors_arr.length == counter_sponsors) counter_sponsors = 0;
    document.getElementById('id_page_footer').innerHTML = generate_message_sponsors(counter_sponsors);
    counter_sponsors += 1;
}, 10000);

document.addEventListener("DOMContentLoaded",() => {document.getElementById('id_page_footer').innerHTML = generate_message_sponsors(0);}, true);

function generate_message_sponsors(i) {
    let phone_text = '';

    sponsors_arr[i].phone.forEach((el) => {
        phone_text += `<a href="tel:${el.number}">${el.text}</a> `;
    });

    return `${sponsors_arr[i].name} ${phone_text}`;
}
 */

