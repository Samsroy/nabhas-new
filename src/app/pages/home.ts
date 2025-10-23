import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl">
            <h1 class="text-5xl font-bold mb-4">Eco-Friendly Packaging Solutions</h1>
            <p class="text-xl text-green-50 mb-8">
              Nabhas manufactures premium sustainable products for your everyday needs. 
              From paper plates to wooden cutlery, we're committed to quality and the environment.
            </p>
            <button class="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition">
              Explore Our Products
            </button>
          </div>
        </div>
      </section>

      <!-- Product Categories -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">Our Products</h2>
          <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide a comprehensive range of eco-friendly disposable products designed for businesses and consumers who care about quality and sustainability.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Paper Plates -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-48 flex items-center justify-center">
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Paper Plates</h3>
                <p class="text-gray-600">Durable, microwave-safe, and 100% biodegradable paper plates perfect for any occasion.</p>
              </div>
            </div>

            <!-- Paper Cups -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-gradient-to-r from-amber-500 to-amber-600 h-48 flex items-center justify-center">
                <svg class="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-12m0 0l6 12m-6-12v12m0 0H3m12 0h6"/>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Paper Cups</h3>
                <p class="text-gray-600">Premium quality cups for hot and cold beverages, ideal for cafes and restaurants.</p>
              </div>
            </div>

            <!-- Paper Glasses -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-gradient-to-r from-purple-500 to-purple-600 h-48 flex items-center justify-center">
                <svg class="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l1-1h6l1 1M8 7v10h8V7"/>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Paper Glasses</h3>
                <p class="text-gray-600">Sturdy paper glasses for parties, events, and everyday use. Eco-friendly and reliable.</p>
              </div>
            </div>

            <!-- Paper Napkins -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-gradient-to-r from-rose-500 to-rose-600 h-48 flex items-center justify-center">
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                  <line x1="8" y1="8" x2="16" y2="16" stroke="white" stroke-width="2"/>
                  <line x1="16" y1="8" x2="8" y2="16" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Paper Napkins</h3>
                <p class="text-gray-600">Soft, absorbent napkins for dining and cleaning. Available in various sizes and designs.</p>
              </div>
            </div>

            <!-- Wooden Forks -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-gradient-to-r from-yellow-600 to-yellow-700 h-48 flex items-center justify-center">
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 2v10h2V6h1v6h2V2h-2v6h-1V2zm6 0v10h2V6h1v6h2V2h-2v6h-1V2z"/>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Wooden Cutlery</h3>
                <p class="text-gray-600">Natural wooden forks, knives, and spoons. Sustainable, lightweight, and perfect for takeout.</p>
              </div>
            </div>

            <!-- Wooden Knife & Spoon -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div class="bg-gradient-to-r from-orange-500 to-orange-600 h-48 flex items-center justify-center">
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4v16h2V4H3zm8 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Cutlery Sets</h3>
                <p class="text-gray-600">Complete sets of wooden cutlery for catering, events, and food service businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Nabhas?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-900">100% Eco-Friendly</h3>
              <p class="text-gray-600">All our products are biodegradable and made from sustainable materials.</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-900">Premium Quality</h3>
              <p class="text-gray-600">Rigorous quality control ensures every product meets the highest standards.</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-900">Affordable Pricing</h3>
              <p class="text-gray-600">Competitive prices without compromising on quality or environmental responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-green-600 text-white py-16 px-4">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4">Ready to Go Green?</h2>
          <p class="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and consumers who are making a difference with Nabhas products.
          </p>
          <button class="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
