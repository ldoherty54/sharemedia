import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import routeConfig from './routes';
import { LoginComponent } from "./login.component";

@NgModule({
  declarations: [AppComponent, MediaComponent, LoginComponent],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routeConfig), HttpClientModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
