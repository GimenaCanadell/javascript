
let query=location.search
console.log(query)
let params=new URLSearchParams(query)
console.log(params)
let id_query=params.get('id')
console.log(id_query)

const events = datos.events;


function defineDetails(one) {

  return `
        <div class="card"style="width: 18rem;"id="card">
            <img src="${one.image}"d-flex flex-wrap justify-content-evenly  class="card-img-top  alt="..."></img><div class="card-body" d-flex flex-wrap justify-content-evenly>
            <h5 class="card-title">${one.name}</h5>
            <p class="card-text">${one.description}</p>
            <a href=""class="btn btn-primary">See more...</a>

          </div>
          </div>`;

  
  }
function printCards(){
  let container =document.querySelector('#detail')
  evento=events.find(each=>each._id==id_query)
  let details=defineDetails(evento)
  console.log(details)
  container.innerHTML=details
}
printCards()





