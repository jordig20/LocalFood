import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingColor } from '../../star-rating/star-rating.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'app/core/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html',
  styleUrls: ['./productos-view.component.scss'],
})
export class ProductosViewComponent implements OnInit {
  starColor: StarRatingColor = StarRatingColor.accent;
  public isMine: Boolean;
  public producto: any = {};
  public form: FormGroup;

  public usuario: any = {};
  public ownerID: String = '5eda644c443a4b03d48848ee';
  public edit: boolean;
  public saved: boolean = false;
  private oldData: any[] = [];

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _api: ApiService,
              private _http: HttpClient,
              private _fb: FormBuilder,
              private _user: AuthService,
  ) {
  }


  ngOnInit(): void {
    const id: string = this._route.snapshot.paramMap.get('id');
    this.edit = false;

    this._api.get('product/getone/' + id).subscribe(a => {
      this.producto = a[0];
      this.buildForm();

      if (this._user.getId() === this.producto.userId) {
        this.isMine = true;
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

  onSave(): void {

    const values: any = this.form.getRawValue();

    this.producto.name = values.name;
    this.producto.price = values.price;
    this.producto.description = values.description;
    this.producto.ingredients = values.ingredients;

    this._api.put('product/update/' + this.producto._id, this.producto).subscribe(d => {
      this.saved = true;
    });

  }


  private buildForm(): void {
    this.oldData = JSON.parse(JSON.stringify(this.producto));
    this.form = this._fb.group({
      name: [this.producto.name, Validators.required],
      price: [this.producto.price, Validators.required],
      description: [this.producto.description, Validators.required],
      ingredients: [this.producto.ingredients, Validators.required],
    });
  }
}
