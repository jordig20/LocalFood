import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { StarRatingModule } from '../star-rating/star-rating.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { PerfilInformacionComponent } from './perfil-informacion/perfil-informacion.component';
import { CoreModule } from '../core/core-module.module';
import { MatExpansionModule } from '@angular/material/expansion';


const routes: Routes = [
  { path: '', component: PerfilComponent },
  { path: ':id', component: PerfilComponent },
];

@NgModule({
  declarations: [PerfilComponent, PerfilInformacionComponent],
  imports: [
    CommonModule,
    StarRatingModule,
    RouterModule.forChild(routes),
    MatSelectModule,
    FormsModule,
    MatTabsModule,
    CoreModule,
    MatExpansionModule,
  ],
  exports: [
    PerfilComponent,
    RouterModule,
  ],
})
export class PerfilModule {
}
