import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'budega-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
