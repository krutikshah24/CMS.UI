export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }
  
  export interface UserList<T> {
    totalRecords: number;
    pageNumber: number;
    pageSize: number;
    users: T[];
  }
  