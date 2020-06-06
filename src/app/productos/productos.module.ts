import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductosViewComponent } from './productos-view/productos-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingModule } from '../star-rating/star-rating.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from '../core/core-module.module';
import { ProductosCreateComponent } from './productos-create/productos-create.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: ':id', component: ProductosViewComponent },

];

@NgModule({
  declarations: [ProductosComponent, ProductosViewComponent, ProductosCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    StarRatingModule,
    MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  ],

  exports: [
    ProductosComponent,
    RouterModule,
  ],
})
export class ProductosModule {
}
