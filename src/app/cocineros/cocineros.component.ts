import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingColor } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-cocineros',
  templateUrl: './cocineros.component.html',
  styleUrls: ['./cocineros.component.scss'],
})
export class CocinerosComponent implements OnInit {

  rating: number = 3;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;

  public tipoCocinero: any[] = ['Cocinero profesional', 'Restaurante', 'Cocinero amateur'];
  public search: any;
  public selected: any;

  public cocineros: any[] = [
    {
      _id: 1,
      nombre: 'Restaurante 1',
      tipo: 'Restaurante',
      direccion: 'cale blablabal',
      descripcion: 'hola',
      imagen: 'https://i.pinimg.com/474x/e2/7b/59/e27b5900c4922133d0fedf0448b5e034.jpg',
      valoracion: 3,
    },
    {
      _id: 2,
      nombre: 'Chef1',
      tipo: 'Cocinero Profesional',
      direccion: 'fgfdgdf',
      descripcion: 'rewrewrew',
      imagen: 'https://i2.wp.com/abajatemperatura.es/wp-content/uploads/2018/06/cerezasABT4.jpg?resize=256%2C256&ssl=1',
      valoracion: 2,

    },
    {
      _id: 3,
      nombre: 'Restaurante 2',
      tipo: 'Restaurante',
      direccion: 'fsgfdgdf',
      descripcion: 'rewrew',
      imagen: 'https://pbs.twimg.com/profile_images/378800000042558287/d3a87a1ff5ea5c06a02f5f418488d456.jpeg',
      valoracion: 1,

    },
    {
      _id: 4,
      nombre: 'Chef 2',
      tipo: 'Cocinero amateur',
      direccion: 'gfdgdgd',
      descripcion: 'tengo calor',
      imagen: 'https://lh3.googleusercontent.com/proxy/BIB80KlEZ0MOhiftr-TlPBNRWT00AnbLkiPk2HmWObSLkbDcEr-mMatHvr2DG0ne-GOLQyudFEyF_I0PspvkZDZdofQNmimv-Q',
      valoracion: 4,
    },
  ];


  constructor(private _router: Router,
              //private _api: ApiService,
  ) {
  }

  ngOnInit(): void {

    // this._api.get('/productos').subscribe(r => {
    //  this.cocineros = r;
    // });

  }

  onProducts() {
    this._router.navigate(['productos']);
  }

  onSelect(id: any): void {
    this._router.navigate(['cocineros/' + id]);
  }



  selectOption(event: any) {
    this.selected = event;
    if (this.selected === 'Restaurante') {
      this.cocineros = [
        {
          _id: 1,
          nombre: 'Restaurante 1',
          tipo: 'Restaurante',
          direccion: 'cale blablabal',
          descripcion: 'hola',
          imagen: 'https://i.pinimg.com/474x/e2/7b/59/e27b5900c4922133d0fedf0448b5e034.jpg',
          valoracion: 3,
        },
        {
          _id: 3,
          nombre: 'Restaurante 2',
          tipo: 'Restaurante',
          direccion: 'fsgfdgdf',
          descripcion: 'rewrew',
          imagen: 'https://pbs.twimg.com/profile_images/378800000042558287/d3a87a1ff5ea5c06a02f5f418488d456.jpeg',
          valoracion: 1,

        },
      ];
    }

    if (event === 'Cocinero profesional') {
      this.cocineros = [
        {
          _id: 2,
          nombre: 'Chef1',
          tipo: 'Cocinero Profesional',
          direccion: 'fgfdgdf',
          descripcion: 'rewrewrew',
          imagen: 'https://i2.wp.com/abajatemperatura.es/wp-content/uploads/2018/06/cerezasABT4.jpg?resize=256%2C256&ssl=1',
          valoracion: 2,

        },
      ];
    }

    if (event === 'Cocinero amateur') {
      this.cocineros = [
        {
          _id: 4,
          nombre: 'Chef 2',
          tipo: 'Cocinero amateur',
          direccion: 'gfdgdgd',
          descripcion: 'tengo calor',
          imagen: 'https://lh3.googleusercontent.com/proxy/BIB80KlEZ0MOhiftr-TlPBNRWT00AnbLkiPk2HmWObSLkbDcEr-mMatHvr2DG0ne-GOLQyudFEyF_I0PspvkZDZdofQNmimv-Q',
          valoracion: 4,
        },
      ];
    }


    console.log(event);
  }

  onKey(event) {
    const inputValue = event.target.value;
    this.search = event.target.value;

    if (inputValue === 'barcelona') {
      this.cocineros = [
        {
          _id: 4,
          nombre: 'Chef 2',
          tipo: 'Cocinero amateur',
          direccion: 'gfdgdgd',
          descripcion: 'tengo calor',
          imagen: 'https://lh3.googleusercontent.com/proxy/BIB80KlEZ0MOhiftr-TlPBNRWT00AnbLkiPk2HmWObSLkbDcEr-mMatHvr2DG0ne-GOLQyudFEyF_I0PspvkZDZdofQNmimv-Q',
          valoracion: 4,
        },
      ];

      console.log(inputValue);
    } else if (inputValue === 'tarragona') {
      this.cocineros = [

        {
          _id: 1,
          nombre: 'Restaurante 1',
          tipo: 'Restaurante',
          direccion: 'cale blablabal',
          descripcion: 'hola',
          imagen: 'https://i.pinimg.com/474x/e2/7b/59/e27b5900c4922133d0fedf0448b5e034.jpg',
          valoracion: 3,
        },
        {
          _id: 3,
          nombre: 'Restaurante 2',
          tipo: 'Restaurante',
          direccion: 'fsgfdgdf',
          descripcion: 'rewrew',
          imagen: 'https://pbs.twimg.com/profile_images/378800000042558287/d3a87a1ff5ea5c06a02f5f418488d456.jpeg',
          valoracion: 1,

        },
      ];
    }

  }
}
