async function fetchApi(){
	try{
		let urlApi ="https://api-amazingevents.onrender.com/api/amazing-events";
		let fetchResponse = await fetch(urlApi)
		

		let response = await fetchResponse.json()
		
		
		let datosTabla = response.events
		
		

		printmayorCapacidad(datosTabla)
		percentajeOfAttendance(response)
		porcentajeUpcoming(response)
		porcentajePast(response)

	} catch(error){
		console.log("ocurrio un error que diosito lo ayude")
		console.log(error)
	}
}
fetchApi()

function percentajeOfAttendance(response){
	let currentDate =response.currentDate
	let eventos = response.events
	let resultado = []
	eventos.forEach (each => {
					if((each.date < currentDate)&& (!isNaN(each.assistance) )){
						
								let objetoTemporal = {
													nombre: each.name,
													categoria: each.category, 
													capacidad: each.capacity , 
													asistencia: each.assistance, 
													porcentaje: ((each.assistance*100)/each.capacity)
								}
	
								
							
									resultado.push(objetoTemporal)
									
								
		
						}	
						
					})
					
					sortedPorcentaje(resultado)
					return resultado
	}


function sortedPorcentaje(resultado) {
	
	let sorted = [...resultado].sort((e1,e2)=> e1.porcentaje- e2.porcentaje)
	
	
	let mayorAsistencia = sorted[sorted.length-1].nombre


	


let menorAsistencia = sorted[0].nombre

printTablaPorcentajeAsistencia(mayorAsistencia, menorAsistencia)
}

function printTablaPorcentajeAsistencia(mayorAsistencia, menorAsistencia){
						
	const contenedorDetalle1 = document.querySelector("#tablaMayorAsistencia")
				
	contenedorDetalle1.innerHTML =  `${mayorAsistencia}`

	const contenedorDetalle2 = document.querySelector("#tablaMenorAsistencia")
				
	contenedorDetalle2.innerHTML =  `${menorAsistencia}`
}



function printmayorCapacidad(datosTabla){

	let mayorCapacidad = [...datosTabla].sort((cap1,cap2) => cap1.capacity-cap2.capacity)

let nombreEvento = mayorCapacidad[mayorCapacidad.length-1].name


printDetails(nombreEvento)
}

function printDetails(nombreEvento){
						
			const contenedorDetalle = document.querySelector("#tablaCapacity")
						
			contenedorDetalle.innerHTML =  `${nombreEvento}`
}



function porcentajeUpcoming(response){
	let currentDate =response.currentDate
	let eventos = response.events
	let resultadoUpcoming = []
	let categoriaUpcoming = []
	eventos.forEach (each => {
					if((each.date > currentDate)&& (!isNaN(each.estimate) )){
						
								let objetoTemporal = {
													nombre: each.name,
													categoria: each.category, 
													capacidad: each.capacity , 
													estimado: each.estimate, 
													porcentaje: ((each.estimate*100)/each.capacity),
													gananciaEstimada: each.price*each.estimate
								}
	
								
							
									resultadoUpcoming.push(objetoTemporal)
									categoriaUpcoming.push(objetoTemporal.categoria)
									console.log(objetoTemporal)
								
		
						}	
						
					})
					console.log(resultadoUpcoming)
					console.log(categoriaUpcoming)


					
				
					filtroCategorias(categoriaUpcoming,resultadoUpcoming)
					
				

					return resultadoUpcoming
	}

