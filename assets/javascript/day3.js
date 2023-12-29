function submitData() {
    
}

function objectData() {
    let personOne = {
        "firstName" : "Number",
        "lastName" : "One",
        "age" : 25,
    }

    let personTwo = {
        "firstName" : "Number",
        "lastName" : "Two",
        "age" : 27,
    }

    document.getElementById('objectData').innerHTML = 
                personOne.firstName + " " +
                personOne.lastName + " is " +
                personOne.age + " years old. <br>" +
                personTwo.firstName + " " +
                personTwo.lastName + " is "  +
                personTwo.age + " years old. " 
}

function ifElse() {
    bilangan = -3
    console.log(bilangan)
    if(bilangan > 0){
        console.log("ini adalah bilangan positif")
    } else if(bilangan < 0){
        console.log("ini adalah bilangan negatif")
    } else {
        console.log("ini adalah bilangan 0")
    }
}

// function calculator() {
//     const bilanganSatu = 2
//     const bilanganDua = 4

//     const tambah = "+"

//     if (tambah == "+") {
//         console.log(bilanganSatu + bilanganDua)
//     }else if
//     // if (condition) {
        
//     // }
// }

objectData();
calculator();
ifElse();