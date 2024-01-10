function datas() {
    // Promise itu objek yang dapat 2 kondisi terpenuhi atau tidak terpenuhi dalam 
    // operasi asynchronous jika terpenuhi maka akan tampil datanya.
    // jika tidak terpenuhi maka akan mengeluarkan notifikasi gagal
    return new Promise((ditepati, diiingkari) => {
        const connection = new XMLHttpRequest() // XMLHttpRequest itu objek terhubung dengan server melalui request
        connection.open("GET", "https://api.npoint.io/a1643e1460e5119a3af8", true) // membuka server untuk mengambil data
        // dimana kode dibawah onload itu sebuah proses yang dapat di akses jika kondisi dipenuhi atau tidak
        connection.onload = () => {
            if (connection.status === 200) {
                const response = JSON.parse(connection.response)
                ditepati(response)
            } else {
                diiingkari('Error loading data')
            }
        }
        // validasi ketika data tidak terpenuhi
        connection.onerror = () => {
            diiingkari("Network Error!")
        }
        // pengiriman data
        connection.send()
    })
}

// membutuhkan waktu untuk menyelesaikan dalam pengambilan data di pengambilan data
async function DataMain() {
    const all = document.getElementById("rating-button")
    all.addEventListener("click", function() {
        location.reload();
    });
    
    // document.getElementById("card-content").innerHTML = "LOADING..."
    const contents = await datas()

    let contentHtml = ""
    let starContent

    contents.forEach((val) => {
        if (val.rating === 1) {
            starContent =  `
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                               `
        }else if(val.rating === 2){
            starContent =  `
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                `
        }else if(val.rating === 3){
            starContent =   `
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                `
        }else if(val.rating === 4){
            starContent =   `
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                `
        }else{
            starContent =   `
                                    <i class="fa-solid fa-star"></i>
                                `
        }
        contentHtml += `
                        <div class="card" style="display: flex; flex-direction: column;">
                            <img src="${val.image}" alt="Foto" class="image">
                            <div class="card-content">
                                <h4 class="card-text">${val.title} #${val.rating}
                                    <div id="star" style="display: flex;">
                                        ${starContent}
                                    </div>
                                </h4>
                                <div class="description">
                                    <p class="card-text" style="text-align: center">${val.content}</p>
                                </div>
                                <div class="card-footer" style=" display: flex; justify-content: space-between; align-items: flex-end;">
                                    <div class="author">
                                        ${val.author}
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        `
    })

    document.getElementById("card-content").innerHTML = contentHtml
}

async function FilterRating(rating) {
    // document.getElementById("card-content").innerHTML = "LOADING..."

    const contents = await datas()

    const all = document.getElementById('rating-button')
    const one = document.getElementById('rating-button-1')
    const two = document.getElementById('rating-button-2')
    const three = document.getElementById('rating-button-3')
    const four = document.getElementById('rating-button-4')

    
    const filteredTestimonial = contents.filter((value) => value.rating === rating)
    let star = ""
    if (rating == 1) {
        one.classList.add("active-rating")
        two.classList.remove("active-rating")
        three.classList.remove("active-rating")
        four.classList.remove("active-rating")
        all.classList.remove("active-rating")
        for (let value = 0; value < filteredTestimonial.length; value++) {
            star += `
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>    
                    `
        }
    }else if (rating == 2) {
        one.classList.remove("active-rating")
        two.classList.add("active-rating")
        three.classList.remove("active-rating")
        four.classList.remove("active-rating")
        for (let value = 0; value < filteredTestimonial.length; value++) {
            star += `
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    `
        }
    }else if (rating == 3) {
        one.classList.remove("active-rating")
        two.classList.remove("active-rating")
        three.classList.add("active-rating")
        four.classList.remove("active-rating")
        for (let value = 0; value < filteredTestimonial.length; value++) {
            star += `
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    `
        }
    }else if (rating == 4) {
        one.classList.remove("active-rating")
        two.classList.remove("active-rating")
        three.classList.remove("active-rating")
        four.classList.add("active-rating")
        for (let value = 0; value < filteredTestimonial.length; value++) {
            star += `
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    `
        }
    }else {
        one.classList.remove("active-rating")
        two.classList.remove("active-rating")
        three.classList.remove("active-rating")
        four.classList.remove("active-rating")
        for (let value = 0; value < filteredTestimonial.length; value++) {
            star += `
                    <i class="fa-solid fa-star"></i>
                    `
        }
    }

    if (!filteredTestimonial.length) {
        return document.getElementById("card-content").innerHTML = "<h3>Data tidak ditemukan</h3>"
    }
    
    let filteredTestimonialHTML = ""
     
    filteredTestimonial.forEach((val) => {
        filteredTestimonialHTML +=  `
                                    <div class="card" style="display: flex; flex-direction: column;">
                                        <img src="${val.image}" alt="Foto" class="image">
                                        <div class="card-content">
                                            <h4 class="card-text">${val.title} #${val.rating}
                                                <div id="star" style="display: flex;">
                                                    ${star}
                                                </div>
                                            </h4>
                                            <div class="description">
                                                <p class="card-text" style="text-align: center">${val.content}</p>
                                            </div>
                                            <div class="card-footer" style=" display: flex; justify-content: space-between; align-items: flex-end;">
                                                <div class="author">
                                                    ${val.author}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    `
    })


    document.getElementById("card-content").innerHTML = filteredTestimonialHTML

}

DataMain()