import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionsMapComponent } from './submissions-map/submissions-map.component';

import { SubmissionsComponent } from './submissions.component';

const routes: Routes = [
  { path: '', component: SubmissionsComponent },
  { path: 'map', component: SubmissionsMapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionsRoutingModule { }
