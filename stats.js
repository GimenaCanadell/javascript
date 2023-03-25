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
