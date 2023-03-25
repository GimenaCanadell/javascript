// const events = datos.events;

function printCards(array) {
  let allEvents = [];

  for (let one of array) {
    let card = `
        <div class="card"style="width: 18rem;">
          <img src="${one.image}"  class="card-img-top  alt="..."></img><div class="card-body" d-flexflex-wrap justify-content-between algin-items-center>
            <h5 class="card-title">${one.name}</h5>
            <p class="card-text">${one.description}</p>
            <a href="./detail.html?id=${one._id}" class="btn btn-primary">see more</a>
          </div>
          </div>`;

    allEvents.push(card);
  }
  return allEvents;
}
function printTemplate(array, x) {
  let cardEvents = document.getElementById(x);
  let template = printCards(array);
  cardEvents.innerHTML = template.join("");
}

// printTemplate(events, "contain");

async function fetchApi() {
  try {
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
    let fetchResponse = await fetch(urlApi);
    console.log(fetchResponse);
    let response = await fetchResponse.json();
    console.log(response);
    printTemplate(response.events, "contain");
  } catch (error) {
    console.log(error);
  }
}
fetchApi();
