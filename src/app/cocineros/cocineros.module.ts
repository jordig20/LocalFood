import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CocinerosComponent } from './cocineros.component';
import { CocinerosViewComponent } from './cocineros-view/cocineros-view.component';
import { StarRatingModule } from '../star-rating/star-rating.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CocinerosComponent },
  { path: ':id', component: CocinerosViewComponent },
];

@NgModule({
  declarations: [CocinerosComponent, CocinerosViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StarRatingModule,
    MatSelectModule,
    FormsModule,
  ],

  exports: [
    CocinerosComponent,
    RouterModule,
  ],
})
export class CocinerosModule {
}
