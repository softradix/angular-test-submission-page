import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps';
import { NgxPaginationModule } from 'ngx-pagination';

import { SubmissionsRoutingModule } from './submissions-routing.module';

import { SubmissionsComponent } from './submissions.component';
import { SubmissionsListComponent } from './submissions-list/submissions-list.component';
import { SubmissionsMapComponent } from './submissions-map/submissions-map.component';

@NgModule({
  declarations: [
    SubmissionsComponent,
    SubmissionsListComponent,
    SubmissionsMapComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    NgxPaginationModule,
    SubmissionsRoutingModule,
  ]
})
export class SubmissionsModule { }
