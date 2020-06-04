import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil-informacion',
  templateUrl: './perfil-informacion.component.html',
  styleUrls: ['./perfil-informacion.component.scss']
})
export class PerfilInformacionComponent {
  @Input() edit: boolean;
  @Input() data: any;
  @Input() form: FormGroup;
  @Output() updated: EventEmitter<any> = new EventEmitter<any>();


}
