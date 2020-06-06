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
  public selected: any;

  public loaded: boolean = false;

  public productos: any[] = [];
  public prodCat: any[] = [];
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
    this.selected = event;
    this._api.get('product/' + this.search).subscribe(r => {
      this.prodCat = [];
      for (let x = 0; x < r.length; x++) {
        if (r[x].type === this.selected) {
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
}



