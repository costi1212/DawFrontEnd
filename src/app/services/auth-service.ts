import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
const AUTH_API = 'https://localhost:7044/Users/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(Username: string, Email: string, Password: string, FirstName: string, LastName: string): Observable<any> {
    return this.http.post(AUTH_API + 'authentificate', {
      FirstName: FirstName,
      Username: Username,
      Password: Password,
      Email: Email,
      LastName: LastName
    }, httpOptions);
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}