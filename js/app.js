// DOM=>DOCUMENT OBJECT MODEL
function init() {
    const hamburger=document.querySelector(".hamburger");
const sidebarContainer=document.querySelector(".sidebar-container");
const sidebarCloseButton=document.querySelector(".close-button");


const openSidebar=()=>{
    sidebarContainer.classList.add("show-sidebar")
    // console.log(sidebarContainer.classList);
}
const closeSidebar=()=>{
    sidebarContainer.classList.remove("show-sidebar")
    // console.log(sidebarContainer.classList);
}

hamburger.addEventListener("click",openSidebar);
sidebarCloseButton.addEventListener("click",closeSidebar);
}
init();
function navrelatedcode(){
    const navbarContainer=document.querySelector(".nav-container");
window.addEventListener("scroll",function() {
    const scrollNumber=window.scrollY;
    const windowInnerWidth=this.window.innerWidth>=992?70:50;
    if(scrollNumber>=windowInnerWidth){
        navbarContainer.classList.add("sticky-nav");
    }
    else{
        navbarContainer.classList.remove("sticky-nav");
    }
})
}
navrelatedcode();