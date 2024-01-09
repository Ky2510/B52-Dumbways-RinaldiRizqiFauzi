// const datas = [
//     {
//         author: "Rinaldi Rizqi Fauzi",
//         title: "JavaScript",
//         content: "Lorem Ipsum Dolor",
//         rating: 1,
//     },
//     {
//         author: "Rinaldi Rizqi Fauzi",
//         image: "https://e0.pxfuel.com/wallpapers/280/885/desktop-wallpaper-typescript-thumbnail.jpg",
//         title: "TypeScript",
//         content: "Lorem Ipsum Dolor",
//         rating: 2,
//     },
//     {
//         author: "Rinaldi Rizqi Fauzi",
//         image: "https://blog.appsignal.com/_next/image?url=%2Fimages%2Fblog%2F2023-02%2Fnode-tools.png&w=3840&q=50",
//         title: "Node JS",
//         content: "Lorem Ipsum Dolor",
//         rating: 3,
//     },
// ];

const datas = "https://mocki.io/v1/35ebc135-93ef-4d79-9f8a-c687128129f1"

fetch(datas)
  .then(response => response.json())
  .then(datas => {
    // Lakukan sesuatu dengan datas yang diperoleh
    console.log(datas);
  })
  .catch(error => {
    console.error("Error fetching data:", error)
  })


function DataMain() {
    let dataHTML = ""
    datas.forEach((val) => {
        dataHTML += `
                        <div class="card">
                            <img src="${val.image}" alt="Foto" class="image">
                            <div class="card-content">
                                <h4 class="card-text">${val.title} #${val.rating}</h4> 
                                <div class="description">
                                    <p class="card-text">${val.content}</p>
                                </div>
                                <div class="author">
                                    ${val.author}
                                </div>
                            </div>
                        </div>
                    `
    });
    
    document.getElementById("card-content").innerHTML = dataHTML;
}

function FilterRating(rating) {
    const all = document.getElementById('rating-button')
    const one = document.getElementById('rating-button-1')
    const two = document.getElementById('rating-button-2')
    const three = document.getElementById('rating-button-3')
    const four = document.getElementById('rating-button-4')
    const cariRating = datas.filter((val) => val.rating == rating)
    if (rating == 1) {
        one.classList.add("active-rating")
        two.classList.remove("active-rating")
        three.classList.remove("active-rating")
        four.classList.remove("active-rating")
    }else if (rating == 2) {
        one.classList.remove("active-rating")
        two.classList.add("active-rating")
        three.classList.remove("active-rating")
        four.classList.remove("active-rating")
    }else if (rating == 3) {
        one.classList.remove("active-rating")
        two.classList.remove("active-rating")
        three.classList.add("active-rating")
        four.classList.remove("active-rating")
    }else if (rating == 4) {
        one.classList.remove("active-rating")
        two.classList.remove("active-rating")
        three.classList.remove("active-rating")
        four.classList.add("active-rating")
    }else {
        one.classList.remove("active-rating")
        two.classList.remove("active-rating")
        three.classList.remove("active-rating")
        four.classList.remove("active-rating")
        all.classList.add("active-rating")
    }

    
    
    let sudahDiFilterHTML = ""
    cariRating.forEach((val) => {
        sudahDiFilterHTML += `
                                    <div class="card">
                                        <img src="${val.image}" alt="Foto" class="image">
                                        <div class="card-content">
                                            <h4 class="card-text">${val.title} #${val.rating}</h4> 
                                            <div class="description">
                                                <p class="card-text">${val.content}</p>
                                            </div>
                                            <div class="author">
                                                ${val.author}
                                            </div>
                                        </div>
                                    </div>
                                `
    })

    document.getElementById("card-content").innerHTML = sudahDiFilterHTML;
}



DataMain()
