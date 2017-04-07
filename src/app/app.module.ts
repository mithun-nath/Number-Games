import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingExamplesComponent } from './databinding-examples/databinding-examples.component';
import { GuessNumberComponent } from './guess-number/guess-number.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestDirective } from './directives/test.directive';
import { Routes, RouterModule } from '@angular/router';

const gameRoutes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path: 'guess',
    component: GuessNumberComponent
  }
    ];

@NgModule({
  declarations: [
    AppComponent,
    DatabindingExamplesComponent,
    GuessNumberComponent,
    WelcomeComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(gameRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
