class Content {
    // property
    title = ""
    description = ""
    subTitle = ""

    // constructor itu untuk menginisialisasi properti yang ada didalamnya 
    // pada objek yang akan dibuat dari kelas 
    constructor(valTitle, valDescription) {
        this.title = valTitle
        this.description = valDescription
    }

}

// Main Content
class MainContent extends Content {
    htmlMainContent() // Kata Kerja (method)
    {
        return  `
                    <h4>${this.title}</h4>
                    ${this.description}
                `
    } 
}

class Duration extends Content {
    constructor(valSubtitle,valRangeDate,valDistance) {
        super() // memanggil constructor kelas induk (Content)
        this.rangeDate = valRangeDate
        this.subTitle = valSubtitle
        this.distance = valDistance
    }
    htmlDuration() 
    {
        return  `
                    <p class="mini-subtitle">${this.subTitle}</p>
                    <div class="content">
                        <p><i class="fa-solid fa-calendar-days fa-2x"></i></p>
                        <p style="font-size: 15px; color: #6f6a6b;">${this.rangeDate}</p>
                    </div>
                    <div class="content">
                        <p><i class="fa-solid fa-clock fa-2x"></i></p>
                        <p style="font-size: 15px; color: #6f6a6b;">${this.distance}</p>
                    </div>
                `
    }
}

class Technology extends Content {
    constructor(valSubtitle, valName){
        super()
        this.subTitle = valSubtitle
        this.name = valName
    }

    htmlTechnology() 
    {
        return  `
                    <div class="content">
                        <p>
                            <i class="fa-brands fa-${this.name} fa-2x"></i>
                        </p>
                        <p>${this.subTitle}</p>
                    </div>
                `
    }
}


// memanggil class untuk mendapatkan value
// MainContent
const mainContent1 = new MainContent("Title First", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit neque, facilisis porta ornare sed, tristique id sapien. Fusce venenatis felis ut leo ornare, in consequat odio rhoncus. Etiam et nulla a enim varius accumsan eget elementum erat. Praesent urna arcu, tincidunt eget dui et, porttitor tincidunt lacus. Vestibulum id quam vitae velit tempus molestie. Fusce libero magna, pellentesque eu egestas ut, fermentum quis mauris. Nunc congue lorem nulla, et fringilla risus convallis sed. Vivamus interdum turpis nulla, ac venenatis augue pretium a. Integer porttitor molestie sapien. Sed mi lorem, vestibulum quis ipsum in, pretium molestie nibh. Nulla vel enim in augue efficitur viverra. Proin aliquam consectetur purus quis auctor. S")
const mainContent2 = new MainContent("Title Second", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit neque, facilisis porta ornare sed, tristique id sapien. Fusce venenatis felis ut leo ornare, in consequat odio rhoncus. Etiam et nulla a enim varius accumsan eget elementum erat. Praesent urna arcu, tincidunt eget dui et, porttitor tincidunt lacus. Vestibulum id quam vitae velit tempus molestie. Fusce libero magna, pellentesque eu egestas ut, fermentum quis mauris. Nunc congue lorem nulla, et fringilla risus convallis sed. Vivamus interdum turpis nulla, ac venenatis augue pretium a. Integer porttitor molestie sapien. Sed mi lorem, vestibulum quis ipsum in, pretium molestie nibh. Nulla vel enim in augue efficitur viverra. Proin aliquam consectetur purus quis auctor. S")
const mainContent3 = new MainContent("Title Third", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit neque, facilisis porta ornare sed, tristique id sapien. Fusce venenatis felis ut leo ornare, in consequat odio rhoncus. Etiam et nulla a enim varius accumsan eget elementum erat. Praesent urna arcu, tincidunt eget dui et, porttitor tincidunt lacus. Vestibulum id quam vitae velit tempus molestie. Fusce libero magna, pellentesque eu egestas ut, fermentum quis mauris. Nunc congue lorem nulla, et fringilla risus convallis sed. Vivamus interdum turpis nulla, ac venenatis augue pretium a. Integer porttitor molestie sapien. Sed mi lorem, vestibulum quis ipsum in, pretium molestie nibh. Nulla vel enim in augue efficitur viverra. Proin aliquam consectetur purus quis auctor. S")
const mainContents = [mainContent1, mainContent2, mainContent3]
// SideContent
const duration1 = new Duration("Duration", "12 Jan 2024 - 11 Feb 2024", "1 Month")
const durations = [duration1]

const technology1 = new Technology("Laravel", "laravel")
const technology2 = new Technology("Python", "python")
const technology3 = new Technology("Sass", "sass")
const technology4 = new Technology("PHP", "php")
const technologies = [technology1, technology2, technology3, technology4]


// looping
let outputMainContent = ""
for (let index = 0; index < mainContents.length; index++) {
    outputMainContent += mainContents[index].htmlMainContent()
}
document.getElementById("mainContents").innerHTML = outputMainContent

let outputDuration = ""
for (let index = 0; index < durations.length; index++) {
    outputDuration += durations[index].htmlDuration()
}
document.getElementById("durations").innerHTML = outputDuration;

let outputTechnology = ""
for (let index = 0; index < technologies.length; index++) {
    outputTechnology += technologies[index].htmlTechnology()
}
document.getElementById("technologies").innerHTML = outputTechnology

