import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LandingComponent } from './landing/landing.component'
import { ResultComponent } from './result/result.component';
const routes: Routes = [
  { path:'welcome', component: WelcomeComponent },
  { path:'landing', component:LandingComponent },
  { path:'result', component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
