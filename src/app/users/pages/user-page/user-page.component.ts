import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users';
import { Observable, filter, tap } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  users: User[] = [];
  currentPage: number = 1;
  disableButton: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.usersService.loadPage(page).pipe(filter((users) => users.length > 0)).subscribe(data => {
      this.users.push(...data);
      this.currentPage = page;
    });
  }
}
