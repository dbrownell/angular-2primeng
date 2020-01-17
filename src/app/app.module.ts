import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ToggleButtonModule ],
  declarations: [ AppComponent, ButtonsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
