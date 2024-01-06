function burgerResponsive() {
    const addCss = document.getElementById("myLinks");
    if (addCss.style.display === "block") {
      addCss.style.display = "none";
    } else {
      addCss.style.display = "block";
    }
}