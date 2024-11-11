import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../models/user.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-add-update',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './user-add-update.component.html',
  styleUrl: './user-add-update.component.scss'
})
export class UserAddUpdateComponent {

  @Input() user: User | null = null;
  @Output() userSaved = new EventEmitter<void>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value as User;

      if (this.user && this.user.id) {
        this.userService.updateUser(this.user.id, userData).subscribe(() => this.userSaved.emit());
      } else {
        this.userService.createUser(userData).subscribe(() => this.userSaved.emit());
      }
    }
  }
}
