import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductosViewComponent } from './productos-view/productos-view.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: ':id', component: ProductosViewComponent },

];

@NgModule({
  declarations: [ProductosComponent, ProductosViewComponent, ProductosViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],

  exports: [
    ProductosComponent,
    RouterModule,
  ],
})
export class ProductosModule {
}
