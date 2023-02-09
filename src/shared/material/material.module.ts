import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    TextFieldModule,
    MatIconModule
  ],
  exports:[
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    TextFieldModule,
    MatIconModule
  ]
})
export class MaterialModule { }
