import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  // Observable to subscribe to changes in authentication status
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private userService: UserService) {}

  login(email: string, password: string): Observable<boolean> {
// Retrieve the stored user information
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      this.isAuthenticatedSubject.next(false);
      return new Observable<boolean>((observer) => {
        observer.next(false);
        observer.complete();
      });
    }

    // Parse the stored user information
    const storedUserData = JSON.parse(storedUser);

    // Check if the entered email and password match the stored user's credentials
    const isCredentialsCorrect = email === storedUserData.email && password === storedUserData.password;

    if (isCredentialsCorrect) {
      this.isAuthenticatedSubject.next(true);
    }


    return new Observable<boolean>((observer) => {
      observer.next(isCredentialsCorrect);
      observer.complete();
    });
  }

  register(name: string, email: string, password: string, address: string): Observable<boolean> {
    localStorage.setItem('user', JSON.stringify({ name, email, password }));

    this.isAuthenticatedSubject.next(true);

    return new Observable<boolean>(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isAuthenticatedSubject.next(false);
  }

  checkAuthenticated(): void {
    const user = localStorage.getItem('user');
    const isAuthenticated = user !== null;
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
}
