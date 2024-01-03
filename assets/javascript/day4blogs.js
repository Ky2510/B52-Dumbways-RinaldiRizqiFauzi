const myProjects = []

function postBlog(event) {
    event.preventDefault()
    const projectName = document.getElementById('name').value
    const description = document.getElementById('description').value
    const starDateInput = document.getElementById('star-date')
    const endDateInput = document.getElementById('end-date')
    const laravel = document.getElementById('laravel')
    const python = document.getElementById('python')
    const django = document.getElementById('django')
    const c = document.getElementById('c++')
    const image = document.getElementById('image-file').files
    const linkImage = URL.createObjectURL(image[0])
    console.log(linkImage)
    // getElementById khusus menggunakan id="" di element html sedangkan
    // querySelector mengambil element selain id="" (class, style, type dll)

    const starDate = new Date(starDateInput.value)
    const endDate = new Date(endDateInput.value)

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

    let iconTechnology = "";

    if (laravel.checked) {
        iconTechnology += `<i class="fa-brands fa-laravel"></i>`
    }
    if(python.checked) {
        iconTechnology += `<i class="fa-brands fa-python"></i>`
    }

    console.log(iconTechnology)

    const myProject = {
        projectName : projectName,
        description : description,
        rangeDay : perbedaanHari,
        image : linkImage,
        iconTechnology : iconTechnology
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
    let show = "<div style='display: flex;  flex-wrap: wrap; gap:40px; flex-direction: row; justify-content: center'>" // kode html dalam "" artinya tidak di looping
    for (let index = 0; index < myProjects.length; index++) {
        show += 
        `
            <div class="card" style="width: 26%; background-color: #fff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px; padding: 10px;">
                <img src="${myProjects[index].image}" alt="Foto" style="width: 100%; border-radius: 5px; height: 200px;">
                <div class="card-content">
                    <h4 style="margin-right: auto;">${myProjects[index].projectName} - Tahun</h4>
                    <p style="margin-right: auto; font-size: 12px; color: gray;">Duration: 3 bulan</p>
                    <div class="description" style="margin-top: 15px;">
                        <p style="margin-right: auto; font-size: 14px;">${myProjects[index].description}</p>
                    </div>
                    <div class="icon-technology" style="display: flex; gap: 17px; margin-top: 15px; font-size: 25px;">
                       ${myProjects[index].iconTechnology}
                    </div>
                    <div class="button-action"style=" display: flex; gap: 7px; margin-top: 15px; " >
                        <button style="width: 100%; border-radius: 7px; background-color: blue; color: white;">edit</button>
                        <button style="width: 100%; border-radius: 7px; background-color: blue; color: white;">delete</button>
                    </div>
                </div>
            </div>
        `
    }
    show += "</div>"; // ini penutup yang tidak di looping

    document.getElementById("allProjects").innerHTML = show
}

showMyProject()