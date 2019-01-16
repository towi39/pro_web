var myVar
function myFunction() {
    myVar=setTimeout(showPage, 3000);
}
function showLoading(){
    document.getElementById("loading").style.display = "none";
}
function showPage(){
    $("#loading").slideUp();
}