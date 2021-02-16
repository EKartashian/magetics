$(function() {
    $(".header__button").on("click", function(){
        $(".menu").addClass("active");
    });
    
    $(".menu__close").on("click", function(){
        $(".menu").removeClass("active"); 
    });

});
function show() {      
    document.getElementById("search").style.display="block";
};
