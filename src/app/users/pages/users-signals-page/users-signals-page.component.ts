import { Component, Injector, OnInit, computed, effect, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs';
import { User } from '../../interfaces/users';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from '../../components/user-modal/user-modal.component';


@Component({
  selector: 'app-users-signals-page',
  templateUrl: './users-signals-page.component.html',
  styleUrls: ['./users-signals-page.component.scss']
})
export class UsersSignalsPageComponent implements OnInit{

  usersService = inject(UsersService);
  modalService = inject(NgbModal);
  users = signal<User[]>([]);
  currentPage = signal(1);
  labelTotalUsers = computed( () => `Total de usuarios:  ${this.users().length}`);

  constructor(private injector: Injector) {

  }


  ngOnInit(): void {
    console.time();
    this.loadPage(this.currentPage());
    effect(() => {
      console.log(`Total usuarios ${this.users().length}`);
    }, {injector: this.injector});
  }

  loadPage( page: number) {

    this.usersService.loadPage(page)
    .pipe(
      filter( users => users.length > 0)
      ).subscribe( newUsers => {
        this.users.update( currentUsers => [...currentUsers, ...newUsers]);
        // this.users.mutate( currentUsers => currentUsers.push(...newUsers));
        this.currentPage.set(page);
    })


  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe(data => {
      console.log(data);
      console.log(this.users())

      this.users.update(currentUsers => currentUsers.filter(user => user.id !== id));

    })

  }

  open(id: number) {
		const modalRef = this.modalService.open(UserModalComponent);
		modalRef.componentInstance.id = id;
	}

  demo() {
    console.log('demo');
  }

}
