// var aprendiendo = true;
// aprendiendo = false;
// console.log(aprendiendo);

//Arreglos y map

// carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// carrito.map(producto =>{
//     return `El producto es ${producto}`;
// });

// const persona = {
//     nombre: 'Juan',
//     profesion: 'Desarrollador Web',   
//     edad: 500
// }

// console.log(persona);
// console.log(Object.keys(persona));

// let lenguajes = ['Javascript', 'Java', 'Python'];
// let frameworks = ['Django', 'Angular', 'VueJS'];

// //let combinacion = lenguajes.concat(frameworks);
// let combinacion = [...lenguajes,...frameworks];
// console.log(combinacion);

// // Dar vuelta el arreglo
// let inverso = lenguajes.reverse();

// console.log(inverso);
// //Vuelvo a dejar en orden
// lenguajes.reverse();
// let [ultimo] = lenguajes.reverse();

// console.log(ultimo);

// Suma de numeros
// function suma(a,b,c) {
//     console.log(a+b+c);
// }

// const numeros = [1,2,3];

// suma (...numeros);

// const personas = [
//     {nombre:'Juan' , edad: 23 , aprendiendo: 'Javascript'},
//     {nombre:'Pablo' , edad: 35 , aprendiendo: 'Php'},
//     {nombre:'Alejandra' , edad: 18 , aprendiendo: 'AdobeXD'},
//     {nombre:'Caren' , edad: 21 , aprendiendo: 'Phyton'},
//     {nombre:'Miguel' , edad: 30 , aprendiendo: 'ReactJS'},
// ]

// console.log(personas);
// //a)
// // personas.filter(persona => { 
// //     //console.log(persona);
// //     return persona.edad > 28;
// // });
// //b)
// const mayores = personas.filter(persona => { 
//     return persona.edad > 28;
// });

// console.log(mayores);

// const alejandra = personas.find(persona => {
//     return persona.nombre ==='Alejandra';
// })
// console.log(`Alejandra esta aprendiendo ${alejandra.aprendiendo}`);

// // reduce para obtener el total de las edades por ejemplo
// let total = personas.reduce((edadTotal, persona) => {
//     return edadTotal + persona.edad;
// }, 0);
// console.log(total);


// //Promises
// const aplicarDescuento = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let descuento = true;

//         if (descuento){
//             resolve('Ta listo el descuento');
//         } else {
//             reject("No hay descuento");
//         }

//     }, 3000);
// });

// //No reflejar completo
// //console.log (aplicarDescuento);

// aplicarDescuento.then ( resultado => {
//     console.log(resultado);
// }).catch(error => {
//     console.log(`error ${error}`);
// })

// const decargarUsuarios = cantidad => new Promise((resolve,reject)=> {
//     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

//     //Llamado a Ajax
//     const xhr = new XMLHttpRequest();

//     // Abrir la conexion
//     xhr.open('GET', api, true);

//     // on load
//     xhr.onload = () => {
//         if (xhr.status === 200){
//             resolve ( JSON.parse(xhr.responseText).results );
//         } else {
//             reject(Error(xhr.statusText));
//         }

//     }

//     xhr.onerror = (error) => reject(error);

//     xhr.send();

// });

//console.log(decargarUsuarios(20));

// decargarUsuarios(20)
//     .then(
//         miembros => console.log(miembros),
//         error => console.error(`Error ${error}`)
//     )

// decargarUsuarios(30)
//     .then(
//         miembros => imprimirHtml(miembros),
//         error => console.error(`Error ${error}`)
//     )
//Funcion ejemplo 1
// function imprimirHtml(usuarios){
//     console.log(usuarios);
//     usuarios.forEach(usuario => {
//         console.log(usuario);
//     });
// }
//Funcion ejemplo completo
// function imprimirHtml(usuarios){
//     let html = '';
//      usuarios.forEach(usuario => {
//         html += `
//             <li>
//                 Nombre: ${usuario.name.first} ${usuario.name.last}
//                 País: ${usuario.nat}
//                 imagen:
//                     <img src="${usuario.picture.medium}"/>
//             </li>
//         `;
//     });
//     const contenedorApp = document.querySelector('#app');
//     contenedorApp.innerHTML = html;
// }

// // Escribir clases

// class Tarea {
//     constructor(nombre, prioridad){
//         this.nombre= nombre;
//         this.prioridad= prioridad;
//     }
//     mostrar(){
//         console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//         //return (`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//     }
// }

// // crear objetos

// let tarea1 = new Tarea('Aprender javascript','alta');
// let tarea2 = new Tarea('Preparar cafe','alta');
// let tarea3 = new Tarea('Pasear al perro','media');
// let tarea4 = new Tarea('Conocer a los suegros','baja');


// // console.log(tarea1);
// // console.log(tarea2);
// // console.log(tarea3);
// // console.log(tarea4);
// // console.log(tarea1.mostrar());
// // console.log(tarea2.mostrar());
// // console.log(tarea3.mostrar());
// // console.log(tarea4.mostrar());

// // Heredar clase
// class ComprasPendientes extends Tarea {
//     constructor(nombre, prioridad, cantidad) {
//         super(nombre,prioridad);
//         this.cantidad=cantidad;
//     }
//     mostrar(){
//         super.mostrar();
//         //console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//         //return (` y la cantidad de ${this.cantidad}`);
//         console.log(` y la cantidad de ${this.cantidad}`);
//     }
// }

// // compras

// let compra1= new ComprasPendientes('Jabon','Urgente', 3);
// //console.log(compra1);
// // console.log(compra1.mostrar());
// compra1.mostrar();

// import {nombreTarea} from './tareas.js';
// import nombreTarea from './tareas.js';

// console.log(nombreTarea);

// import {nombreTarea, crearTarea, tareaCompletada} from './tareas.js';

// console.log(nombreTarea);

// const tarea1 = crearTarea('pasear al perro', 'media');
// console.log(tarea1);
// tareaCompletada();

import Tareas from './tareas.js';
import ComprasPendientes from './compras.js';

const tarea1= new Tareas('Aprender Javascript', 'urgente');

console.log(tarea1);

tarea1.mostrar();

const compra1= new ComprasPendientes('Pizza','Urgente', 2);
console.log(compra1);
compra1.mostrar();
compra1.hola();