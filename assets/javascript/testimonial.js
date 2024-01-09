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


const content1 = new ContentCard("https://e1.pxfuel.com/desktop-wallpaper/763/43/desktop-wallpaper-javascript-nodejs-thumbnail.jpg", "JavaScript", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum ante, tincidunt at diam at,", "Author 1")
const content2 = new ContentCard("https://e0.pxfuel.com/wallpapers/280/885/desktop-wallpaper-typescript-thumbnail.jpg", "TypeScript", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum ante, tincidunt at diam at,", "Author 2")
const content3 = new ContentCard("https://blog.appsignal.com/_next/image?url=%2Fimages%2Fblog%2F2023-02%2Fnode-tools.png&w=3840&q=50", "Node JS", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum ante, tincidunt at diam at,.", "Author 3")
const contents =  [content1,content2, content3]

let htmlContentCard = ""

for (let index = 0; index < contents.length; index++) {
    htmlContentCard += contents[index].cardContentHTML()    
}

document.getElementById("card-content").innerHTML = htmlContentCard
