import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentFirstComponent } from './parent-first/parent-first.component';
import { ParentSecondComponent } from './parent-second/parent-second.component';
import { ChildOneComponent } from './parent-first/child-one/child-one.component';
import { ChildTwoComponent } from './parent-first/child-two/child-two.component';
import { ChildThreeComponent } from './parent-second/child-three/child-three.component';
import {LoggerService} from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentFirstComponent,
    ParentSecondComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
