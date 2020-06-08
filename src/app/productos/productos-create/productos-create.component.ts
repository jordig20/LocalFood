import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingColor } from '../../star-rating/star-rating.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'app/core/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-productos-create',
  templateUrl: './productos-create.component.html',
  styleUrls: ['./productos-create.component.scss'],
})
export class ProductosCreateComponent implements OnInit {

  starColor: StarRatingColor = StarRatingColor.accent;
  public isMine: Boolean;
  public producto: any = {};
  public form: FormGroup;
  @Input() tipo: any;
  public usuario: any = {};
  public ownerID: String = '5edc06cf4b07101ea49b5daf';
  public edit: boolean;
  public foodType: any[] = ['aperitivo', 'postre', 'japonesa', 'tradicional', 'fastFood'];
  public userType: string;
  public saved: boolean = false;
  private oldData: any[] = [];

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _api: ApiService,
              private _http: HttpClient,
              private _fb: FormBuilder,
              private  _user: AuthService,
  ) {
  }


  ngOnInit(): void {

    this._api.get('user/getone/' + this._user.getId()).subscribe(r => {
      this.userType = r[0].type;
      this.usuario = r[0];
    });

    this.producto = {
      name: null, description: null, ingredients: null, price: null, userId: null, finalValuations: null, imageUrl: null,
    };
    this.buildForm();
    this.edit = true;

  }


  onCook() {
    this._router.navigate(['cocineros']);
  }

  onProducts() {
    this._router.navigate(['productos']);
  }

  onProfile() {
    this._router.navigate(['perfil/' + this._user.getId()]);
  }


  onSave(): void {

    const values: any = this.form.getRawValue();

    this.producto.name = values.name;
    this.producto.price = values.price;
    this.producto.description = values.description;
    this.producto.ingredients = values.ingredients;
    this.producto.type = this.tipo.toLowerCase();
    this.producto.userId = this._user.getId();
    this.producto.finalValuations = null;
    //this.producto.imageUrl = values.imageUrl;
    this._api.post('product/add', this.producto).subscribe(() => {
      this.saved = true;
      this.ngOnInit();
    });
  }

  selectOption(event: any) {
    this.tipo = event.toLowerCase();
  }

  private buildForm(): void {
    this.oldData = JSON.parse(JSON.stringify(this.producto));
    this.form = this._fb.group({
      name: [this.producto.name, Validators.required],
      price: [this.producto.price, Validators.required],
      description: [this.producto.description, Validators.required],
      ingredients: [this.producto.ingredients, Validators.required],
      //imageUrl: [this.producto.imageUrl, Validators.required],

    });
  }

}
