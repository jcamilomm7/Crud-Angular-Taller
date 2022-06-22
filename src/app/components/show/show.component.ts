import { Component, OnInit } from '@angular/core';

//importamos el modelo
import { EmpleadoFirebase } from 'src/app/models/empleadoFirebase';

//importar servicio
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  empleados: EmpleadoFirebase[];

  constructor(private empleadoService: EmpleadosService) {}

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe((res) => {
      this.empleados = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as EmpleadoFirebase)
        };
      });
    });
  }

  delete = (empleado) => this.empleadoService.deleteEmpleado(empleado)
}
