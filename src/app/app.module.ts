import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [AppComponent, FormInputComponent, AddButtonComponent, CurrentUserComponent, DataTableComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
