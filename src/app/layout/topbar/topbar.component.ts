import { Component, inject } from '@angular/core';
import { UiService } from '../../core/services/ui.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  // router used for navigation so base-href is respected
  private router = inject(Router);

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout(event: Event) {
    event.stopPropagation(); // don't close immediately by clicking
    // simple logout: navigate back to landing via router
    // avoids hard-coded "/" which on GitHub Pages points to user site root
    this.menuOpen = false;
    this.router.navigate(['/']);
  }
}
