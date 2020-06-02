import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  onCook() {
    this._router.navigate(['cocineros']);
  }


}
