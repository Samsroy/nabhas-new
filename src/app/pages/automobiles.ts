import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeoService } from "../services/seo.service";

@Component({
  selector: "app-automobiles",
  standalone: true,
  imports: [CommonModule],
  providers: [SeoService],
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
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6 text-gray-900">
                About Nabhas Automobiles
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                Nabhas Automobiles provides comprehensive servicing solutions
                for both two-wheeled and four-wheeled vehicles. Our
                state-of-the-art service centers are equipped with modern
                diagnostic tools and staffed by trained professionals committed
                to delivering excellence.
              </p>
              <p class="text-lg text-gray-700">
                We believe in sustainable automotive practices, ensuring minimal
                environmental impact while maintaining the highest standards of
                vehicle maintenance and repair. Whether you own a motorcycle,
                scooter, car, or commercial vehicle, we have the expertise to
                keep it running smoothly.
              </p>
            </div>
            <div class="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/4489720/pexels-photo-4489720.jpeg"
                alt="Professional mechanic servicing a vehicle in modern workshop"
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
            Our Automotive Services
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Two-Wheeler Services
              </h3>
              <p class="text-gray-700 mb-4">
                Expert servicing for motorcycles, scooters, and other
                two-wheeled vehicles.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Regular maintenance</li>
                <li>✓ Engine repairs</li>
                <li>✓ Brake & clutch service</li>
                <li>✓ Battery replacement</li>
                <li>✓ Tire & wheel service</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Four-Wheeler Services
              </h3>
              <p class="text-gray-700 mb-4">
                Comprehensive servicing for cars, SUVs, and commercial vehicles.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Regular maintenance</li>
                <li>✓ Engine diagnostics</li>
                <li>✓ Transmission service</li>
                <li>✓ AC & cooling system</li>
                <li>✓ Body work & painting</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Diagnostic Services
              </h3>
              <p class="text-gray-700 mb-4">
                Advanced computer diagnostics to identify vehicle issues
                accurately.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Engine diagnostics</li>
                <li>✓ Electrical testing</li>
                <li>✓ Emissions testing</li>
                <li>✓ Performance analysis</li>
                <li>✓ Safety inspection</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Parts & Accessories
              </h3>
              <p class="text-gray-700 mb-4">
                Genuine and OEM parts with warranty for all vehicle types.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Genuine parts</li>
                <li>✓ Quality filters</li>
                <li>✓ Belts & hoses</li>
                <li>✓ Brake pads</li>
                <li>✓ Batteries</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-[#1a2a5e] md:col-span-2"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Sustainable Practices
              </h3>
              <p class="text-gray-700 mb-4">
                We are committed to eco-friendly automotive servicing practices.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Proper waste disposal</li>
                <li>✓ Fuel-efficient maintenance</li>
                <li>✓ Emissions reduction</li>
                <li>✓ Environmental compliance</li>
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
                🔧
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Expert Technicians
              </h3>
              <p class="text-gray-700">
                Highly trained and certified professionals with years of
                experience.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                ⚙️
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Modern Equipment
              </h3>
              <p class="text-gray-700">
                State-of-the-art diagnostic and servicing equipment.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🌍
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Sustainable Practices
              </h3>
              <p class="text-gray-700">
                Environmentally responsible automotive servicing.
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
export class AutomobilesComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setMetaTags({
      title: "Nabhas Automobiles | Professional Vehicle Servicing Solutions",
      description:
        "Nabhas Automobiles - professional two and four-wheel vehicle servicing, maintenance, and support services with quality standards.",
      keywords:
        "Nabhas Automobiles, vehicle servicing, two-wheeler service, four-wheeler service, maintenance, automobile solutions",
      ogTitle: "Nabhas Automobiles | Professional Vehicle Services",
      ogDescription:
        "Quality automobile servicing and maintenance for two and four-wheelers.",
      ogImage:
        "https://cdn.builder.io/api/v1/image/assets%2F7915a4368506448c8f5915d2ed37a144%2Feb865ee565824990893cb3aeabaaa7a2?format=webp&width=800",
    });
  }
}
