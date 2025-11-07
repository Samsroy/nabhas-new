import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-[#1a2a5e] text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Brand Column -->
          <div>
            <div class="flex flex-col items-center gap-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7915a4368506448c8f5915d2ed37a144%2Ffd385c5ca81a4c79b38d1aac723b5d66?format=webp&width=800"
                alt="Nabhas Logo"
                class="object-contain"
              />
              <div class="flex flex-col leading-none items-center">
                <span class="text-xs font-bold italic">Smart Partners Smart Future</span>
              </div>
            </div>
            <p class="text-blue-200 text-sm leading-relaxed">
              Committed to delivering innovative, sustainable packaging solutions across diverse industries with a focus on environmental responsibility.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-bold text-lg mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a routerLink="/" class="text-blue-200 hover:text-white transition">Home</a></li>
              <li><a routerLink="/about" class="text-blue-200 hover:text-white transition">About Us</a></li>
              <li><a routerLink="/contact" class="text-blue-200 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <!-- Pages -->
          <div>
            <h4 class="font-bold text-lg mb-4">Pages</h4>
            <ul class="space-y-2">
              <li><a routerLink="/services/disposables" class="text-blue-200 hover:text-white transition">Disposables</a></li>
              <li><a routerLink="/services/retail" class="text-blue-200 hover:text-white transition">Retail</a></li>
              <li><a routerLink="/services/food-cafes" class="text-blue-200 hover:text-white transition">Foods & Cafe's</a></li>
              <li><a routerLink="/services/healthcare" class="text-blue-200 hover:text-white transition">Healthcare</a></li>
              <li><a routerLink="/services/technologies" class="text-blue-200 hover:text-white transition">Technologies</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="font-bold text-lg mb-4">Contact Info</h4>
            <ul class="space-y-3 text-blue-200 text-sm">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
                <span>contact@nabhas.com</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91-8469690812</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
                </svg>
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-blue-700 my-8"></div>

        <!-- Bottom Section -->
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-blue-200 text-sm">
            &copy; 2024 Nabhas. All rights reserved.
          </p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="#" class="text-blue-200 hover:text-white transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-blue-200 hover:text-white transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.5 4.5-4.5 6-5 2-5 2"/>
              </svg>
            </a>
            <a href="#" class="text-blue-200 hover:text-white transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.413-.103.25-.129.599-.129.948v5.444h-3.554s.047-8.733 0-9.646h3.554v1.364c.42-.649 1.368-1.573 3.332-1.573 2.432 0 4.255 1.587 4.255 5.001v4.854zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.956.77-1.715 1.959-1.715 1.187 0 1.914.759 1.914 1.715 0 .953-.727 1.715-1.958 1.715zm1.603 11.597H3.73V9.963h3.21v10.489zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {}
