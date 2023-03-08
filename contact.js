function captureData(){
    let name = document.getElementById('name');
      let data={
           [name.name]:name.value
      }
       console.log(data)
 
    let email=document.getElementById('email');
       let date={
           [email.email]:email.value
       }
       console.log(date)
    let mje =document.getElementById('mje')
       let dato={
           [mje.mje]:mje.value
       }
       console.log(dato)
   

}  
captureData()
const handleForm =(event)=>{
    event.preventDefault()
    captureData()
}
let buttonform = document.getElementById('form-button')
buttonform.addEventListener(
    'click',
     handleForm
     )





