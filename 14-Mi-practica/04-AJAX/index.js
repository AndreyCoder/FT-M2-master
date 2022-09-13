// ===== AJAX ===== \\

var index = 1
$('.boton').click(function () {
  $.get(`https://jsonplaceholder.typicode.com/photos/${index}`, function (data) {
    // console.log(data)
    var titulo = document.createElement('h1')
    titulo.innerText = data.title
    var img = document.createElement('img')
    console.log(img)
    img.src = data.thumbnailUrl
    var contenedor = document.querySelector('#contenedor')
    contenedor.appendChild(titulo)
    contenedor.appendChild(img)
    index++
  })
})


// ===== FETCH ===== \\

$('.fetch').click(function () {
  fetch(`https://jsonplaceholder.typicode.com/photos/1`)
    .then(data => data.json())
    .then(dataJson => {
      console.log(dataJson)
    })
})


$('.post').click(function () {
  $.post(`https://jsonplaceholder.typicode.com/posts`, {
    title: 'Titulo',
    body: 'Posteo',
    userId: 1
  }, function (data) {
    console.log('todo salio bien ', data)
  })
})
