/*  Hide logo on scroll down,
    show on scroll up;
    transition menu to top on scroll down;  
*/

/*var previousScrollPosition = window.pageYOffset;*/
window.onscroll = function() {
    var currentScrollPosition = window.pageYOffset;
    if(0 >= currentScrollPosition){
        document.getElementById("header").style.top = "0";
        document.getElementById("links").style.top = "110px";
    }else{
        document.getElementById("header").style.top = "-110px";
        document.getElementById("links").style.top = "0";
    }
    /*previousScrollPosition = currentScrollPosition;*/
}

