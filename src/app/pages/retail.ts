import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-retail",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16"
      >
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-4">Nabhas Retail</h1>
          <p class="text-xl text-blue-50">
            Comprehensive grocery store supplies for retailers and supermarkets
          </p>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6 text-gray-900">
                About Nabhas Retail
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                Nabhas Retail is your trusted partner for comprehensive grocery
                store supplies. We provide a wide range of products and
                solutions tailored specifically for retail businesses,
                supermarkets, and convenience stores. From packaging materials
                to display solutions, we have everything you need to optimize
                your retail operations.
              </p>
              <p class="text-lg text-gray-700">
                Our retail solutions are designed to enhance customer
                experience, improve efficiency, and maintain product quality.
                With years of experience in the retail sector, we understand the
                unique challenges faced by modern retailers.
              </p>
            </div>
            <div class="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/34460655/pexels-photo-34460655.jpeg"
                alt="Retail grocery store with vibrant colors and fresh produce"
                class="rounded-lg shadow-lg h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Retail Solutions
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Packaging Materials
              </h3>
              <p class="text-gray-700 mb-4">
                High-quality packaging solutions for groceries, fresh produce,
                and daily essentials.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Eco-friendly bags</li>
                <li>✓ Biodegradable packaging</li>
                <li>✓ Food-grade containers</li>
                <li>✓ Bulk supply options</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Display Solutions
              </h3>
              <p class="text-gray-700 mb-4">
                Professional display materials to showcase your products
                effectively.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Shelf displays</li>
                <li>✓ Point-of-sale materials</li>
                <li>✓ Signage solutions</li>
                <li>✓ Custom branding</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Inventory Management
              </h3>
              <p class="text-gray-700 mb-4">
                Tools and solutions to optimize your retail inventory
                management.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Labeling systems</li>
                <li>✓ Organization solutions</li>
                <li>✓ Stock management tools</li>
                <li>✓ Tracking systems</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Customer Experience
              </h3>
              <p class="text-gray-700 mb-4">
                Enhance your customer shopping experience with our solutions.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Checkout solutions</li>
                <li>✓ Packaging options</li>
                <li>✓ Customer service tools</li>
                <li>✓ Payment integration</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e] md:col-span-2"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Wholesale & Bulk Supply
              </h3>
              <p class="text-gray-700 mb-4">
                Reliable wholesale supply chains with competitive pricing for
                large retailers and supermarket chains.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Large quantity discounts</li>
                <li>✓ Reliable delivery schedules</li>
                <li>✓ Dedicated account managers</li>
                <li>✓ Flexible payment terms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Partner with Nabhas Retail?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🎯
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Specialized Expertise
              </h3>
              <p class="text-gray-700">
                Years of experience serving retail businesses and supermarkets.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                📦
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Complete Solutions
              </h3>
              <p class="text-gray-700">
                All your retail supply needs in one place.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                💼
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Professional Support
              </h3>
              <p class="text-gray-700">
                Dedicated customer support and account management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16 px-4"
      >
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4">Grow Your Retail Business</h2>
          <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Let Nabhas Retail provide comprehensive solutions for your store.
          </p>
          <button
            class="bg-white text-[#1a2a5e] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Get in Touch with Our Retail Team
          </button>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class RetailComponent {}