function filtroCategorias(categoriaUpcoming,resultadoUpcoming) {
	let categoriasUnicas = Array.from(new Set(categoriaUpcoming)) 

	
	let eventsByCategory = categoriasUnicas.map(eventCat => resultadoUpcoming.filter(each => each.categoria === eventCat))

	
	reduceUpcoming(eventsByCategory)
    return eventsByCategory

}


 	function reduceUpcoming(eventsByCategory){

	let tablaUpcomingTotal= eventsByCategory.map(eventCat => {
		let calculate  =  eventCat.reduce(
			(acc, each) =>{
				console.log(each.categoria)
	
	
				acc.categoriaAgrupada = each.categoria
				acc.totalGanancia += each.gananciaEstimada
				acc.totalPorcentaje += each.porcentaje
				acc.cantidad += 1
	
				return acc
	
			},
			{categoriaAgrupada: "", totalGanancia: 0, totalPorcentaje:0, cantidad:0}
			
			
		 )
		 calculate.totalPorcentaje=  calculate.totalPorcentaje/  calculate.cantidad
		 return calculate
	})
	
	imprimirTablaUpcoming(tablaUpcomingTotal)


} 

	function imprimirTablaUpcoming(tablaUpcomingTotal){
			console.log(tablaUpcomingTotal)
			const contenedorTabla2 = document.querySelector("#UpcomingTabla")
			
	
			let  html = "" 
			tablaUpcomingTotal.forEach((each =>{
				html += `
				<tr class="table-warning table-style-2">
				<td>${each.categoriaAgrupada}</td>
				<td>${each.totalGanancia}</td>
				<td>${each.totalPorcentaje.toFixed(2)} %</td>
				</tr>
				`

			}))
				
		
		
			contenedorTabla2.innerHTML =  html 
	}

 

function porcentajePast(response){
	let currentDate =response.currentDate
	let eventos = response.events
	let resultadoPast = []
	let categoriaPast = []
	eventos.forEach (each => {
					if((each.date < currentDate)&& (!isNaN(each.assistance) )){
						
								let objetoTemporal = {
													nombre: each.name,
													categoria: each.category, 
													capacidad: each.capacity , 
													asistencia: each.assistance, 
													porcentaje: ((each.assistance*100)/each.capacity),
													gananciaAsistencia: each.price*each.assistance
								}
	
								
							
									resultadoPast.push(objetoTemporal)
									categoriaPast.push(objetoTemporal.categoria)
									console.log(objetoTemporal)
								
		
						}	
						
					})
					console.log(resultadoPast)
					console.log(categoriaPast)


					
			
					filtroCategoriasPast(categoriaPast,resultadoPast)
					
				

					return resultadoPast
	}

function filtroCategoriasPast(categoriaPast,resultadoPast) {
	let categoriasUnicasPast = Array.from(new Set(categoriaPast)) 

	console.log(categoriasUnicasPast )
	let eventsByCategoryPast = categoriasUnicasPast.map(eventCat => resultadoPast.filter(each => each.categoria === eventCat))

	console.log(eventsByCategoryPast)
	reducePast(eventsByCategoryPast)
    return eventsByCategoryPast

}


 	function reducePast(eventsByCategoryPast){

	let tablaPastTotal= eventsByCategoryPast.map(eventCat => {
		let calculate  =  eventCat.reduce(
			(acc, each) =>{
				console.log(each.categoria)
	
	
				acc.categoriaAgrupada = each.categoria
				acc.totalGanancia += each.gananciaAsistencia
				acc.totalPorcentaje += each.porcentaje
				acc.cantidad += 1
	
				return acc
	
			},
			{categoriaAgrupada: "", totalGanancia: 0, totalPorcentaje:0, cantidad:0}
			
			
		 )
		 calculate.totalPorcentaje=  calculate.totalPorcentaje/  calculate.cantidad
		 return calculate
	})
	
	imprimirTablaPast(tablaPastTotal)


} 

	function imprimirTablaPast(tablaPastTotal){
			console.log(tablaPastTotal)
			const contenedorTabla3 = document.querySelector("#tablePast")
			
	
			let  html = "" 
			tablaPastTotal.forEach((each =>{
				html += `
				<tr class="table-warning table-style-2">
				<td>${each.categoriaAgrupada}</td>
				<td>${each.totalGanancia}</td>
				<td>${each.totalPorcentaje.toFixed(2)} %</td>
				</tr>
				`

			}))
				
		
		
			contenedorTabla3.innerHTML =  html 
	}

