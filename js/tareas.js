// // const nombreTarea = 'Pasear al perro';

// // export default nombreTarea;
// export const nombreTarea = 'Pasear al perro';

// // Exportar una funcion
// export const crearTarea = (tarea, urgencia) => {
//     return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
// }

// export const tareaCompletada = () => {console.log('La tarea se completó');};

// Escribir clases

// export default class Tarea {
//     constructor(nombre, prioridad){
//         this.nombre= nombre;
//         this.prioridad= prioridad;
//     }
//     mostrar(){
//         console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//         //return (`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//     }
// }

// crear objetos

// let tarea1 = new Tarea('Aprender javascript','alta');
// let tarea2 = new Tarea('Preparar cafe','alta');
// let tarea3 = new Tarea('Pasear al perro','media');
// let tarea4 = new Tarea('Conocer a los suegros','baja');


// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);
// console.log(tarea4);
// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());

// Heredar clase
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

// compras

//let compra1= new ComprasPendientes('Jabon','Urgente', 3);
//console.log(compra1);
// console.log(compra1.mostrar());
// compra1.mostrar();


export default class Tarea {
    constructor(nombre, prioridad){
        this.nombre= nombre;
        this.prioridad= prioridad;
    }
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
        //return (`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}