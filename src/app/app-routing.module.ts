import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: ComponentsComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'examples/landing', component: LandingComponent },
  { path: 'examples/login', component: LoginComponent },
  { path: 'examples/profile', component: ProfileComponent },

  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
  { path: 'cocineros', loadChildren: () => import('./cocineros/cocineros.module').then(m => m.CocinerosModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
