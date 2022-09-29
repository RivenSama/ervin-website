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


function rads(A) {
    var new_A = A * Math.PI/180;            // Transform Degrees in Radians
    return new_A;
    
}

function getX(A,x,y) {
    var new_x = x*Math.cos(A) - y*Math.sin(A);          // Rotate X coordonate based on radian angle
    return new_x;
    
}

function getY(A,x,y) {
    var new_y = Math.sin(A)*x + Math.cos(A)*y;  // Rotate Y coordonate based on radian angle
    return new_y;
}

function skillElements(ctx,width,height,posX,posY,A) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";  
    ctx.fillText("Skills", width/2-20,height/2); // CENTER TEXT
    ctx.fillStyle = "red";  
    ctx.fillText("Python", width/2-20+getX(rads(A), posX, posY),height/2+getY(rads(A), posX, posY));
    ctx.fillText("HTML", width/2-20+getX(rads(A+90), posX, posY),height/2+getY(rads(A+90), posX, posY));
    ctx.fillText("CSS", width/2-20+getX(rads(A+180), posX, posY),height/2+getY(rads(A+180), posX, posY));
    ctx.fillText("Java", width/2-20+getX(rads(A+270), posX, posY),height/2+getY(rads(A+270), posX, posY));


}

function interpElements(c,ctx,width,height,posX,posY,A) {

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";  
    ctx.fillText("Interpersonal", width/2-40,height/2); // CENTER TEXT
    ctx.fillText("Skills", width/2-10,height/2+20); 
    ctx.fillStyle = "red";  
    ctx.fillText("Adaptability", width/2-30+getX(rads(-A), posX+20, posY+20),height/2+getY(rads(-A), posX+20, posY+20));
    ctx.fillText("Communication", width/2-30+getX(rads(-A+90), posX+20, posY+20),height/2+getY(rads(-A+90), posX+20, posY+20));
    ctx.fillText("Teamwork", width/2-30+getX(rads(-A+180), posX+20, posY+20),height/2+getY(rads(-A+180), posX+20, posY+20));
    ctx.fillText("Stress", width/2-30+getX(rads(-A+270), posX+20, posY+20),height/2+getY(rads(-A+270), posX+20, posY+20));
    ctx.fillText("Management", width/2+getX(rads(-A+270), posX+20, posY+20)-30,height/2+getY(rads(-A+270), posX+20, posY+20)+20);


}


function myMove() {


    var c = document.getElementById("canvas");                      
    var ctx = c.getContext("2d"); 

    ctx.clearRect(0, 0, c.width, c.height);
                      
    var pause = true;
    ctx.font = "20px Arial";            // Set font of text

    var width = c.width;
    var height = c.height;
    let posY = 70;  // THESE DETERMINES THE RADIUS
    let posX = 70;

    let A = 0; // START ANGLE
    
    var fps = 10;

    if (interp == false) {
        skillElements(ctx,width,height,posX,posY,A);
    } else {
        interpElements(c,ctx,width,height,posX,posY,A);
   
    }
    

    function drawSkills() {

        if (pause == false) {
            
            setTimeout(() => {

                if (interp == false) {
                    skillElements(ctx,width,height,posX,posY,A);
                } else {
                    interpElements(c,ctx,width,height,posX,posY,A);
                }
                A++;
                requestAnimationFrame(drawSkills);
                
            }, fps);

       

        }else {
            cancelAnimationFrame(drawSkills);
        } 
        
    }

    drawSkills();


   

    c.addEventListener('mouseenter',()=> pause = false);
    c.addEventListener('mouseout', ()=> pause = true);
    c.addEventListener('mouseenter', ()=> drawSkills());

}

function interpToggle() {
    if (interp == false) {
        interp = true;

        myMove();
        
    } else {
        interp = false;
        myMove();
        
    }
    
}