import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { SignupComponent } from "./signup/signup.component";
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',                component: ComponentsComponent },
  { path: 'nucleoicons',          component: NucleoiconsComponent },
  { path: 'examples/landing',     component: LandingComponent },
  { path: 'login',                component: LoginComponent },
  { path: 'signup',               component: SignupComponent },
  { path: 'examples/profile',     component: ProfileComponent },

  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
  { path: 'cocineros', loadChildren: () => import('./cocineros/cocineros.module').then(m => m.CocinerosModule) },
  { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
