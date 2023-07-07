import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { ReactiveFormsModule } from '@angular/forms'; // For reactive forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListComponent } from './component/list/list.component';
import { OfficeComponent } from './component/office/office.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ListComponent, OfficeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
