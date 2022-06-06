





window.onload=function(){
    var open = false;
    let toggleHidden = document.getElementById("open-hidden-nav");
    var toggelSvgPath = document.getElementById("path-open");
    var hiddenNav = document.getElementById("hidden-nav");

toggleHidden.addEventListener('click',function(toggleHidden){

    if(open == false){

        console.log("click");
        hiddenNav.style.display = 'flex';

       toggelSvgPath.setAttribute("d","M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z");
        open = true;


    }else{
        open = false;

        hiddenNav.style.display = 'none';
        toggelSvgPath.setAttribute("d","M20 5V2H0v3h20zm0 6V8H0v3h20zm0 6v-3H0v3h20z");
    }



});

}


function autoclose() {
    var hiddenNav = document.getElementById("hidden-nav");
    var toggelSvgPath = document.getElementById("path-open");
    var hiddenNav = document.getElementById("hidden-nav");

    hiddenNav.style.display = 'none';
    toggelSvgPath.setAttribute("d","M20 5V2H0v3h20zm0 6V8H0v3h20zm0 6v-3H0v3h20z");
    
}