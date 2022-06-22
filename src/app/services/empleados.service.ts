import { Injectable } from '@angular/core';

//importamos los modulos para DB con firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EmpleadoFirebase } from '../models/empleadoFirebase';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor(private angularFirestore: AngularFirestore) {}

  //Metodos para el CRUD

 getEmpleados() {
    return this.angularFirestore.collection('empleados').snapshotChanges();
  }

  getEmpleadoById(id) {
    return this.angularFirestore.collection('empleados').doc(id).valueChanges();
  }


  //pruerba juan pablo
/*   addCategoria(empleado: EmpleadoFirebase){
    this.db.collection('empleados').doc().set({
      "nombre": empleado.nombre,
      "email": empleado.email
    }).then(respuesta => {
      console.log(respuesta);
    }).catch((error)=>{
      console.log(error)
    });
  }
 */
 agregarEmpleado(empleado: EmpleadoFirebase) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('empleados')
        .add(empleado)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  updateEmpleado(empleado: EmpleadoFirebase, id) {
    return this.angularFirestore.collection('empleados').doc(id).update({
      nombre: empleado.nombre,
      email: empleado.email,
    });
  }

  deleteEmpleado(empleadoFirebase) {
    return this.angularFirestore
      .collection('empleados')
      .doc(empleadoFirebase.id)
      .delete();
  }
}
