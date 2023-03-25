

async function CaptureChecks() {

    let tipos = [];
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
    let fetchResponse = await fetch(urlApi);
    let response = await fetchResponse.json();
    response.events.forEach((each) => {
      if (!tipos.includes(each.category)) {
        tipos.push(each.category);
      }

      
    })
printChecks(tipos);
  }
function printChecks(array_tipos) {
  let container = document.querySelector("#id_filter");
array_tipos = array_tipos.map((each) => {
    return `
<fieldset>
<input onclick="captureData()" class="class_checks contact-input" type="checkbox" value="${each}" id="${each}">
<label class="contact-label" for="${each}">${each}</label>
</fieldset>
`;
  });

  array_tipos.push(
    `<input onkeyup="captureData()" id="id_search" class"contact-input" type"text">`
  );
  container.innerHTML = array_tipos.join("");
}
CaptureChecks()
