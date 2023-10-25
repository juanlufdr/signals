import {
  Component,
  Input,
  OnInit,
  effect,
  signal
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  @Input() id!: number;
  user = signal<User>({} as User);
  count = signal(0);
  isTrue = signal(false);
  form!: FormGroup;
  userInfo!: User;
  updateValue = effect((event) => {
    console.log(event);
    this.userInfo = this.user();
  });

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.count.set(this.count() + 1);
    }, 1000);
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.id).subscribe((data) => {
      this.user.set(data);
      this.isTrue.set(true);
      this.buildForm();
      console.log(this.user());
    });
  }

  buildForm() {
    this.form = new FormGroup({
      firstName: new FormControl(this.user().first_name),
      lastName: new FormControl(this.user().last_name),
      email: new FormControl(this.user().email),
    });

    this.form?.valueChanges.subscribe((val) => {
      this.user.update((currentValue) => ({
        ...currentValue,
        first_name: val.firstName,
        last_name: val.lastName,
        email: val.email,
      }));
      // console.log(this.user());
    });
  }

  confirm() {
    this.activeModal.close(this.user());
  }

  cancel() {
    this.activeModal.close();
  }
}
