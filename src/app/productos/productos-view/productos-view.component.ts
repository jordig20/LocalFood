import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html',
  styleUrls: ['./productos-view.component.scss'],
})
export class ProductosViewComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _router: Router,
  ) {
  }

  ngOnInit(): void {
    const id: string = this._route.snapshot.paramMap.get('id');
  }

}
