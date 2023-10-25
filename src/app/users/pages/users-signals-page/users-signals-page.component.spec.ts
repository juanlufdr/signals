import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSignalsPageComponent } from './users-signals-page.component';

describe('UsersSignalsPageComponent', () => {
  let component: UsersSignalsPageComponent;
  let fixture: ComponentFixture<UsersSignalsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSignalsPageComponent]
    });
    fixture = TestBed.createComponent(UsersSignalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
