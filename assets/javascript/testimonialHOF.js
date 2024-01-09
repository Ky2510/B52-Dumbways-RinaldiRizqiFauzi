const datas = [
    {
        author: "Rinaldi Rizqi Fauzi",
        image: "https://e1.pxfuel.com/desktop-wallpaper/763/43/desktop-wallpaper-javascript-nodejs-thumbnail.jpg",
        title: "JavaScript",
        content: "Lorem Ipsum Dolor",
        rating: 1,
    },
    {
        author: "Rinaldi Rizqi Fauzi",
        image: "https://e0.pxfuel.com/wallpapers/280/885/desktop-wallpaper-typescript-thumbnail.jpg",
        title: "TypeScript",
        content: "Lorem Ipsum Dolor",
        rating: 2,
    },
    {
        author: "Rinaldi Rizqi Fauzi",
        image: "https://blog.appsignal.com/_next/image?url=%2Fimages%2Fblog%2F2023-02%2Fnode-tools.png&w=3840&q=50",
        title: "Node JS",
        content: "Lorem Ipsum Dolor",
        rating: 3,
    },
];

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
    const cariRating = datas.filter((val) => val.rating == rating)
    
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

    document.getElementById("card-content").innerHTML = sudahDiFilterHTML
}



DataMain()
