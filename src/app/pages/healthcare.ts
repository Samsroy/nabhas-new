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
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6 text-gray-900">
                About Nabhas Healthcare
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                Nabhas is currently only assisting a few healthcare stores to supply pharmaceuticals. Nabhas also does assistance in setting up these pharmacies. Nabhas wants to operate in the pharma space in this sector and open stores of their own in Navi Mumbai area.
              </p>
              <p class="text-lg text-gray-700 mb-4">
                In addition, team Nabhas would continue to aid in setting up these pharmacy stores across their office locations across the country. They will add Delhi shortly. The assistance includes interiors, suppliers and departments to choose for supplies, decor and vendor partnerships, stocks and inventory, returns and exchanges, low-cost medicines etc.
              </p>
              <p class="text-lg text-gray-700">
                Also focus is on accessories like stands, beds, interiors etc.
              </p>
            </div>
            <div class="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/4421490/pexels-photo-4421490.jpeg"
                alt="Medical supplies and healthcare equipment organized in hospital setting"
                class="rounded-lg shadow-lg h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Healthcare Products
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Medical Supplies
              </h3>
              <p class="text-gray-700 mb-4">
                Essential medical supplies for hospitals and healthcare
                facilities.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Sterile gloves</li>
                <li>✓ Medical masks</li>
                <li>✓ Bandages & dressings</li>
                <li>✓ Syringes & needles</li>
                <li>✓ IV sets</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Diagnostic Equipment
              </h3>
              <p class="text-gray-700 mb-4">
                Modern diagnostic tools for accurate patient assessment.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Blood pressure monitors</li>
                <li>✓ Thermometers</li>
                <li>✓ Glucose meters</li>
                <li>✓ Pulse oximeters</li>
                <li>✓ Stethoscopes</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Mobility Aids
              </h3>
              <p class="text-gray-700 mb-4">
                Assistive devices to improve patient mobility and independence.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Wheelchairs</li>
                <li>✓ Walkers</li>
                <li>✓ Crutches</li>
                <li>✓ Canes</li>
                <li>✓ Walking frames</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Patient Care Products
              </h3>
              <p class="text-gray-700 mb-4">
                Comfortable and hygienic products for patient care and comfort.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Patient gowns</li>
                <li>✓ Incontinence products</li>
                <li>✓ Bed pans</li>
                <li>✓ Urinals</li>
                <li>✓ Bedside commodes</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Hygiene & Safety
              </h3>
              <p class="text-gray-700 mb-4">
                Products ensuring hygiene standards and safety in healthcare
                settings.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Hand sanitizers</li>
                <li>✓ Disinfectants</li>
                <li>✓ Protective eyewear</li>
                <li>✓ Protective aprons</li>
                <li>✓ Surface cleaning products</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Therapeutic Equipment
              </h3>
              <p class="text-gray-700 mb-4">
                Equipment supporting rehabilitation and therapy programs.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Physical therapy tools</li>
                <li>✓ Hot & cold packs</li>
                <li>✓ Compression bandages</li>
                <li>✓ TENS machines</li>
                <li>✓ Massage devices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Quality Standards Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Quality & Compliance
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                ✓
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                ISO Certified
              </h3>
              <p class="text-gray-700">
                All products meet ISO quality standards for safety and efficacy.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                📋
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Regulatory Approval
              </h3>
              <p class="text-gray-700">
                Approved by relevant healthcare regulatory bodies and
                authorities.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🔬
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Clinical Testing
              </h3>
              <p class="text-gray-700">
                Rigorous testing ensuring effectiveness and safety for patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Nabhas Healthcare?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Comprehensive Range
              </h3>
              <p class="text-gray-700">
                Complete selection of healthcare products for all facility
                needs.
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Reliable Quality
              </h3>
              <p class="text-gray-700">
                Consistent quality and reliability you can depend on.
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Expert Support
              </h3>
              <p class="text-gray-700">
                Knowledgeable team providing guidance on product selection.
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Competitive Pricing
              </h3>
              <p class="text-gray-700">
                Value for money without compromising on quality.
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
