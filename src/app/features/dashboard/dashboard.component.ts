import { Component, signal, viewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { StatCard } from '../../core/dashboard.model';

// when running on the server there is no real <canvas> implementation,
// and Chart.js will try to access `getContext` which throws the `NotYetImplemented` error.
// guard all chart creation so it only happens in the browser.
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  stats = signal<StatCard[]>([
    { title: 'Active Users', value: '12,402', colorClass: 'card1' },
    { title: 'Daily Profit', value: '$4,120', colorClass: 'card2' },
    { title: 'Success Rate', value: '98.2%', colorClass: 'card3' },
    { title: 'System Load', value: '42%', colorClass: 'card4' }
  ]);

  chartCanvas = viewChild<ElementRef<HTMLCanvasElement>>('trafficChart');

  ngAfterViewInit() {
    // lifecycle hooks still run during SSR; skip any DOM/chart work on server
    if (!this.isBrowser) {
      return;
    }

    const ctx = this.chartCanvas()?.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Visits',
            data: [400, 550, 480, 600, 700, 550, 800],
            borderColor: '#6366f1',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(99, 102, 241, 0.1)'
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }
  }
}