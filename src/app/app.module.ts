import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentPageComponent,
    HeaderComponent,
    LoginComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
