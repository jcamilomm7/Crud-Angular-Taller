import { Component, OnInit } from '@angular/core';

//importamos el servicio
import {EmpleadosService} from '../../services/empleados.service'
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup
  empleadoRef:any

  constructor(
    public empleadoService: EmpleadosService,
    public formBuilder:FormBuilder,
    public router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      nombre: [''],
      email: [''],

    })
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.empleadoService.getEmpleadoById(id).subscribe(res => {
      this.empleadoRef = res
      this.editForm = this.formBuilder.group({
        nombre: [this.empleadoRef.nombre],
        email: [this.empleadoRef.email]
      })
    })
  }

  onSubmit(){
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.empleadoService.updateEmpleado(this.editForm.value,id)
    this.router.navigate(['/app-crud-firebase'])
  }

}
