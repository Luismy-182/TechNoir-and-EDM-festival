/*********************************Creando la Galería**********************************/

document.addEventListener('DOMContentLoaded', function (){
    navegacionFija();
    crearGaleria();
    scrollNav();
});

function navegacionFija(){
    const header = document.querySelector('.header');
    const sobreFestival=document.querySelector('.sobre-festival');
    
    
    document.addEventListener('scroll',() =>{
        if(sobreFestival.getBoundingClientRect().bottom <1 ){ //te permite saber cuanto falta para llegar al  area sobre festival
            header.classList.add('fixed');
            return;
        }else{
            header.classList.remove('fixed');
        }
    });
}




function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    const cantidadImagenes=16;
    for(let i=1; i<=cantidadImagenes; i++){
        const imagen=document.createElement('IMG');
        imagen.src=`src/img/gallery/full/${i}.jpg`;
        imagen.alt='Imagen-Galeria';
        //event handler
        imagen.onclick=function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}


function mostrarImagen(i){

    const imagen=document.createElement('IMG');
    imagen.src=`src/img/gallery/full/${i}.jpg`;
    imagen.alt='Imagen-Galeria';
    //generamos primero el modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
   
    

    //boton cerrar modal
    const cerrarModalBtn=document.createElement('BUTTON');
    cerrarModalBtn.textContent='X'
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick=cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);


    //agregar modal al html

    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
    modal.onclick= cerrarModal;



}

function cerrarModal(){
    const modal=document.querySelector('.modal');
   
    modal.classList.add('fade-out');
    setTimeout(() => {
       
        modal.remove(); //=   modal.classList.remove('modal'); 

       const body = document.querySelector('body'); //eliminamos el overflow para que puedamos seguir navegando
       body.classList.remove('overflow-hidden')
    }, 500);
    
}


function scrollNav(){
    const navLinks =document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach( link =>{
        link.addEventListener('click', e=>{
            e.preventDefault();
            const sectionScroll= e.target.getAttribute('href');
            const section=document.querySelector(sectionScroll);

            section.scrollIntoView({behavior:'smooth'});

            
            
            
        })
    })
}