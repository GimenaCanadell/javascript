let template = (image, name, description) => {
  return `
        <div class="card" style="width: 18rem;">
          <img src="${image}" class="card-img-top" alt="..."></img><div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <a href="#" class="btn btn-primary">see more...</a>
          </div>
          </div>`;
};

function printNewEvents() {
  let events = events;

  let currentDate = currentDate;

  let templates = [];

  for (let one of events) {
    if (one.date > currentDate) {
      templates.push(template(one.image, one.name, one.description));
    }

    let selector = document.getElementById("conta");
    selector.innerHTML = templates.join("");
  }
}
// printNewEvents()
async function fetchApi() {
  try {
    let urlApi =
      "https://api-amazingevents.onrender.com/api/amazing-events?time=new";
    let fetchResponse = await fetch(urlApi);
    console.log(fetchResponse);
    let response = await fetchResponse.json();
    console.log(response);
    printTemplate(response.events, "conta");
  } catch (error) {
    console.log(error);
  }
}
fetchApi();
