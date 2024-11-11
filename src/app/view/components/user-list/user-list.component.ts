import { Component, OnInit } from '@angular/core';
import { User, UserList } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddUpdateComponent } from '../user-add-update/user-add-update.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule,UserAddUpdateComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  openAddEdit:boolean = false;
  totalRecords: number = 0;
  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers(this.pageNumber, this.pageSize).subscribe(
      (response: UserList<User>) => {
        this.users = response.users;
        this.totalRecords = response.totalRecords;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  onPageChange(newPage: number): void {
    this.pageNumber = newPage;
    this.loadUsers();
  }

  totalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }

  onEditUser(user: User): void {
    this.selectedUser = user;
    this.openAddEdit=true;
  }

  onAddUser(): void {
    this.selectedUser = null;
    this.openAddEdit=true;
  }

  onDeleteUser(id: number): void {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(id).subscribe(() => this.loadUsers());
    }
  }

  onUserSaved(): void {
    this.loadUsers();
    this.selectedUser = null;
    this.openAddEdit=false;
  }
}
