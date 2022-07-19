import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ListComponent } from './todo/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { NetworkInterceptor } from './network.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    TodoComponent,
    ListComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
