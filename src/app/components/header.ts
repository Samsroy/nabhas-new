import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white shadow-md">
      <nav
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <a
          routerLink="/"
          class="flex items-center gap-3 hover:opacity-80 transition"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F1639b6bbdce24e2fb4b4de8d6d766bc2?format=webp&width=800"
            alt="Nabhas Logo"
            class="h-12 w-12 object-contain"
          />
          <span class="text-2xl font-bold text-[#1a2a5e]">Nabhas</span>
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
          <a
            routerLink="/products"
            routerLinkActive="text-[#1a2a5e] border-b-2 border-[#1a2a5e]"
            class="text-gray-700 hover:text-[#1a2a5e] transition font-medium py-2"
          >
            Products
          </a>

          <!-- Services Dropdown Menu -->
          <div class="relative group">
            <button
              class="text-gray-700 hover:text-[#1a2a5e] transition font-medium py-2 flex items-center gap-1"
            >
              Services
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
                routerLink="/services/automobiles"
                class="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1a2a5e] transition font-medium"
              >
                Nabhas Automobiles
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
