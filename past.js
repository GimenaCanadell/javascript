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


function printPastEvents() {
  let events = datos.events;

  let currentDate = datos.currentDate;

  let templates = [];

  for (let one of events) {
    if (one.date < currentDate) {
      templates.push(template(one.image, one.name, one.description));
    }

    let selector = document.getElementById("con");
    selector.innerHTML = templates.join("");
  }
}

printPastEvents();
