class Card {
    constructor(image, title, description, author){
        this.image       = image
        this.title       = title
        this.description = description
        this.author      = author
    }
}

class ContentCard extends Card {
    cardContentHTML() {
        return `
                    <div class="card">
                        <img src="${this.image}" alt="Foto" class="image">
                        <div class="card-content">
                            <h4 class="card-text">${this.title}</h4>
                            <div class="description">
                                <p class="card-text">${this.description}</p>
                            </div>
                            <div class="author">
                                ${this.author}
                            </div>
                        </div>
                    </div>
                `
    }   
}


const content1 = new ContentCard("https://media.istockphoto.com/id/1316449291/id/foto/word-laravel-di-atas-kertas-dan-laptop.jpg?b=1&s=612x612&w=0&k=20&c=l7A6rEE-tgS96lTSWY8uJnN1FCnUpibw-Tn7tt_LBTU=", "Laravel Framework", "Laravel adalah kerangka kerja aplikasi web berbasis PHP yang sumber terbuka, menggunakan konsep Model-View-Controller. Laravel berada dibawah lisensi MIT, dengan menggunakan GitHub sebagai tempat berbagi kode.", "Author 1")
const content2 = new ContentCard("https://media.istockphoto.com/id/1316449291/id/foto/word-laravel-di-atas-kertas-dan-laptop.jpg?b=1&s=612x612&w=0&k=20&c=l7A6rEE-tgS96lTSWY8uJnN1FCnUpibw-Tn7tt_LBTU=", "Laravel Framework", "Laravel adalah kerangka kerja aplikasi web berbasis PHP yang sumber terbuka, menggunakan konsep Model-View-Controller. Laravel berada dibawah lisensi MI T, dengan menggunakan GitHub sebagai tempat berbagi kode.", "Author 2")
const content3 = new ContentCard("https://media.istockphoto.com/id/1316449291/id/foto/word-laravel-di-atas-kertas-dan-laptop.jpg?b=1&s=612x612&w=0&k=20&c=l7A6rEE-tgS96lTSWY8uJnN1FCnUpibw-Tn7tt_LBTU=", "Laravel Framework", "Laravel adalah kerangka kerja aplikasi web berbasis PHP yang sumber terbuka, menggunakan konsep Model-View-Controller. Laravel berada dibawah lisensi MIT, dengan menggunakan GitHub sebagai tempat berbagi kode.", "Author 3")
const content4 = new ContentCard("https://media.istockphoto.com/id/1316449291/id/foto/word-laravel-di-atas-kertas-dan-laptop.jpg?b=1&s=612x612&w=0&k=20&c=l7A6rEE-tgS96lTSWY8uJnN1FCnUpibw-Tn7tt_LBTU=", "Laravel Framework", "Laravel adalah kerangka kerja aplikasi web berbasis PHP yang sumber terbuka, menggunakan konsep Model-View-Controller. Laravel berada dibawah lisensi MIT, dengan menggunakan GitHub sebagai tempat berbagi kode.", "Author 4")
const contents =  [content1,content2, content3, content4]

let htmlContentCard = ""

for (let index = 0; index < contents.length; index++) {
    htmlContentCard += contents[index].cardContentHTML()    
}

document.getElementById("card-content").innerHTML = htmlContentCard
