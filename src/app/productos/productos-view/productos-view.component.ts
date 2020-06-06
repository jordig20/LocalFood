import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingColor } from '../../star-rating/star-rating.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'app/core/services/api.service';

@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html',
  styleUrls: ['./productos-view.component.scss'],
})
export class ProductosViewComponent implements OnInit {
  starColor: StarRatingColor = StarRatingColor.accent;
  public isMine: Boolean;
  public producto: any = {};
  public usuario: any = {};
  public ownerID: String = '5eda86e78a1e1905083b8439';

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _api: ApiService,
              private _http: HttpClient,
  ) {
  }


  ngOnInit(): void {
    const id: string = this._route.snapshot.paramMap.get('id');
    this._api.get('product/getone/' + id).subscribe(d => {
      this.producto = d[0];

      if (this.ownerID === this.producto.userId) {
        this.isMine = true;
        console.log('hola');
      }

      this._api.get('user/getone/' + this.producto.userId).subscribe(r => {
        this.usuario = r[0];
      });
    });
  }


  onCook() {
    this._router.navigate(['cocineros']);
  }

  onProducts() {
    this._router.navigate(['productos']);
  }

  onProfile() {
    this._router.navigate(['cocineros/' + this.producto.userId]);
  }


}
