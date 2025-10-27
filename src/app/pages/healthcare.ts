import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-healthcare",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16"
      >
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-4">Nabhas Healthcare</h1>
          <p class="text-xl text-blue-50">
            Healthcare supplies and medical equipment designed with quality and
            safety standards
          </p>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="max-w-3xl">
            <h2 class="text-4xl font-bold mb-6 text-gray-900">
              About Nabhas Healthcare
            </h2>
            <p class="text-lg text-gray-700 mb-4">
              Nabhas is currently assisting a few healthcare stores to supply pharmaceuticals and providing comprehensive assistance in setting up new pharmacies. We are expanding our presence in the pharma space with plans to operate our own pharmaceutical stores in the Navi Mumbai area. Our team continues to support pharmacy establishment across our office locations throughout the country, with Delhi being added shortly.
            </p>
            <p class="text-lg text-gray-700">
              We provide complete end-to-end pharmacy setup and management services, helping new pharmacy entrepreneurs navigate every aspect of establishing a successful healthcare business. Our expertise ensures quality, compliance, and profitability from day one.
            </p>
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Pharmacy Services & Offerings
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Pharmaceutical Supplies
              </h3>
              <p class="text-gray-700 mb-4">
                Complete pharmaceutical products and medicines for retail pharmacy operations.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Quality pharmaceuticals</li>
                <li>✓ Generic medicines</li>
                <li>✓ Brand medicines</li>
                <li>✓ Low-cost medicine options</li>
                <li>✓ Reliable vendor partnerships</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Pharmacy Setup & Design
              </h3>
              <p class="text-gray-700 mb-4">
                Complete assistance in establishing new pharmacy stores with professional planning.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Interior design & setup</li>
                <li>✓ Decor planning</li>
                <li>✓ Layout optimization</li>
                <li>✓ Equipment installation</li>
                <li>✓ Professional consultation</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Supplier & Vendor Management
              </h3>
              <p class="text-gray-700 mb-4">
                Strategic vendor partnerships and supplier selection for optimal operations.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Supplier identification</li>
                <li>✓ Vendor partnerships</li>
                <li>✓ Department selection</li>
                <li>✓ Negotiated pricing</li>
                <li>✓ Quality assurance</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Inventory & Stock Management
              </h3>
              <p class="text-gray-700 mb-4">
                Complete stock management including returns and exchanges.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Inventory planning</li>
                <li>✓ Stock management systems</li>
                <li>✓ Returns handling</li>
                <li>✓ Exchange management</li>
                <li>✓ Expiry tracking</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Accessories & Equipment
              </h3>
              <p class="text-gray-700 mb-4">
                Pharmacy equipment and accessories for professional operations.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Display stands</li>
                <li>✓ Shelving systems</li>
                <li>✓ Pharmacy counters</li>
                <li>✓ Cooling equipment</li>
                <li>✓ Interior accessories</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Operational Support
              </h3>
              <p class="text-gray-700 mb-4">
                Ongoing support and consultation for pharmacy operations and growth.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Business consultation</li>
                <li>✓ Operational guidance</li>
                <li>✓ Staff training support</li>
                <li>✓ Regulatory compliance</li>
                <li>✓ Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Quality Standards Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Expansion Plans
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🏪
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Own Pharmacy Stores
              </h3>
              <p class="text-gray-700">
                Operating our own pharmaceutical stores in Navi Mumbai area with plans for expansion.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🌍
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Pan-India Presence
              </h3>
              <p class="text-gray-700">
                Supporting pharmacy setup across office locations, with Delhi expanding soon.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🤝
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Partnership Model
              </h3>
              <p class="text-gray-700">
                Comprehensive support for partners establishing new pharmacy businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Partner with Nabhas Healthcare?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                End-to-End Setup Support
              </h3>
              <p class="text-gray-700">
                Complete assistance from design and interiors to inventory management and operations for new pharmacies.
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Quality Pharmaceutical Supply
              </h3>
              <p class="text-gray-700">
                Access to quality medicines and low-cost alternatives through established vendor partnerships.
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Expert Consultation
              </h3>
              <p class="text-gray-700">
                Guidance on supplier selection, department planning, and business optimization from experienced professionals.
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Pan-India Network
              </h3>
              <p class="text-gray-700">
                Growing presence across multiple cities with established operations and proven business models.
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
          <h2 class="text-4xl font-bold mb-4">Improve Healthcare Quality</h2>
          <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Partner with Nabhas Healthcare for reliable medical supplies and
            equipment.
          </p>
          <button
            class="bg-white text-[#1a2a5e] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Request a Catalog
          </button>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class HealthcareComponent {}
