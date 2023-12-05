import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registeredUsers: { email: string, password: string }[] = [];

  constructor() {}

  registerUser(email: string, password: string): void {
    this.registeredUsers.push({ email, password });
  }

  isUserRegistered(email: string, password: string): boolean {
    return this.registeredUsers.some(user => user.email === email && user.password === password);
  }

}
