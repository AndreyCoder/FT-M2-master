// ===== let, const y var ===== \\

// puede pizar y tener dos variables con el mismo nombre

var fruta1 = 'pera'
fruta1 = 'manzana'
var fruta1 = 'naranja'
console.log(fruta1)


// no se puede pizar ni crear dos variables const con el mismo nombre

const hongos = 'champiñones'
// hongos = 'portobello'
// const hongos = 'otro hongo'
console.log(hongos)

if (true) {
  // aqui si se puede crear otra variable const con el mismo
  // nombre xq es un scope diferente
  const hongos = 'portobello'
  console.log(hongos)
}


// puede pizar pero no tener dos variables con el mismo nombre
let fruta2 = 'pera'
fruta2 = 'mazana'
console.log(fruta2)

if (true) {
  // aqui si se puede crear otra variable let con el mismo
  // nombre xq es un scope diferente
  let fruta2 = 'naranja'
  console.log(fruta2)
}

// no cambia la propiedad solo la referancia en memoreia
const obj1 = { nombre: 'Andrey' }
obj1.nombre = 'Hellen'
obj1.apellido = 'Montero'
console.log(obj1)

// ===== let, const y var ===== \\

// ===== Arrow function ===== \\

const impares = [1, 3, 5, 7, 9]

// function tradicional
const pares1 = impares.map(function (num) {
  return num + 1
})
console.log(pares1)

// function flecha si factorizar
const pares2 = impares.map((num) => {
  return num + 1
})
console.log(pares2)

// function flecha factorizado. Cuando tiene un solo parametro
// no hace falta ponerlo entre parentecis, y si no lleva llaves
// no hace falta ponerle un return
const pares3 = impares.map(num => num + 1)
console.log(pares3)

// ===== Arrow function ===== \\

// ===== Arrow en bind ===== \\

var bob = {
  name: 'Bob',
  friends: ['Andrey', 'Hellen'],
  printFriends() {

    // Funcion tradicional. Para que funcione habria que bindiarlo 
    // de la siguiente manera

    // var that = this
    // this.friends.forEach(function(el) {
    //   console.log(that.name + ' knows ' + el)
    // })

    //funcion flecha. La funcion flecha tiene un bind explicito 
    // por lo que no necesita ser bindiado 

    this.friends.forEach(f =>
      console.log(this.name + ' knows ' + f))
  }
}
console.log(bob.printFriends())


function Persona1(nombre) {
  this.nombre = nombre
}

// en este caso la funcion flecha no funciona devido a su bind
// Persona.prototype.getNombre = () => this.nombre

Persona1.prototype.getNombre = function () {
  return this.nombre
}

let persona1 = new Persona1('Andrey')
console.log(persona1.getNombre())

// ===== Arrow en bind ===== \\

// ===== Clases ===== \\

class Persona2 {
  constructor(nombre = 'Andrey', apellido = "Murillo") {
    this.nombre = nombre,
      this.apellido = apellido
  }

  getNombre() {
    return `${this.nombre} ${this.apellido}`;
  }
}

class Empleado extends Persona2 {
  constructor(nombre, apellido, empleo = 'Programador ', sueldo = 1600) {
    super(nombre, apellido);
    this.empleo = empleo;
    this.sueldo = sueldo;
  }

  getEmpleo() {
    return `${this.empleo} $${this.sueldo}`;
  }
}
let persona2 = new Persona2()
console.log(persona2.getNombre())

let persona3 = new Empleado()
console.log(persona3.getEmpleo())

// ===== Clases ===== \\

// ===== Objetos literales ===== \\

function persona4(nombre, edad) {
  return {
    nombre,
    edad
  }
}
console.log(persona4('Andrey', 36))

// ===== Objetos literales ===== \\

// ===== Template string ===== \\

let a = 'Pepita'
let b = 'La pistolera'
let c = 18

// Oracion concatenada sin template string
// Ella es Pepita La pistolera y es mayor de edad porque tiene 19 años
let str1 = 'Ella es' + ' ' + a + ' ' + b + ' y es mayor de edad porque tiene ' + c + ' años'
console.log(str1)

// operador ternario
let edad = c < 19 ? 'es mayor' : 'es menor'
console.log(edad)

// con template string
let str2 = `Ella es ${a} ${b} y ${edad} de edad porque tiene ${c} años`
console.log(str2)

// ===== Template string ===== \\

// ===== Destructuring ===== \\

let array = [1, 2, 3]

let [d, e, f] = [1, 2, 3]

console.log(d, e, f)
console.log(d, f)

let objPersona = {
  nombre: 'Andrey',
  apellido: 'Murillo'
}

// Con destructuring
let { nombre, apellido } = objPersona
console.log(nombre, apellido)

// Sin destructuring
let nombreObj = objPersona.nombre
let apellidoObj = objPersona.apellido
console.log(nombreObj, apellidoObj)

// ===== Destructuring ===== \\

// ===== Spread ===== \\

function prueba1(a, ...otros) {
  console.log(a)
  console.log(otros)
}
console.log(prueba1(1, 2, 'string', { nombre: 'rey' }, [1, 2, 3], true))

let pruebaSuma = (a, b, c) => a + b + c
let arraySuma = [2, 2, 2]
console.log(pruebaSuma(...arraySuma))

// hacer una copia. De esta manera MODIFICA el array original
let arr1 = [1, 2, 3, 4]
let arrCopia1 = arr1
arrCopia1.push(5)
console.log(arr1)
console.log(arrCopia1)

// hacer una copia. De esta manera NO MODIFICA el array original
let arr2 = [1, 2, 3, 4]
let arrCopia2 = [...arr2]
arrCopia2.push(5)
console.log(arr2)
console.log(arrCopia2)

// se pueden concatenar
let arr3 = [...arr2, ...arrCopia2]
console.log(arr3)

// ===== Spread ===== \\

// ===== Promesas ===== \\

function timeOut(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}
var p = timeOut(1000)
  .then(() => console.log('se resolvio'))
  .catch(err => console.log('se rechazo', err))

timeOut()

// ===== Promesas ===== \\
