import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentDetailsComponent } from '../view-component-details/view-component-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewDesignComponent } from '../add-new-design/add-new-design.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ViewComponentDetailsComponent,
    AddNewDesignComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    MatRadioModule,
    // NgxPaginationModule,
    RouterModule,
  ],
  exports:[ViewComponentDetailsComponent,AddNewDesignComponent]
})
export class DesignModule { }
