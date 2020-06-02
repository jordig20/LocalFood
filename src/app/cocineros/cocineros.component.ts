import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocineros',
  templateUrl: './cocineros.component.html',
  styleUrls: ['./cocineros.component.scss'],
})
export class CocinerosComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  onProducts() {
    this._router.navigate(['productos']);

  }
}
