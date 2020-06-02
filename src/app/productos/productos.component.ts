import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingColor } from 'app/star-rating/star-rating.component';

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
  public productos: any[] = [
    {
      _id: 1,
      nombre: 'helado1',
      tipo: 'postre',
      ingredientes: 'mucho amor',
      descripcion: 'tengo calor',
      imagen: 'https://i.pinimg.com/474x/e2/7b/59/e27b5900c4922133d0fedf0448b5e034.jpg',
      valoracion: 3,
    },
    {
      _id: 2,
      nombre: 'helado2',
      tipo: 'postre',
      ingredientes: 'mucho amor',
      descripcion: 'tengo calor',
      imagen: 'https://i2.wp.com/abajatemperatura.es/wp-content/uploads/2018/06/cerezasABT4.jpg?resize=256%2C256&ssl=1',
      valoracion: 2,

    },
    {
      _id: 3,
      nombre: 'helado3',
      tipo: 'postre',
      ingredientes: 'mucho amor',
      descripcion: 'tengo calor',
      imagen: 'https://pbs.twimg.com/profile_images/378800000042558287/d3a87a1ff5ea5c06a02f5f418488d456.jpeg',
      valoracion: 1,

    },
    {
      _id: 4,
      nombre: 'helado4',
      tipo: 'postre',
      ingredientes: 'mucho amor',
      descripcion: 'tengo calor',
      imagen: 'https://lh3.googleusercontent.com/proxy/BIB80KlEZ0MOhiftr-TlPBNRWT00AnbLkiPk2HmWObSLkbDcEr-mMatHvr2DG0ne-GOLQyudFEyF_I0PspvkZDZdofQNmimv-Q',
      valoracion: 4,

    },
    {
      _id: 5,
      nombre: 'helado5',
      tipo: 'postre',
      ingredientes: 'mucho amor',
      descripcion: 'tengo calor',
      imagen: 'https://pbs.twimg.com/profile_images/425696446176706560/oYY4O4wZ.jpeg',
      valoracion: 5,

    },
    {
      _id: 7,
      nombre: 'helado7',
      tipo: 'postre',
      ingredientes: 'mucho amor',
      descripcion: 'tengo calor',
      imagen: 'https://cdn130.picsart.com/255900075002202.jpg?type=webp&to=crop&r=256',
      valoracion: 1,

    },
    {
      _id: 8,
      nombre: 'helado8',
      tipo: 'postre',
      ingredientes: 'mucho amor',
      descripcion: 'tengo calor',
      imagen: 'https://pbs.twimg.com/profile_images/421426270602145792/MBG-nTTE.jpeg',
      valoracion: 2,

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
