import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white shadow-md">
      <nav class="container mx-auto px-4 py-6 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">N</span>
          </div>
          <span class="text-2xl font-bold text-gray-900">Nabhas</span>
        </div>
        
        <div class="flex gap-8">
          <a 
            routerLink="/" 
            routerLinkActive="text-green-600 border-b-2 border-green-600"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-700 hover:text-green-600 transition font-medium py-2"
          >
            Home
          </a>
          <a 
            routerLink="/about" 
            routerLinkActive="text-green-600 border-b-2 border-green-600"
            class="text-gray-700 hover:text-green-600 transition font-medium py-2"
          >
            About Us
          </a>
        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {}
