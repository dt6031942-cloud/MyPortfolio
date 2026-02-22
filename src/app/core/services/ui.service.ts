import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiService {
  // ১. একটি সিগন্যাল তৈরি করা (ডিফল্ট মান false)
  // explicitly type the signal so the template sees a boolean value
  isSidebarCollapsed: import('@angular/core').WritableSignal<boolean> = signal(false);

  // ২. মান বদলানোর ফাংশন
  toggleSidebar() {
    this.isSidebarCollapsed.update(state => !state);
  }
}