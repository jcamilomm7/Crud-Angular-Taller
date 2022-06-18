import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';


@Component({
  selector: 'app-crud-local-storage',
  templateUrl: './crud-local-storage.component.html',
  styleUrls: ['./crud-local-storage.component.scss'],
})
export class CrudLocalStorageComponent implements OnInit {
  titulo: string = 'Agregar empleado';

  //Se almacena todo lo que tenga el item de empleados en el localstorage
  empleados: Empleado[] = [];

  empleadoSeleccionado: Empleado = new Empleado();

  traerLocal() {
    const empleadosLocal = JSON.parse(localStorage.getItem('empleados')!);
    this.empleados = empleadosLocal;
  }

  agregarOrEditar() {
    if (this.empleadoSeleccionado.id === 0) {
      this.empleadoSeleccionado.id = this.empleados.length + 1;
      this.empleados.push(this.empleadoSeleccionado);
      localStorage.setItem('empleados', JSON.stringify(this.empleados));
    }

    this.empleados.map((empleado, index) => {
      if (empleado === this.empleadoSeleccionado) {
        this.empleados[index] = this.empleadoSeleccionado;
        localStorage.setItem('empleados', JSON.stringify(this.empleados));
      }
    });
    localStorage.setItem('empleados', JSON.stringify(this.empleados));

    this.empleadoSeleccionado = new Empleado();
    this.titulo = 'Agregar empleado';
  }


  /*Con el evento click del button de editar, llegara como parametro el empleado al cual el usuario quiere editar
    y se iguala a empleadoSeleccionado para que se visualicen los datos del empleado a actualziar  en el formulario
  */
  editar(empleado: Empleado) {
    this.titulo = 'Actualizar empleado';
    this.empleadoSeleccionado = empleado;
  }

  eliminar(empleado: Empleado) {
    if (confirm(`Estas seguro de eliminar al empleado: ${empleado.nombre}`)) {
      this.empleados = this.empleados.filter((x) => x != empleado);
      this.empleadoSeleccionado = new Empleado();
      localStorage.setItem('empleados', JSON.stringify(this.empleados));
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.traerLocal();
  }
}
