import { Component, AfterViewInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements AfterViewInit {
  private isBrowser: boolean;

  constructor(private router: Router,
              @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    // bail out on server or in any environment without DOM
    if (typeof document === 'undefined') {
      return;
    }

    // dynamically load typed.js; this import will only run in browser
    import('typed.js').then(({ default: Typed }) => {
      new Typed('.typing', {
        strings: ['.NET Engineer', 'SQL Architect', 'Backend Developer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    });
  }

  goToAdmin() {
    this.router.navigate(['/admin/login']);
  }

  onImageLoad() {
    console.log('kd.png loaded successfully');
  }

  /**
   * handle contact form submission; currently just prevents default
   * you can hook this up to a real service later
   */
  sendMessage(event: Event) {
    event.preventDefault();
    // TODO: collect form data and send via API
    console.log('contact form submitted');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    let top = window.scrollY;

    sections.forEach(sec => {
      const offset = (sec as HTMLElement).offsetTop - 150;
      const height = (sec as HTMLElement).offsetHeight;
      const id = sec.getAttribute('id');
      if (top >= offset && top < offset + height && id) {
        navLinks.forEach(links => links.classList.remove('active'));
        const link = document.querySelector('header nav a[href*=' + id + ']');
        if (link) {
          link.classList.add('active');
        }
      }
    });
  }
}
