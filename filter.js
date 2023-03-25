function captureData() {
  let texto = document.getElementById("id_search").value;
  let checks = Array.from(
    document.querySelectorAll(".class_checks:checked")
  ).map((each) => each.value);
  console.log(checks);
  let filtro = events.filter((each) => {
    return (
      each.name.toLowerCase().includes(texto) &&
      (checks.length === 0 || checks.includes(each.category))
    );
  });
  console.log(filtro);
  if (filtro.length > 0) {
    printTemplate(filtro, "contain");
  } else {
    notFound("contain");
  }
}
function notFound(x) {
  let notpage = `
        <div class="card"style="width: 18rem;"id="card">
            <img src=""d-flex flex-wrap justify-content-evenly  class="card-img-top  alt="..."></img><div class="card-body" d-flex flex-wrap justify-content-evenly>
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <a href=""class="btn btn-primary">Go somewhere</a>

          </div>
          </div>`;
  let cardEvents = document.getElementById(x);
  cardEvents.innerHTML = notpage;
}

// captureData();
async function fetchApi() {
  try {
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
    let fetchResponse = await fetch(urlApi);
    console.log(fetchResponse);
    let response = await fetchResponse.json();
    console.log(response);
    captureData();
  } catch (error) {
    console.log(error);
  }
}
fetchApi();
