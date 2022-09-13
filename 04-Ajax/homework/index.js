var url = 'http://localhost:5000/amigos'

let mostrarAmigos = () => {
  $.get(url, function (amigos) {
    $('#lista').empty()
    amigos.forEach(el => {

      // == PRIMER METODO == \\
      /*
      let li = document.createElement('li')
      li.id = el.id
      li.innerText = el.name
      let list = document.getElementById('lista')
      list.appendChild(li)
      */

      // == PRIMER METODO == \\
      $('#lista').append(`<li id"${el.id}"> ${el.name}</li>`)
    });
  })
}

$('#boton').click(mostrarAmigos)

$('#search').click(function () {
  let id = $('#input').val()
  if (id) {
    $.get(`${url}/${id}`, function (data) {
      $('#amigo').text(`
        Nombre: ${data.name} 
        Edad: ${data.age} 
        Email: ${data.email}
      `)
      $('#input').val('')
    })
  } else {
    $('#amigo').text('Agrega un id')
  }
})

let borrarAmigo = function () {
  let id = $('#inputDelete').val()
  let amigo
  if (id) {
    $.get(`${url}/${id}`, function (a) {
      amigo = a
    })

    $.ajax({
      url: `${url}/${id}`,
      type: 'DELETE',
      success: function () {
        $('#success').text(`Tu amigo, ${amigo.name} fue eliminado con exito`)
        $('#inputDelete').val('')
        mostrarAmigos()
      }
    })
  } else {
    $('#success').text('Ingresa un id')
  }
}

$('#delete').click(borrarAmigo)
