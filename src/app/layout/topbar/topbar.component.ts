import { Component, inject } from '@angular/core';
import { UiService } from '../../core/services/ui.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  // make the ui service available to the template
  public uiService = inject(UiService);

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout(event: Event) {
    event.stopPropagation(); // don't close immediately by clicking
    // simple logout: navigate back to landing
    window.alert('Logged out');
    this.menuOpen = false;
    // could call an AuthService.logout() here
    window.location.href = '/';
  }
}
