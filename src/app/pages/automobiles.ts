import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-automobiles",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16"
      >
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-4">Nabhas Automobiles</h1>
          <p class="text-xl text-blue-50">
            Professional two- and four-wheel servicing with sustainable
            practices
          </p>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="max-w-3xl">
            <h2 class="text-4xl font-bold mb-6 text-gray-900">
              About Nabhas Automobiles
            </h2>
            <p class="text-lg text-gray-700 mb-4">
              Nabhas is focusing on two-wheeler sales in specific areas like Navi Mumbai. Currently offering TVS and Bajaj brands, with plans to add more brands and types including bikes, scooters, mopeds, and cycles with gears and battery. Nabhas is committed to focusing on luxury segments at affordable prices, expanding market presence on a continuous basis.
            </p>
            <p class="text-lg text-gray-700 mb-4">
              For four-wheelers, Nabhas deals with reputed dealers on commission basis for Maruti, Hyundai, and Toyota. We plan to add four-wheel brands in the future with own dealerships and showrooms to provide direct access to customers seeking luxury vehicles at affordable prices.
            </p>
            <p class="text-lg text-gray-700">
              On the services side, Nabhas team is providing manpower to clients for car repairs and services through a network of partnered garages currently in Mumbai and Kolkata. We are expanding rapidly to Delhi, Bangalore, Chandigarh, Chennai, Hyderabad, and Indore. Nabhas operates on a commission-based model for both sales and repair services in the automobile segment.
            </p>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Offerings
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Two-Wheeler Sales
              </h3>
              <p class="text-gray-700 mb-4">
                Authorized dealer for premium two-wheeler brands with focus on affordable luxury.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ TVS motorcycles & scooters</li>
                <li>✓ Bajaj bikes & scooters</li>
                <li>✓ Mopeds & cycles with gears</li>
                <li>✓ Battery-powered vehicles</li>
                <li>✓ Expansion in Navi Mumbai & beyond</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Four-Wheeler Sales & Dealerships
              </h3>
              <p class="text-gray-700 mb-4">
                Commission-based partnerships with leading automobile brands and future owned dealerships.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Maruti vehicles</li>
                <li>✓ Hyundai vehicles</li>
                <li>✓ Toyota vehicles</li>
                <li>✓ Luxury at affordable prices</li>
                <li>✓ Own dealerships & showrooms coming soon</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Automobile Repair & Services
              </h3>
              <p class="text-gray-700 mb-4">
                Professional repair and servicing manpower deployed through partnered garages.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Regular maintenance</li>
                <li>✓ Engine repairs & diagnostics</li>
                <li>✓ Transmission & electrical service</li>
                <li>✓ Body work & painting</li>
                <li>✓ Genuine parts availability</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Service Network Expansion
              </h3>
              <p class="text-gray-700 mb-4">
                Growing presence across major Indian cities with partnered garage networks.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Currently in Mumbai & Kolkata</li>
                <li>✓ Expanding to Delhi</li>
                <li>✓ Adding Bangalore & Chandigarh</li>
                <li>✓ Chennai, Hyderabad & Indore soon</li>
                <li>��� Commission-based partnership model</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Nabhas Automobiles?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🚗
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Multiple Brands
              </h3>
              <p class="text-gray-700">
                Access to premium two and four-wheeler brands at affordable prices.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🔧
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Expert Service Network
              </h3>
              <p class="text-gray-700">
                Professional repair and servicing across major Indian cities through partnered garages.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                📍
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Expanding Presence
              </h3>
              <p class="text-gray-700">
                Growing coverage across India with continuous expansion to new cities and markets.
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
            Keep Your Vehicle Running Smoothly
          </h2>
          <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Schedule your vehicle's servicing with Nabhas Automobiles today.
          </p>
          <button
            class="bg-white text-[#1a2a5e] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Book an Appointment
          </button>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class AutomobilesComponent {}
