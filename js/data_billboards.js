const data_billboards_arr = [
    {
        id: 1,
        name: "Білборд 3.5x4.5",
        detailed_information: `
        <b>Ширина (м):</b> 3.5<br>
        <b>Висота (м):</b> 4.5<br>
        <b>Площа (м²):</b> 15.75<br>
        <b>Використовуються сторони:</b> одна<br>
        `,
        latitude: 48.68345, 
        longitude: 29.23661,
    },
    {
        id: 2,
        name: "Білборд 6x3",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.68842, 
        longitude: 29.23911,
    },
    {
        id: 3,
        name: "Білборд 6x3",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.68504, 
        longitude: 29.23419,
    },
    {
        id: 4,
        name: "Білборд 6x3",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.68537, 
        longitude: 29.23524,
    },
    {
        id: 5,
        name: "Білборд 6x3",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.68131, 
        longitude: 29.26338,
    },
    {
        id: 6,
        name: "Білборд 6x3",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.68772, 
        longitude: 29.20717
    },
    {
        id: 7,
        name: "Білборд 6x3",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.69131, 
        longitude: 29.23268
    },
    {
        id: 8,
        name: "Білборд 6x6",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.68838,
        longitude: 29.27237,
    },
    {
        id: 9,
        name: "Білборд 2x2",
        detailed_information: `
        <b>Ширина (м):</b> 2<br>
        <b>Висота (м):</b> 2<br>
        <b>Площа (м²):</b> 4<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.6851, 
        longitude: 29.26825,
    },
    {
        id: 10,
        name: "Білборд 6x3",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.66577,
        longitude: 29.25744,
    },
    {
        id: 11,
        name: "Білборд x",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> одна<br>
        `,
        latitude: 48.66556, 
        longitude: 29.25744,
    },
    {
        id: 12,
        name: "Білборд 2x2",
        detailed_information: `
        <b>Ширина (м):</b> 2<br>
        <b>Висота (м):</b> 2<br>
        <b>Площа (м²):</b> 4<br>
        <b>Використовуються сторони:</b> одна<br>
        `,
        latitude: 48.65403, 
        longitude: 29.25734,
    },
    {
        id: 13,
        name: "Білборд 2x2",
        detailed_information: `
        <b>Ширина (м):</b> 2<br>
        <b>Висота (м):</b> 2<br>
        <b>Площа (м²):</b> 4<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.64578, 
        longitude: 29.25618,
    },
    {
        id: 14,
        name: "Білборд 1.5x1.5",
        detailed_information: `
        <b>Ширина (м):</b> 1.5<br>
        <b>Висота (м):</b> 1.5<br>
        <b>Площа (м²):</b> 2.25<br>
        <b>Використовуються сторони:</b> одна<br>
        `,
        latitude: 48.64621, 
        longitude: 29.25663,
    },
    {
        id: 15,
        name: "Білборд 6x3",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> дві<br>
        `,
        latitude: 48.64601, 
        longitude: 29.2566,
    },
    {
        id: 16,
        name: "Білборд 2x2",
        detailed_information: `
        <b>Ширина (м):</b> 2<br>
        <b>Висота (м):</b> 2<br>
        <b>Площа (м²):</b> 4<br>
        <b>Використовуються сторони:</b> одна<br>
        `,
        latitude: 48.64279, 
        longitude: 29.25579,
    },
    {
        id: 17,
        name: "Білборд 6x3",
        detailed_information: `
        <b>Ширина (м):</b> 6<br>
        <b>Висота (м):</b> 3<br>
        <b>Площа (м²):</b> 18<br>
        <b>Використовуються сторони:</b> одна<br>
        `,
        latitude: 48.63883, 
        longitude: 29.25496,
    },
];