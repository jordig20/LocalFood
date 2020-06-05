import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingColor } from '../star-rating/star-rating.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../core/definitions/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

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
  public user = {
    type: 'Chef amateur',

    name: 'George',
    city: 'Reus',
    adress: 'C/ calle n5',
    email: 'fdgdf.com',
    telf: '543321543',
    cp: '432982',
    mail: 'fgdfg',
    delivery: true,
    premiumUser: false,
    password: 'fdsfsd',
    finalValuation: 3,

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

  public updated: boolean;
  public edit: boolean;
  public data: User;
  public loaded: boolean = false;
  public oldData: any;
  public new: boolean;
  public type: string;
  public form: FormGroup;

  constructor(
    // private _api: ApiService,
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
  }

  ngOnInit(): void {
    const id: string = this._route.snapshot.paramMap.get('id');

    this.edit = false;
    this.data = this.user;
    this.buildForm();
    // this._api.get('user/' + id).subscribe(a => {
    //   this.data = a;
    //   this.buildForm();
    //   this.loaded = true;
    // });
  }


  onCancel(): void {
    this.data = JSON.parse(JSON.stringify(this.oldData));
    this.buildForm();
    this.edit = false;
  }

  onEdit(): void {
    this.edit = !this.edit;
    if (!this.edit) {
      this.onCancel();
    }
  }

  onSave(): void {
    const values: any = this.form.getRawValue();

    this.data.name = values.name;
    this.data.adress = values.adress;
    this.data.city = values.city;
    this.data.type = values.type;
    this.data.telf = values.telf;

    console.log(this.data);
    //this._api.put('user/' + this.data._id, this.data).subscribe(d => console.log('PUT', d));
    this.updated = true;
    this.edit = false;
  }


  onUpdatePerfil(event: any): void {
    this.data = event;
  }

  onCook() {

  }

  onProducts() {

  }

  onKey($event: KeyboardEvent) {

  }

  onSelect(_id: any) {

  }

  onUpdateSedes(event: any) {
    this.data = event;

  }

  private buildForm(): void {
    this.oldData = JSON.parse(JSON.stringify(this.data));
    this.form = this._fb.group({
      name: [this.data.name, Validators.required],
      city: [this.data.city, Validators.required],
      type: [this.data.type, Validators.required],
      adress: [this.data.adress, Validators.required],
      telf: [this.data.telf],

    });
  }
}

