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
                Nabhas is a leading supplier to country's reputed retailer store
                companies for their disposable range. Nabhas is adding new items
                to the supplies like ready to eat baked biscuits, ready
                cream-less cakes, pulses, masalas, etc to grocery stores. Also,
                to few reputed large supermarket stores, Nabhas is supplying
                apparel like shirts and kurtas etc. Door mats, dupattas,
                umbrellas, lamps and stands, novelties, etc. Team at Nabhas is
                catering to problem areas of these stores in optimizing
                quantities and returns.
              </p>
              <p class="text-lg text-gray-700 mb-4">
                It is expected that the grocery retail market in India will be
                reaching approximately $1.10 trillion by the year 2030. We
                consider the shift and share of the organized and unorganized
                retail in India, the level of digitization in India, the effect
                of the COVID-19 pandemic, and the Indian ethos and values in
                purchasing behavior.
              </p>
              <p class="text-lg text-gray-700 mb-4">
                In 2010, the Indian community was skeptical about the survival
                of kirana stores because of the emergence of
                supermarkets/hypermarkets. However, more than a decade later,
                kirana and small stores are surviving due to the service
                specialty involving personal touch, monthly credit and proximity
                to the consumers. That said, growth in e-commerce and organized
                retail is witnessing post-COVID-19 with preferences for a
                hygienic environment as well as discounts and loyalty points
                offered by organized retailers.
              </p>
              <p class="text-lg text-gray-700">
                Another significant trend that has emerged is large retailers
                (Reliance 7-Eleven stores, Tata Fresho stores, D-Mart and many
                more) collaborating with local kirana stores to help manage
                efficient delivery and expand their networks. India's retail
                market contributes 10% to India's GDP and employs 8% of India's
                population.
              </p>
            </div>
            <div class="hidden lg:block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7915a4368506448c8f5915d2ed37a144%2F6df4d3b2537642758ebcf1b91aa4859f?format=webp&width=800"
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
