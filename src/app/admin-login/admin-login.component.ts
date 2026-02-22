import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private router: Router) {}

  submit(form: any) {
    // simple hard-coded admin check requested by user
    const email = form.email?.trim();
    const pwd = form.password;

    console.log('login attempt', form);

    if (email === 'admin@gmail.com' && pwd === '123') {
      // successful login
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Invalid admin credentials');
    }
  }
}
