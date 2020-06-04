import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {SignupComponent} from "./signup/signup.component";

const routes: Routes =[
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',                component: ComponentsComponent },
  { path: 'nucleoicons',          component: NucleoiconsComponent },
  { path: 'examples/landing',     component: LandingComponent },
  { path: 'login',                component: LoginComponent },
  { path: 'signup',               component: SignupComponent },
  { path: 'examples/profile',     component: ProfileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
