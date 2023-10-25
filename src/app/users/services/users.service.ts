import { Injectable, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PaginatedUsers, SingleUser, User } from '../interfaces/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = `https://reqres.in/api/users`;

  constructor(private http: HttpClient) { }

  loadPage( page: number): Observable<User[]> {
    return this.http.get<PaginatedUsers>( this.baseUrl, {params: {page}})
    .pipe(
      map( response => {
        console.log(response);
        return response.data
      })
    );
  }

  getUserById(id: number) {
    return this.http.get<SingleUser>( `${this.baseUrl}/${id}`).pipe(
      map(response => response.data)
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
