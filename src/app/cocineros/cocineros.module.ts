import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CocinerosComponent } from './cocineros.component';
import { CocinerosViewComponent } from './cocineros-view/cocineros-view.component';

const routes: Routes = [
  { path: '', component: CocinerosComponent },
  { path: ':id', component: CocinerosViewComponent },
];

@NgModule({
  declarations: [CocinerosComponent, CocinerosViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],

  exports: [
    CocinerosComponent,
    RouterModule,
  ],
})
export class CocinerosModule {
}
