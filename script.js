const menuHidden = document.getElementsByClassName("menu-hidden")[0];
const headers = document.getElementsByClassName("header-general");
const deivid = document.getElementById("oi")
const openMenu = ()=>{
    menuHidden.style.left = "calc(100% - 30%)"
}
const closeMenu = ()=>{
    menuHidden.style.left = ""
}
const changeHeader = ()=>{
    if(window.scrollY > 10){
        
        for( let header of headers ){
            console.log(header)
            header.style.backgroundColor = "#1c1c1c";
        }
        return
    }    
    if(window.scrollY < 10){

        for( let header of headers ){
            console.log(header)
            header.style.backgroundColor = "";
        }
    }
}