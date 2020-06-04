import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingColor } from '../../star-rating/star-rating.component';

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

  public usuario = {
    _id: 1,
    nombrevendedor: 'George',
    imagenVendedor: 'https://img.bleacherreport.net/img/images/photos/003/805/657/hi-res-733c26e765c68e4d57c14dbd025f49eb_crop_north.jpg?1556575586&w=3072&h=2048',
    tipo: 'Chef amateur',
    ciudad: 'Reus',
    direccion: 'C/ calle n5',
    descripcion: 'Chef de reus',
    email: 'fdgdf.com',
    valoracion: 3,
    telefono: '543321543',

  };


  public productos: any[] = [
    {
      _id: 1,
      nombrevendedor: 'George',
      imagenVendedor: 'https://i.pinimg.com/474x/e2/7b/59/e27b5900c4922133d0fedf0448b5e034.jpg',
      nombre: 'SUSHI',
      tipo: 'postre',
      ingredientes: 'mucho amor',
      descripcion: 'Comida japonesa recién elaborada con productos de primera calidad, para llevar o a domicilio. ',
      imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/15/05/03/32/sashimi-e-sushi-variados.jpg',
      valoracion: 3,
    },
    {
      _id: 2,
      nombre: 'helado2',
      tipo: 'aperitivo',
      ingredientes: 'mucho amor',
      descripcion: 'tengo calor',
      imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/07/helado.jpg',
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
    {
      _id: 4,
      nombre: 'helado4',
      tipo: 'japonesa',
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

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              //private _api: ApiService
  ) {
  }

  ngOnInit(): void {
    const id: string = this._route.snapshot.paramMap.get('id');
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
