const myProjects = []

function postBlog(event) {
    event.preventDefault()
    const projectName = document.getElementById('name').value
    const description = document.getElementById('description').value;
    const starDateInput = document.getElementById('star-date')
    const endDateInput = document.getElementById('end-date')
    const technology = document.querySelectorAll('.checkbox-style:checked'); //menggunakan class
    // Perbedaan antara getElementById dan QuerySelector
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

    const perbedaanHari = perbedaanWaktu / (1000 * 60 * 60 * 24);
    // jika 1000 * 60 * 60 * 24 hasilnya 86400000
    // maka hasil dari perbedaanWaktu 86400000/86400000 = 1 hari

    const myProject = {
        projectName : projectName,
        description : description,
        technology : []
    }

    for (let index = 0; index < technology.length; index++) {
        const valueTechnology = technology[index].value
        myProject.technology.push(valueTechnology)
    }
    console.log(technology)

    myProjects.unshift(myProject)
    showMyProject()
    console.log("myProjects", myProject)
}

function showMyProject() {
    let show = ''
    for (let index = 0; index < myProjects.length; index++) {
        show += 
        `
            <ul>
                <li>${myProjects[index].projectName}</li>
                <li>${myProjects[index].description}</li>
                <li>
                    <ol type="1">
                        <ul>${myProjects[index].technology}</ul>
                    </ol>
                </li>
            </ul>
            <br>
        `
    }

    document.getElementById("allProjects").innerHTML = show
}

showMyProject()