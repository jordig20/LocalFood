import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingColor } from 'app/star-rating/star-rating.component';
import { ApiService } from 'app/core/services/api.service';
import { SenderService } from '../core/services/sender.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  rating: number = 3;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;

  public tipoProd: any[] = ['postre', 'japonesa', 'tradicional', 'aperitivo'];

  public loaded: boolean = false;

  public productos: any[] = [];
  public search: any;

  constructor(private _router: Router,
              private _api: ApiService,
              private _sender: SenderService) {
  }

  ngOnInit(): void {
    this.search = this._sender.serviceData;

    this._api.get('product/' + this.search).subscribe(r => {
      this.productos = r;

    });

  }

  onCook() {
    this._router.navigate(['cocineros']);
  }

  onSelect(id: any): void {
    this._router.navigate(['productos/' + id]);
  }

  selectOption(event: any) {
    if (event === 'postre') {
      this.productos = [
        {
          _id: 1,
          nombre: 'helado1',
          tipo: 'postre',
          ingredientes: 'mucho amor',
          descripcion: 'tengo calor',
          imagen: 'https://i.pinimg.com/474x/e2/7b/59/e27b5900c4922133d0fedf0448b5e034.jpg',
          valoracion: 3,
        },
      ];
    }

    if (event === 'aperitivo') {
      this.productos = [
        {
          _id: 2,
          nombre: 'helado2',
          tipo: 'aperitivo',
          ingredientes: 'mucho amor',
          descripcion: 'tengo calor',
          imagen: 'https://i2.wp.com/abajatemperatura.es/wp-content/uploads/2018/06/cerezasABT4.jpg?resize=256%2C256&ssl=1',
          valoracion: 2,

        },
        {
          _id: 3,
          nombre: 'helado3',
          tipo: 'pescado',
          ingredientes: 'mucho amor',
          descripcion: 'tengo calor',
          imagen: 'https://pbs.twimg.com/profile_images/378800000042558287/d3a87a1ff5ea5c06a02f5f418488d456.jpeg',
          valoracion: 1,

        },
      ];
    }


    console.log(event);
  }

  onKey(event) {
    this.search = event.target.value;
    this._sender.serviceData = this.search;
    if (this.search !== '') {
      this._api.get('product/' + this.search).subscribe(r => {
        this.productos = r;
      });
    }
  }
}
