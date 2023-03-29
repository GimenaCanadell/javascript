// const events = datos.events;

let cards = []



function defineTemplateCard(cards){
	return `
	<div class="col">
	<div class="card shadow-sm">
			<figure class="figure">
					<img src="${cards.image}" alt="${cards.name}"  class="bd-placeholder-img card-img-top tamanioFoto">
			</figure>
		<div class="card-body">
				<h1 class="d-flex flex-wrap justify-content-center font-title">${cards.name}</h1>
				<p class="card-text font-paragraph">${cards.description}</p>
				<div class="d-flex justify-content-between align-items-center">
						<small class="text-muted fs-6">Price $${cards.price}</small>
						<button class="button-color" id="boton">
						<a href="./details.html?id=${cards.id}&nombre=${cards.name}"   class="nav-link btn btn-sm text-light button-color">Ver mas</a>
						</button>
				</div>
		</div>
	</div>
</div>`;
}

function printCards(id_etiqueta, array){
	let container = document.querySelector(id_etiqueta)
	array = array.map(defineTemplateCard)
	container.innerHTML = array.join('')
}




async function fetchApi(){
	try{
		let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events"
		let fetchResponse = await fetch(urlApi) 
			
		let response = await fetchResponse.json()

		let datos = response.events
		

		printCards('#cardContainer', datos)


	} catch(error){
		console.log("ocurrio un error ")
		console.log(error)
	}

}
fetchApi()
