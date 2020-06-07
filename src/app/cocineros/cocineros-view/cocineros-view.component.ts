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


}
