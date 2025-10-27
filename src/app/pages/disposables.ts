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

      <!-- Product Categories -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">
            Our Products
          </h2>
          <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide a comprehensive range of eco-friendly disposable products
            designed for businesses and consumers who care about quality and
            sustainability.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Paper Plates -->
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            >
              <div class="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2Ff404ab8dd6b64b7b884ac6bcbeb02fe7?format=webp&width=800"
                  alt="Paper Plates"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Paper Plates
                </h3>
                <p class="text-gray-600">
                  Durable, microwave-safe, and 100% biodegradable paper plates
                  perfect for any occasion.
                </p>
              </div>
            </div>

            <!-- Paper Cups -->
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            >
              <div class="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F983fcf37b7ad44288daa6b0b8b6ac775?format=webp&width=800"
                  alt="Paper Cups"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Paper Cups</h3>
                <p class="text-gray-600">
                  Premium quality cups for hot and cold beverages, ideal for
                  cafes and restaurants.
                </p>
              </div>
            </div>

            <!-- Paper Glasses -->
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            >
              <div class="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F0a27eca1df3c4c5d8f1e57fce8e57d83?format=webp&width=800"
                  alt="Paper Cups with Design"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Printed Cups
                </h3>
                <p class="text-gray-600">
                  Custom printed paper cups for branded beverages and special
                  events. Eye-catching designs.
                </p>
              </div>
            </div>

            <!-- Paper Napkins -->
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            >
              <div class="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F4c4d4440d3a7426092228a22c1eaa8fe?format=webp&width=800"
                  alt="Paper Napkins"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Paper Napkins
                </h3>
                <p class="text-gray-600">
                  Soft, absorbent napkins for dining and cleaning. Available in
                  various sizes and designs.
                </p>
              </div>
            </div>

            <!-- Paper Tissue Rolls -->
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            >
              <div class="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F93bf8b36f0724ff5a022c16d126d0142?format=webp&width=800"
                  alt="Tissue Rolls"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Tissue Rolls
                </h3>
                <p class="text-gray-600">
                  Premium quality tissue rolls for homes and businesses. Soft,
                  strong, and eco-friendly.
                </p>
              </div>
            </div>

            <!-- Wooden Cutlery -->
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            >
              <div class="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F883389fd44704e84b7b3f13610d51e3e?format=webp&width=800"
                  alt="Wooden Cutlery"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Wooden Cutlery
                </h3>
                <p class="text-gray-600">
                  Natural wooden forks, knives, and spoons. Sustainable,
                  lightweight, and perfect for takeout.
                </p>
              </div>
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
