import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth/auth.service";
import {UserService} from "../services/user/user.service";
import {Router} from "@angular/router";
import {PasswordsMatchValidator} from "../shared/Validators/password_match_validator";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  registerForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(5)]]
    },{
      validators: PasswordsMatchValidator('password', 'confirmPassword')
    });
  }

  get fc() {
    return this.registerForm.controls;
  }
  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;

    const name = this.fc['name'].value;
    const email = this.fc['email'].value;
    const password = this.fc['password'].value;
    const address = this.fc['address'].value;

    // 使用 AuthService 进行注册
    this.authService.register(name, email, password, address).subscribe(
      (success) => {
        if (success) {
          console.log('Registration successful');
          // 可选：注册成功后导航到其他页面
          this.router.navigate(['/login']);
        } else {
          console.error('Registration failed');
        }
      }
    );
  }
}
