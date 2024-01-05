class Content {
    title = ""

    constructor(valTitle) {
        this.title = valTitle
    }

}

class TitleContent extends Content {
    htmlContent()
    {
        return  `
                    <h4>${this.title}</h4>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam esse, eius praesentium obcaecati, 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam esse, eius praesentium obcaecati, 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam esse, eius praesentium obcaecati, 
                `
    } 
}

const content1 = new TitleContent("Title First")
const content2 = new TitleContent("Title Second")
const content3 = new TitleContent("Title Third")

const contents = [content1, content2, content3]

let outputTitle = ""
for (let index = 0; index < contents.length; index++) {
    outputTitle += contents[index].htmlContent();
}

document.getElementById("contents").innerHTML = outputTitle;