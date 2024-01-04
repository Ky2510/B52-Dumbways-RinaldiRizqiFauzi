const myProjects = []

function postBlog(event) {
    event.preventDefault()
    const projectName = document.getElementById('name').value
    const description = document.getElementById('description').value
    const starDateInput = document.getElementById('star-date')
    const endDateInput = document.getElementById('end-date')
    const laravel = document.getElementById('laravel')
    const python = document.getElementById('python')
    const sass = document.getElementById('sass')
    const php = document.getElementById('php')
    const image = document.getElementById('image-file').files
    const linkImage = URL.createObjectURL(image[0])
    // getElementById khusus menggunakan id="" di element html sedangkan
    // querySelector mengambil element selain id="" (class, style, type dll)
    
    const d = new Date()
    const starDate = new Date(starDateInput.value)
    console.log(starDate)
    const endDate = new Date(endDateInput.value)
    const year = d.getFullYear()
    const perbedaanWaktu = endDate - starDate

    // hasil 1 hari / 24 jam jika dihitung milidetik = 86400000
    // console.log(perbedaanWaktu)
        
    // setiap detik memiliki 1000 milidetik
    // setiap menit memiliki 60 detik
    // setiap jam memiliki 60 menit
    // setiap hari memiliki 24 jam

    const perbedaanHari = perbedaanWaktu / (1000 * 60 * 60 * 24)
    // jika 1000 * 60 * 60 * 24 hasilnya 86400000
    // maka hasil dari perbedaanWaktu 86400000/86400000 = 1 hari

    let total
    let textDate
    if (perbedaanHari > 31) { //jika jumlah pembuatan lebih dari 31 maka
        total = Math.floor(perbedaanHari / 31) // jika lebih dari 31 => 1 // Math.floor mendekati angka terkecil
                                            // contoh jika hasilnya 1.7 maka masih tetap hasilnya 1 kecuali sudah
                                            // menyentuh angka 2
        textDate = "bulan" // text nya bulan
        console.log(`${total} ${textDate}`)
    }else{
        total = perbedaanHari
        textDate = "hari"
    }


    
    let iconTechnology = "";
    // += berfungsi menambahkan icon dalam variable iconTechnology yg stringnya "" (kosong)
    if (laravel.checked) {
        iconTechnology += `<i class="fa-brands fa-laravel"></i>`
    }else if(python.checked) {
        iconTechnology += `<i class="fa-brands fa-python"></i>`
    }else if(sass.checked) {
        iconTechnology += `<i class="fa-brands fa-sass"></i>`
    }else if(php.checked) {
        iconTechnology += `<i class="fa-brands fa-php"></i>`
    }

    console.log(iconTechnology)

    const myProject = {
        projectName : projectName,
        description : description,
        image : linkImage,
        year : year,
        perbedaanHari: perbedaanHari,
        textDate : textDate,
        total : total,
        iconTechnology : iconTechnology,
    } // array of object

    // looping technology
    // for (let index = 0; index < technology.length; index++) {
    //     const valueTechnology = technology[index].value
    //     myProject.technology.push(valueTechnology) // push:menarik nilai value ke array object (myProject)
    // }
    // console.log(technology)

    myProjects.unshift(myProject) // latest
    showMyProject() //memanggil function didalam function utama
    // console.log("myProjects", myProject)
}

function showMyProject() {
    let show = "<div style='margin-top:20px; display: flex; flex-wrap: wrap; gap:40px; flex-direction: row; justify-content: center;' >" // kode html dalam "" artinya tidak di looping
    for (let index = 0; index < myProjects.length; index++) {
        show += 
        `
            <div class="card" style="width: 26%; background-color: #fff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px; padding: 10px;">
                <img src="${myProjects[index].image}" alt="Foto" style="width: 100%; border-radius: 5px; height: 200px;">
                <div class="card-content">
                    <h4 style="margin-right: auto;">${myProjects[index].projectName} - ${myProjects[index].year}</h4>
                    <p style="margin-right: auto; font-size: 12px; color: gray;">Duration: ${myProjects[index].total} ${myProjects[index].textDate}</p>
                    <div class="description" style="margin-top: 15px;">
                        <p style="margin-right: auto; font-size: 14px;">${myProjects[index].description}</p>
                    </div>
                    <div class="icon-technology" style="display: flex; gap: 17px; margin-top: 15px; font-size: 25px;">
                       ${myProjects[index].iconTechnology}
                    </div>
                    <div class="button-action"style=" display: flex; gap: 7px; margin-top: 15px; " >
                        <a href="" style="width: 100%; border-radius: 7px; background-color: #111727; color: white;">edit</a>
                        <a href="" style="width: 100%; border-radius: 7px; background-color: #111727; color: white;">delete</a>
                    </div>
                </div>
            </div>
        `
    }
    show += "</div>"; // ini penutup yang tidak di looping

    document.getElementById("allProjects").innerHTML = show
}

showMyProject()