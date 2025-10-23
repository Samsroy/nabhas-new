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

        <div class="flex gap-8">
          <a
            routerLink="/"
            routerLinkActive="text-[#1a2a5e] border-b-2 border-[#1a2a5e]"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-700 hover:text-[#1a2a5e] transition font-medium py-2"
          >
            Home
          </a>
          <a
            routerLink="/about"
            routerLinkActive="text-[#1a2a5e] border-b-2 border-[#1a2a5e]"
            class="text-gray-700 hover:text-[#1a2a5e] transition font-medium py-2"
          >
            About Us
          </a>
        </div>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {}
