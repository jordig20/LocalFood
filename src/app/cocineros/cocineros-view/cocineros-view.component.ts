import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingColor } from '../../star-rating/star-rating.component';
import { ApiService } from 'app/core/services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cocineros-view',
  templateUrl: './cocineros-view.component.html',
  styleUrls: ['./cocineros-view.component.scss'],
})
export class CocinerosViewComponent implements OnInit {
  rating: number = 3;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;

  public usuario: any = {};
  public productos: any[] = [];

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _api: ApiService,
              private _http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    const id: string = this._route.snapshot.paramMap.get('id');
    this._api.get('product/all/' + id).subscribe(r => {
      this.productos = r;
    });
    this._api.get('user/getone/' + id).subscribe(d => {
      this.usuario = d[0];
    });
  }


  onCook() {
    this._router.navigate(['cocineros']);
  }

  onProducts() {
    this._router.navigate(['productos']);
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
    const inputValue = event.target.value;

    if (inputValue === 'barcelona') {
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

      console.log(inputValue);
    } else if (inputValue === 'tarragona') {
      this.productos = [

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
          tipo: 'tradicional',
          ingredientes: 'mucho amor',
          descripcion: 'tengo calor',
          imagen: 'https://cdn130.picsart.com/255900075002202.jpg?type=webp&to=crop&r=256',
          valoracion: 1,

        },
        {
          _id: 8,
          nombre: 'helado8',
          tipo: 'fatfood',
          ingredientes: 'mucho amor',
          descripcion: 'tengo calor',
          imagen: 'https://pbs.twimg.com/profile_images/421426270602145792/MBG-nTTE.jpeg',
          valoracion: 2,

        },
      ];
    }

  }
}
