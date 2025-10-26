import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-disposables",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16"
      >
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-4">Nabhas Disposables</h1>
          <p class="text-xl text-blue-50">
            Premium paper cutleries and sustainable disposable products for your
            everyday needs
          </p>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="max-w-3xl">
            <h2 class="text-4xl font-bold mb-6 text-gray-900">
              About Our Disposables
            </h2>
            <p class="text-lg text-gray-700 mb-4">
              Nabhas Disposables specializes in high-quality, eco-friendly paper
              cutleries and disposable products designed for food service,
              events, and household use. Our products are manufactured with
              sustainability at their core, ensuring minimal environmental
              impact without compromising on quality or durability.
            </p>
            <p class="text-lg text-gray-700">
              From paper plates and cups to wooden cutlery, our comprehensive
              range of disposable products serves businesses and consumers who
              care about the environment. Each product undergoes rigorous
              quality testing to meet international standards.
            </p>
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Disposable Products
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Paper Plates
              </h3>
              <p class="text-gray-700 mb-4">
                Durable, microwave-safe, and 100% biodegradable paper plates
                perfect for any occasion.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Microwave safe</li>
                <li>✓ Water resistant</li>
                <li>✓ Biodegradable</li>
                <li>✓ Various sizes</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">Paper Cups</h3>
              <p class="text-gray-700 mb-4">
                Insulated paper cups ideal for hot and cold beverages with
                perfect grip and durability.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Insulated design</li>
                <li>✓ Hot & cold safe</li>
                <li>✓ Eco-friendly coating</li>
                <li>✓ Custom printing</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Wooden Cutlery
              </h3>
              <p class="text-gray-700 mb-4">
                Sustainable wooden spoons, forks, and knives made from renewable
                resources.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ 100% natural wood</li>
                <li>✓ Biodegradable</li>
                <li>✓ Sturdy & reliable</li>
                <li>✓ Bulk availability</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Paper Napkins
              </h3>
              <p class="text-gray-700 mb-4">
                Soft and absorbent paper napkins for restaurants, cafes, and
                homes.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Highly absorbent</li>
                <li>✓ Soft texture</li>
                <li>✓ Compostable</li>
                <li>✓ Bulk options</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Tissue Rolls
              </h3>
              <p class="text-gray-700 mb-4">
                Premium tissue rolls for commercial and residential use.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Premium quality</li>
                <li>✓ Gentle on skin</li>
                <li>✓ Eco-friendly</li>
                <li>✓ Long lasting</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Custom Solutions
              </h3>
              <p class="text-gray-700 mb-4">
                Custom disposable products tailored to your specific business
                needs.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Custom sizing</li>
                <li>✓ Branded printing</li>
                <li>✓ Bulk orders</li>
                <li>✓ Wholesale pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Nabhas Disposables?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🌱
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                100% Eco-Friendly
              </h3>
              <p class="text-gray-700">
                All products are biodegradable, compostable, and made from
                sustainable sources.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                ✓
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p class="text-gray-700">
                Rigorous quality control ensures every product meets
                international standards.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                💰
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Affordable Pricing
              </h3>
              <p class="text-gray-700">
                Competitive prices with bulk discounts for wholesale and
                corporate orders.
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
          <h2 class="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Choose sustainable disposables for your business or home today.
          </p>
          <button
            class="bg-white text-[#1a2a5e] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us for Orders
          </button>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class DisposablesComponent {}
