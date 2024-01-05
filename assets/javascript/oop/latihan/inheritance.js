class ProgrammingLanguage {
    framework = true
    name = ""
    childrenName = ""
    rating = 0
}

class Javascript extends ProgrammingLanguage {
    name = "NodeJS"
    rating = 80
}

class Php extends ProgrammingLanguage {
    name = "Laravel"
    rating = 90
}

class ChildrenPhp extends Php {
    childrenName = "anak PHP"
    rating = 70
}

class ChildrenJavascript extends Javascript {
    childrenName = "anak Javascript"
    // jika rating tidak maka akan mengambil di class Javascript 
}

let outputChPHP = new ChildrenPhp()
console.log(outputChPHP)

let outputChJavascript = new ChildrenJavascript()
console.log(outputChJavascript)

//inheritance (Perwarisan)