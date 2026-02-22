import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
      // add more admin routes here if needed
    ]
  },
  { path: '**', redirectTo: '' }
];
