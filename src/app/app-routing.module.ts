import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudLocalStorageComponent } from './crud-local-storage/crud-local-storage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'app-home', component: HomeComponent},
  { path: 'app-crud-local-storage', component: CrudLocalStorageComponent},
  {path: '**', pathMatch: 'full', redirectTo:'app-home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
