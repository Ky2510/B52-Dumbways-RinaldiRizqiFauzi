function submitData() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    if (name == "") {
        return alert("Nama wajib diisi")
    }else if (email == ""){
        return alert("Email wajib diisi")
    }else if (phoneNumber == ""){
        return alert("Nomor Hp wajib diisi")
    }else if (subject == ""){
        return alert("Subjek wajib diisi")
    }else if (message == ""){
        return alert("Pesan wajib diisi")
    }

    // mailto:rinaldirizqifauzi@gmail.com?subject=Fullstack%20Developer&body=Halo%20Bang
    const link = `mailto:${email}?subject=${subject}&body=${'My Name: ' + name + ' %0DPhone Number: ' + phoneNumber + ' %0D' + message   }`
    window.location.href = link;
    // console.log(name);
    // console.log(email);
    // console.log(phoneNumber);
    // console.log(subject);
    // console.log(message);


}
