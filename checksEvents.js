let category=[]
datos.events.forEach(each=>{
  if (!category.includes(each.category)){
    category.push(each.category)
  }
})
function printchecks(array_tipos){
let container =document.querySelector('#id_filter')
 array_tipos = array_tipos.map((each) => {
    return `
<fielset>
<label class="contact-label for="${each}">${each}</label>
<input onclick="captureData()" class="class_checks contact-input"type="checkbox" value=${each}"name="tipo"id="${each}">
</fieldset>
`;
  });
  array_tipos.push(
    `<input onkeyup="captureData()" id="id_search" class"contact-input" type"text">`
  );
  container.innerHTML = array_tipos.join('');
  }
 printchecks(category)

