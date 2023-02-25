console.log(data);
const eventos=data.events;
console.log(eventos);

let eventCartas=[];

function crearEvents(){
     
    for (let event of eventos){
       let cartaEv=<div class ="card">
     <img src="${event.image}"class="card-img-top img_fit" alt="cinema"></img>
             <div class="card-body fondo_cards">
                <h5 class="card-title ">${event.name}</h5>
                <p class ="card-text">${event.description}</p>
                <a href ="./nuevo.html" class="btn btn-outline-danger">see more</a>

            </div>
        </div>
crearCartas.push(cartaEv)
   }
}
console.log(eventCartas);



    function printEvents(){

let cartaEv =document.getElementById ('cardEvents');
cartaEv.innerHTML=eventCartas.join('')
}


printEvents();
crearEvents();
