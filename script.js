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
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}