import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cn1 } from './cn-1/tri-1';
import { Cn2 } from './cn-2/tri-2';
import { Cn3 } from './cn-3/tri-3';

const routes: Routes = [
  { path: 'trimestre-1', component: Cn1 },
  { path: 'trimestre-2', component: Cn2 },
  { path: 'trimestre-3', component: Cn3 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CienciasNaturezaRoutingModule { }
