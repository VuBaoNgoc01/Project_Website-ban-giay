$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.wrap').addClass("sticky")
        }else{
            $('.wrap').removeClass("sticky")
        }
    });
//active in wrap
    const boxMenu = document.getElementById("box-menu");
    const menuChild = document.getElementById("menu-child");
    const searchIcon = document.getElementById("search-icon");
    const searchInput = document.getElementById("search-input");
    const boxIcon = document.getElementById("box-icon");
    // const user = document.getElementById("user");

    menuChild.addEventListener("click", () => {
        boxMenu.classList.toggle("active");
        menuChild.classList.toggle("active");
        boxIcon.classList.toggle("active");
    });

    searchIcon.addEventListener("click", () => {
        searchInput.classList.toggle("active");
    });


});


