const jumpscare = document.getElementById("jumpscare");
function buttonPress(){
    if(jumpscare.style.visibility === "hidden") {
        jumpscare.style.visibility="visible"
    } else {
        jumpscare.style.visibility="hidden"
    }
}