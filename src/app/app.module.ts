import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ToggleButtonModule, SelectButtonModule ],
  declarations: [ AppComponent, ButtonsComponent, ToolbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
