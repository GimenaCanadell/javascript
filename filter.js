
function captureData(){
let texto=document.getElementById('id_search').value 
let checks=Array.from(document.querySelectorAll('.class_checks:checked')).map(each=>each.value)
console.log(texto);
console.log(checks);
let filtro=events.filter(each=>{
    return(each.name.toLowerCase().includes(texto))&&(checks.lengh===0||checks.includes(each.category))
})
if (filtro.lengh>0){
    console.log(filtro);
    printEvents(filtro,'cardEvents_main');

}else{
    notFound();
}
}
    function notFound(x){
         return  `
        <div class="card"style="width: 18rem;"id="card">
            <img src=""d-flex flex-wrap justify-content-evenly  class="card-img-top  alt="..."></img><div class="card-body" d-flex flex-wrap justify-content-evenly>
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <a href=""class="btn btn-primary">Go somewhere</a>

          </div>
          </div>`
    cardEvents.innerHTML=notpage
    }
notFound()
captureData()





