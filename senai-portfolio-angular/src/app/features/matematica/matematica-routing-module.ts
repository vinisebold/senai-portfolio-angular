import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mat1 } from './mat-1/tri-1';
import { Mat2 } from './mat-2/tri-2';
import { Mat3 } from './mat-3/tri-3';

const routes: Routes = [
  { path: 'trimestre-1', component: Mat1 },
  { path: 'trimestre-2', component: Mat2 },
  { path: 'trimestre-3', component: Mat3 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatematicaRoutingModule { }
