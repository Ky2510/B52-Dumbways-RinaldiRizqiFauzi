const starDate = new Date(starDateInput.value);

const namaBulan = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const dateMonthIndex= []
const bulanIndeks = starDate.getMonth();
const namaBulanString = namaBulan[bulanIndeks];

if (namaBulanString == "Januari") {
    for (let index = 0; index < 32; index++) {
        console.log(dateMonthIndex.push(index))
    }
}
if (namaBulanString == "Februari") {
    for (let index = 0; index < 29; index++) {
        console.log(dateMonthIndex.push(index))
    }
}