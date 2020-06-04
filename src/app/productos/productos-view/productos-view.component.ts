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

  public producto = {
    _id: 1,
    nombrevendedor: 'George Bararu',
    imagenVendedor: 'https://i.pinimg.com/474x/e2/7b/59/e27b5900c4922133d0fedf0448b5e034.jpg',
    nombre: 'Comida comida comida',
    tipo: 'postre',
    ingredientes: 'mucho amor',
    descripcion: 'Filtro de Gas-oil Purflux C518. El motivo de la venta es por equivocación a la hora de comprar y se me paso el tiempo de devolución.',
    imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/15/05/03/32/sashimi-e-sushi-variados.jpg',
    valoracion: 3,
  };

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              //private _api: ApiService,
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

  onProfile() {
    this._router.navigate(['productos']);
  }


}
