import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit{
  AUTH_API = 'https://localhost:7044/Users';
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  form: any = {
    username: null,
    email: null,
    fname:null,
    lname:null,
    role:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private http:HttpClient){}
  async ngOnInit(){
  }

  register(Username: string, Email: string, Password: string, FirstName: string, LastName: string, Role: number): Observable<any> {
    return this.http.post(this.AUTH_API, {
      FirstName: FirstName,
      Username: Username,
      Password: Password,
      Email: Email,
      Role: Role,
      LastName: LastName
    }, this.httpOptions);
  }

  onSubmit(): void {
    const { username, email, password, fname, lname, role } = this.form;
    this.register(username, email, password, fname, lname, role).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}