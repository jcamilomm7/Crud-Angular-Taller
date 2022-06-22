import { Component, OnInit } from '@angular/core';

//importamos el servicio
import {EmpleadosService} from '../../services/empleados.service'
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public empleadoForm: FormGroup

  constructor(
    public empleadoService: EmpleadosService,
    public formBuilder:FormBuilder,
    public router: Router
  ) {
    this.empleadoForm = this.formBuilder.group({
      nombre : [''],
     email : [''],
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.empleadoService.agregarEmpleado(this.empleadoForm.value)
    this.router.navigate(['/app-crud-firebase'])
  }

}
