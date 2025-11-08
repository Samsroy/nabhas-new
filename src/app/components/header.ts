import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Top Bar with Contact Info -->
    <div class="bg-[#1a2a5e] text-white py-3 px-4">
      <div class="container mx-auto flex justify-between items-center text-sm">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <a href="mailto:contact@nabhas.co.in" class="hover:text-blue-200 transition">
            contact@nabhas.co.in
          </a>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.92 7.02C17.45 6.18 16.3 5.74 15.24 6.12C13.78 6.66 12.59 7.76 12.59 9.23C12.59 11.1 14.36 12.87 16.23 12.87C17.7 12.87 18.8 11.68 19.34 10.22C19.72 9.16 19.27 8.01 18.44 7.54M11 19.93C6.5 18.5 3 14.47 3 9.72C3 5.34 6.34 2 10.72 2C15.1 2 18.44 5.34 18.44 9.72C18.44 10.68 18.37 11.61 18.23 12.52"/>
          </svg>
          <a href="tel:+918469690812" class="hover:text-blue-200 transition">
            +91-8469690812
          </a>
        </div>
      </div>
    </div>

    <header class="bg-white shadow-md">
      <nav
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <a
          routerLink="/"
          class="flex flex-col items-center gap-2 hover:opacity-80 transition"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7915a4368506448c8f5915d2ed37a144%2Ffd385c5ca81a4c79b38d1aac723b5d66?format=webp&width=800"
            alt="Nabhas Logo"
            class="object-contain"
          />
          <div class="flex flex-col leading-none items-center">
            <span class="text-xs font-bold italic text-[#1a2a5e]">Smart Partners Smarter Future</span>
          </div>
        </a>

        <div class="flex gap-8 items-center">
          <a
            routerLink="/"
            routerLinkActive="text-[#1a2a5e] border-b-2 border-[#1a2a5e]"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-700 hover:text-[#1a2a5e] transition font-medium py-2"
          >
            Home
          </a>

          <!-- Product & Services Dropdown Menu -->
          <div class="relative group">
            <button
              class="text-gray-700 hover:text-[#1a2a5e] transition font-medium py-2 flex items-center gap-1"
            >
              Product & Services
              <span class="text-xs">▼</span>
            </button>
            <div
              class="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
            >
              <a
                routerLink="/services/disposables"
                class="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1a2a5e] transition font-medium"
              >
                Nabhas Disposables
              </a>
              <a
                routerLink="/services/retail"
                class="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1a2a5e] transition font-medium"
              >
                Nabhas Retail
              </a>
              <a
                routerLink="/services/food-cafes"
                class="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1a2a5e] transition font-medium"
              >
                Nabhas Foods & Cafe's
              </a>
              <a
                routerLink="/services/technologies"
                class="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1a2a5e] transition font-medium"
              >
                Nabhas Technologies
              </a>
              <a
                routerLink="/services/healthcare"
                class="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1a2a5e] transition font-medium"
              >
                Nabhas Healthcare
              </a>
            </div>
          </div>

          <a
            routerLink="/about"
            routerLinkActive="text-[#1a2a5e] border-b-2 border-[#1a2a5e]"
            class="text-gray-700 hover:text-[#1a2a5e] transition font-medium py-2"
          >
            About Us
          </a>
          <a
            routerLink="/contact"
            routerLinkActive="text-[#1a2a5e] border-b-2 border-[#1a2a5e]"
            class="text-gray-700 hover:text-[#1a2a5e] transition font-medium py-2"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  isServicesOpen = false;

  toggleServices() {
    this.isServicesOpen = !this.isServicesOpen;
  }
}
