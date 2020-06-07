import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil-informacion',
  templateUrl: './perfil-informacion.component.html',
  styleUrls: ['./perfil-informacion.component.scss'],
})
export class PerfilInformacionComponent {
  @Input() edit: boolean;
  @Input() data: any;
  @Input() tipo: any;
  @Input() form: FormGroup;
  @Input() receivedType: string;
  @Output() updated: EventEmitter<any> = new EventEmitter<any>();
  @Output() messageEvent = new EventEmitter<any>();
  public tipoCocinero: any[] = ['Homechef', 'Restaurant'];
  public type: any;

  selectOption(event: any) {
    this.messageEvent.emit(event.toLowerCase());
  }
}
