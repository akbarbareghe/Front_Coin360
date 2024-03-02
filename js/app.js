function hideTag() {
    var tagToHide = document.getElementById("banner");
    tagToHide.style.display = "none";

    var container_app = document.querySelector(".container-app");
    container_app.style.gridTemplateRows = "40px 50px auto";
}
var i=0;
function resizeDiv() {
    var container_cryptos = document.querySelector(".container-cryptos");
    var btn_hide = document.getElementById("btn_hide")
    if(i==0){
        container_cryptos.style.gridTemplateColumns = "98vw 1vw";
        btn_hide.textContent = "<";
        i=1;
    }
    else if(i==1){
        container_cryptos.style.gridTemplateColumns = "85vw 15vw";
        btn_hide.textContent = ">";
        i=0;
    }
    
}

