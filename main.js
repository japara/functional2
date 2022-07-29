///Functional 2
let container = document.getElementById('functional-cont');
let boxes = document.querySelectorAll('.img-cont') 

boxes.forEach(Element=>{
    Element.addEventListener('click', resize);
})


function resize(){
    boxes.forEach(element=>{
        element.style.width='18%';
        element.children[0].style.opacity='0';
    })
    event.target.style.width='60%';
    console.log(event.target.children);
    event.target.children[0].style.opacity='1';
    
}