import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cocineros-view',
  templateUrl: './cocineros-view.component.html',
  styleUrls: ['./cocineros-view.component.scss'],
})
export class CocinerosViewComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit(): void {
    const id: string = this._route.snapshot.paramMap.get('id');

  }

}
