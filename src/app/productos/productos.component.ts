import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  public productos: any[] = [
    {
      _id: 1,
      nombre: 'helado',
      tipo: 'postre',
      ingredientes: 'mucho amor',
    },
    {
      _id: 2,
      nombre: 'helado',
      tipo: 'postre',
      ingredientes: 'mucho amor',
    },
    {
      _id: 3,
      nombre: 'helado',
      tipo: 'postre',
      ingredientes: 'mucho amor',
    },
    {
      _id: 4,
      nombre: 'helado',
      tipo: 'postre',
      ingredientes: 'mucho amor',
    },
    {
      _id: 5,
      nombre: 'helado',
      tipo: 'postre',
      ingredientes: 'mucho amor',
    },
    {
      _id: 7,
      nombre: 'helado',
      tipo: 'postre',
      ingredientes: 'mucho amor',
    },
    {
      _id: 8,
      nombre: 'helado',
      tipo: 'postre',
      ingredientes: 'mucho amor',
    },
  ];

  constructor(private _router: Router,
              // private _api: ApiService,
  ) {
  }

  ngOnInit(): void {

    // this._api.get('/productos').subscribe(r => {
    //  this.productos = r;
    // });

  }

  onCook() {
    this._router.navigate(['cocineros']);
  }

  onSelect(id: any): void {
    this._router.navigate(['productos/' + id]);
  }
}
