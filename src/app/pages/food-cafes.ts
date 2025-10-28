import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-food-cafes",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16"
      >
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-4">Nabhas - Foods & Cafe's</h1>
          <p class="text-xl text-blue-50">
            Premium sustainable food and beverage solutions for cafes and restaurants
          </p>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6 text-gray-900">
                About Nabhas Foods & Cafe's
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                Nabhas Foods & Cafe's provides comprehensive solutions for cafes, restaurants, and food service establishments. Our eco-friendly products and supplies are designed to enhance customer experience while maintaining sustainability standards.
              </p>
              <p class="text-lg text-gray-700">
                We partner with food businesses to deliver quality packaging, sustainable serving solutions, and premium food service products. Our commitment to environmental responsibility ensures that your cafe or restaurant can thrive while making a positive impact on the planet.
              </p>
            </div>
            <div class="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/3962283/pexels-photo-3962283.jpeg"
                alt="Modern cafe with sustainable dining setup"
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
            Our Food & Cafe Solutions
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Packaging Solutions
              </h3>
              <p class="text-gray-700 mb-4">
                Eco-friendly packaging for food service, beverages, and takeaway items.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Paper cups and lids</li>
                <li>✓ Biodegradable containers</li>
                <li>✓ Sustainable cutlery</li>
                <li>✓ Custom branded packaging</li>
                <li>✓ Napkins and serviettes</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Food Service Supplies
              </h3>
              <p class="text-gray-700 mb-4">
                Complete range of supplies for cafes, restaurants, and food establishments.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Kitchen equipment</li>
                <li>✓ Food storage containers</li>
                <li>✓ Serving utensils</li>
                <li>✓ Bar supplies</li>
                <li>✓ Cleaning & hygiene products</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Beverage Solutions
              </h3>
              <p class="text-gray-700 mb-4">
                Premium packaging and accessories for hot and cold beverages.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Coffee cups</li>
                <li>✓ Juice and beverage containers</li>
                <li>✓ Straws and stirrers</li>
                <li>✓ Drink sleeves</li>
                <li>✓ Lids and closures</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Custom Solutions
              </h3>
              <p class="text-gray-700 mb-4">
                Tailored solutions designed specifically for your cafe or restaurant.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Branded packaging design</li>
                <li>✓ Bulk ordering</li>
                <li>✓ Wholesale pricing</li>
                <li>✓ Delivery services</li>
                <li>✓ Inventory management</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e] md:col-span-2"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Sustainability Commitment
              </h3>
              <p class="text-gray-700 mb-4">
                All our products are designed with environmental responsibility at the core.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ 100% biodegradable materials</li>
                <li>✓ Minimal plastic usage</li>
                <li>✓ Recyclable packaging</li>
                <li>✓ Compostable options available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Nabhas Foods & Cafe's?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🌱
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Eco-Friendly
              </h3>
              <p class="text-gray-700">
                All products are sustainable and environmentally responsible.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                ⭐
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p class="text-gray-700">
                High-quality products designed for professional use.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                💼
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Business Support
              </h3>
              <p class="text-gray-700">
                Dedicated support for your cafe or restaurant needs.
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
          <h2 class="text-4xl font-bold mb-4">
            Elevate Your Cafe's Sustainability
          </h2>
          <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Partner with Nabhas for premium, eco-friendly food and beverage solutions.
          </p>
          <button
            class="bg-white text-[#1a2a5e] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class FoodCafesComponent {}
