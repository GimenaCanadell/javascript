const events = datos.events;

let allEvents = [];
function printCards() {
  for (let one of events) {
    let card = `
        <div class="card"style="width: 18rem;">
          <img src="${one.image}"  class="card-img-top  alt="..."></img><div class="card-body" d-flexflex-wrap justify-content-between algin-items-center>
            <h5 class="card-title">${one.name}</h5>
            <p class="card-text">${one.description}</p>
            <a href="./detail.html?id=${one._id}" class="btn btn-primary">see more</a>
          </div>
          </div>`;
console.log(one._id)
    allEvents.push(card);
   }

  let cardEvents = document.getElementById("contain");
  cardEvents.innerHTML = allEvents.join('');
}
printCards();
