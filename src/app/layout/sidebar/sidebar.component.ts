import { Component, inject } from '@angular/core';
import { UiService } from '../../core/services/ui.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Inject the service here to make it available in the template
  public uiService: UiService = inject(UiService);
}