// ===== DOM API ===== \\

function cambiarTitulo(arg) {
  const titulo = document.querySelector('h1')
  titulo.innerText = arg || 'No me pasaron nada'
}

setTimeout(() => {
  cambiarTitulo('Soy Andrey')
}, 2000)

// ===== DOM API ===== \\


// ===== EVENTOS ===== \\

let contador = 1
let boton = document.querySelector('#btn')
boton.addEventListener('click', function (e) {
  let nuevoLi = document.createElement('li')
  nuevoLi.innerHTML = `Soy em item: ${++contador}`
  let lista = document.querySelector('li')
  lista.appendChild(nuevoLi)
})

// ===== EVENTOS ===== \\


