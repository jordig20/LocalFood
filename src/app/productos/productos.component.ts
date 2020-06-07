import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingColor } from 'app/star-rating/star-rating.component';
import { ApiService } from 'app/core/services/api.service';
import { SenderService } from '../core/services/sender.service';
import { UseridService } from '../core/services/userid.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  rating: number = 3;
  starCount: number = 5;
  public ownerID: String = '5edc06cf4b07101ea49b5daf';

  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;


  public tipoProd: any[] = ['Postre', 'Japonesa', 'Tradicional', 'Aperitivo'];
  public selected: any;

  public loaded: boolean = false;

  public productos: any[] = [];
  public prodCat: any[] = [];
  public search: any;
  public userId: string;

  constructor(private _router: Router,
              private _api: ApiService,
              private _sender: SenderService,
              private _userId: UseridService,
  ) {
  }

  ngOnInit(): void {

    if (this._userId.userId != null) {
      console.log(this._userId.userId);
    } else {
      console.log('No Hay');
    }

    this.search = this._sender.serviceData;
    if (this.search !== undefined) {
      this.search = this.search.toLowerCase();
    }
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
    this.selected = event;
    this._api.get('product/' + this.search).subscribe(r => {
      this.prodCat = [];
      for (let x = 0; x < r.length; x++) {
        if (r[x].type === this.selected.toLowerCase()) {
          this.prodCat.push(r[x]);
        }
      }
      this.productos = this.prodCat;
    });
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

  onAdd() {
    this._api.get('user/getone/' + this.ownerID).subscribe(r => {
      if (r[0].type !== 'user') {

        this._router.navigate(['productos/new']);
      }
    });
  }
}



