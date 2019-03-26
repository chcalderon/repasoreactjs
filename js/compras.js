import Tarea from './tareas.js';

export default class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre,prioridad);
        this.cantidad=cantidad;
    }
    mostrar(){
        super.mostrar();
        //console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
        //return (` y la cantidad de ${this.cantidad}`);
        console.log(` y la cantidad de ${this.cantidad}`);
    }
    hola(){
        console.log('Hola');
    }
}