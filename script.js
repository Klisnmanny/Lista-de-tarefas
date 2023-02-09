const listaUl = document.querySelector('#listaUl')
const addtxt = document.querySelector('#adicionartxt')
const btnAdd = document.querySelector('#btnAdc')
const txtStorage = JSON.parse(localStorage.getItem('txtStorage')) || [];
txtStorage.forEach(item => {
  const listaHTML = 
      `<li class="itemLista">
        <input type="checkbox" name="" id="check">
        <span>${item}</span>
        <button class="btnDeletar"></button>
      </li>`
    listaUl.insertAdjacentHTML('beforeend', listaHTML);
    addtxt.value = ''
})
btnAdd.addEventListener('click', function() {
  const item = addtxt.value
  if (item) {
    txtStorage.push(item)
    localStorage.setItem('txtStorage', JSON.stringify(txtStorage))
    const listaHTML = 
     `<li class="itemLista">
        <input type="checkbox" name="" id="check">
        <span>${item}</span>
        <button class="btnDeletar">Deletar</button>
      </li>`
    listaUl.insertAdjacentHTML('beforeend', listaHTML);
    addtxt.value = ''
  }
})
listaUl.addEventListener('click', function(event) {
  const target = event.target
  if (target.classList.contains('btnDeletar')) {
    const item = target.parentElement
    const itemIndex = Array.from(listaUl.children).indexOf(item)
    txtStorage.splice(itemIndex, 1)
    localStorage.setItem('txtStorage', JSON.stringify(txtStorage))
    item.remove()
  }
})
