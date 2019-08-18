import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ListfilterPipe } from './pipes/listfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListfilterPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [ListfilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
