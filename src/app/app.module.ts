import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSearchComponent } from './main-search/main-search.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './results/results.component';
import { SignupComponent } from './signup/signup.component';
import { EditComponent } from './edit/edit.component';
import { RemoveComponent } from './remove/remove.component';
import { ToastrModule } from 'ngx-toastr';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSearchComponent,
    ResultsComponent,
    SignupComponent,
    EditComponent,
    RemoveComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 3000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
