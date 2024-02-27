function hideTag() {
    var tagToHide = document.getElementById("banner");
    tagToHide.style.display = "none";

    var container_app = document.querySelector(".container-app");
    container_app.style.gridTemplateRows = "40px 50px auto";
}

