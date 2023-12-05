import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth/auth.service";
import {UserService} from "../services/user/user.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    // Check if the user is already authenticated (e.g., page reload)
    this.authService.checkAuthenticated();
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    const email = this.fc['email'].value;
    const password = this.fc['password'].value;

    // Login
    this.authService.login(email, password).subscribe(
      (success) => {
        if (success) {
          console.log('Login successful');
          this.router.navigate(['/']);
        } else {
          console.error('Login failed');
        }
      }
    );
  }
}
