var degreesX;
var degreesY;
var mouseXRelativo;
var mouseYRelativo;
var boundingRect;

function Click(link){
    window.location = link;
}




  


function CardRotate(element){

    element = document.getElementById(element);
    element.style.transition = "";
    element.addEventListener("mousemove", function(event) {
        // Obtém as dimensões do objeto
        boundingRect = element.getBoundingClientRect();
        mouseXRelativo = event.clientX - boundingRect.left; // Calcula a posição X relativa
        mouseYRelativo = event.clientY - boundingRect.top; // Calcula a posição Y relativa
        
        let centerX = boundingRect.width / 2;
        let centerY = boundingRect.height /2 ;
    
    
    
        degreesY = (centerY - mouseYRelativo) * 20 / centerY;
        degreesX = (mouseXRelativo - centerX) * 20 / centerX;
        element.style.transform = `perspective(1300px) rotateX(${degreesY}deg) rotateY(${degreesX}deg)`;
        element.style.zIndex = "999";
       
      });
  
  
}

function CardRotateNormal(element){
    element = document.getElementById(element);
    element.style.transform = " rotateX(0deg) rotateY(0deg)";
    element.style.zIndex = "1";
    element.style.transition = "transform  1s";
}