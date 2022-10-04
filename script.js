window.onload=function(){
    var open = false;
    let toggleHidden = document.getElementById("open-hidden-nav");
    var toggelSvgPath = document.getElementById("path-open");
    var hiddenNav = document.getElementById("hidden-nav");

    

toggleHidden.addEventListener('click',function(toggleHidden){

    if(open == false){

        console.log("click");
        hiddenNav.style.display = 'flex';
        toggelSvgPath.setAttribute("d","M21 18.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z");

        open = true;


    }else{
        open = false;

        hiddenNav.style.display = 'none';
        toggelSvgPath.setAttribute("d","M21 5V2H0v3h20zm0 6V8H0v3h20zm0 6v-3H0v3h20z");
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

