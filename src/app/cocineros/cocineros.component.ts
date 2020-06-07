import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingColor } from '../star-rating/star-rating.component';
import { ApiService } from 'app/core/services/api.service';
import { HttpClient } from '@angular/common/http';
import { SenderService } from '../core/services/sender.service';

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
  public tipoCocinero: any[] = ['Homechef', 'Restaurant'];
  public search: any;
  public selected: any;

  public cocineros: any[] = [];


  constructor(private _router: Router,
              private _api: ApiService,
              private _http: HttpClient,
              private _sender: SenderService,
  ) {
  }

  ngOnInit(): void {
    this.search = this._sender.serviceData;
    this._api.get('user/allusers/' + this.search).subscribe(r => {
      this.cocineros = r;
      console.log(this.search);
    });

  }

  onProducts() {
    this._router.navigate(['productos']);
  }

  onSelect(id: any): void {
    this._router.navigate(['cocineros/' + id]);
  }


  selectOption(event: any) {
    this.selected = event;
    this._api.get('user/' + this.search + '/' + this.selected.toLowerCase()).subscribe(r => {
      this.cocineros = r;
      console.log(this.cocineros);
    });


    console.log(event);
  }

  onKey(event) {
    const inputValue = event.target.value;
    this.search = event.target.value;
    this._sender.serviceData = this.search;

    this._api.get('user/allusers/' + this.search).subscribe(r => {
      this.cocineros = r;
      console.log(this.cocineros);

    });

  }
}
