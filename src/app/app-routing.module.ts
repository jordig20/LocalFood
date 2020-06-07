import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { SignupComponent } from './signup/signup.component';
import { ComponentsComponent } from './components/components.component';
import { AuthGuard } from './guards/auth.guard';
import { TermsComponent } from './terms/terms.component';
import { ProductosCreateComponent } from './productos/productos-create/productos-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: ComponentsComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'productos/new', component: ProductosCreateComponent },
  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
  { path: 'cocineros', loadChildren: () => import('./cocineros/cocineros.module').then(m => m.CocinerosModule) },
  { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule), canActivate: [AuthGuard] },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
