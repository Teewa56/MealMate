const menuBtn = document.getElementById("menu_btn");
const sideBar = document.getElementById("side-nav");

menuBtn.addEventListener('click', ()=>{
    sideBar.style.width = "100%";
    menuBtn.style.display = "none";
})

document.getElementById("close").onclick=()=>{
    sideBar.style.width = "0%";
    menuBtn.style.display = "block";
}