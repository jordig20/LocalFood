import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingColor } from '../../star-rating/star-rating.component';

@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html',
  styleUrls: ['./productos-view.component.scss'],
})
export class ProductosViewComponent implements OnInit {
  starColor: StarRatingColor = StarRatingColor.accent;
  public id: string;

  public producto = {
    _id: 1,
    nombrevendedor: 'George',
    imagenVendedor: 'https://i.pinimg.com/474x/e2/7b/59/e27b5900c4922133d0fedf0448b5e034.jpg',
    nombre: 'SUSHI',
    tipo: 'postre',
    ingredientes: 'mucho amor',
    descripcion: 'Comida japonesa recién elaborada con productos de primera calidad, para llevar o a domicilio. ',
    imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/15/05/03/32/sashimi-e-sushi-variados.jpg',
    valoracion: 3,
  };

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              //private _api: ApiService,
  ) {
  }


  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
  }


  onCook() {
    this._router.navigate(['cocineros']);
  }

  onProducts() {
    this._router.navigate(['productos']);
  }

  onProfile() {

    // for(this.productos) if
    this._router.navigate(['cocineros/' + this.id]);
  }


}
