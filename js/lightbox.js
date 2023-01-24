const imagenes= document.querySelectorAll('.img-fotos')
const imageneslight=document.querySelector('.agregar-imagen')
const contenedorLigth =document.querySelector('.imagen-light')
const menu1 =document.querySelector('.menu');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
aparecerimagen(imagen.getAttribute('src'))  
    })
})
contenedorLigth.addEventListener('click',(e)=>{
if(e.target !== imageneslight){
    contenedorLigth.classList.toggle('show')
imageneslight.classList.toggle('showImage')
menu1.style.opacity ='1'
}
})

const aparecerimagen = (imagen)=>{
    imageneslight.src =imagen;
    contenedorLigth.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    menu1.style.opacity ='0'
}