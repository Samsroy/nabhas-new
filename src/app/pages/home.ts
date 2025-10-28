import { Component, ViewChild, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-gray-50">
      <!-- Zigzag Services Section -->
      <section class="py-20 px-4 bg-gray-50">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">
            Our Services
          </h2>
          <p class="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Explore our comprehensive range of services tailored to meet all your business needs.
          </p>

          <div class="flex flex-col gap-12 lg:gap-16">
            <!-- Service 1: Disposables - Left -->
            <div class="flex justify-start">
              <div class="zigzag-box w-full lg:w-1/2 bg-white shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                <div class="h-48 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6990484/pexels-photo-6990484.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Eco-Friendly Disposable Products"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">Disposables</h3>
                  <p class="text-gray-600 mb-4">
                    Premium eco-friendly paper cutleries and sustainable disposable products for food service, events, and households.
                  </p>
                  <a
                    routerLink="/services/disposables"
                    class="inline-block bg-[#1a2a5e] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2d3f7f] transition"
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>

            <!-- Service 2: Retail - Right -->
            <div class="flex justify-end">
              <div class="zigzag-box w-full lg:w-1/2 bg-white shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                <div class="h-48 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3962283/pexels-photo-3962283.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Retail Supplies and Solutions"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">Retail</h3>
                  <p class="text-gray-600 mb-4">
                    Comprehensive range of eco-friendly retail solutions specifically designed for grocery stores and supermarkets.
                  </p>
                  <a
                    routerLink="/services/retail"
                    class="inline-block bg-[#1a2a5e] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2d3f7f] transition"
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>

            <!-- Service 3: Automobiles - Left -->
            <div class="flex justify-start">
              <div class="zigzag-box w-full lg:w-1/2 bg-white shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                <div class="h-48 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/27704022/pexels-photo-27704022.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Automobile Servicing"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">Automobiles</h3>
                  <p class="text-gray-600 mb-4">
                    Professional automotive servicing solutions for two- and four-wheel vehicles with eco-friendly practices and expertise.
                  </p>
                  <a
                    routerLink="/services/automobiles"
                    class="inline-block bg-[#1a2a5e] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2d3f7f] transition"
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>

            <!-- Service 4: Technologies - Right -->
            <div class="flex justify-end">
              <div class="zigzag-box w-full lg:w-1/2 bg-white shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                <div class="h-48 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Web Development and Technology"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">Technologies</h3>
                  <p class="text-gray-600 mb-4">
                    Digital solutions and modern website development services powered by cutting-edge technology and innovation.
                  </p>
                  <a
                    routerLink="/services/technologies"
                    class="inline-block bg-[#1a2a5e] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2d3f7f] transition"
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>

            <!-- Service 5: Healthcare - Left -->
            <div class="flex justify-start">
              <div class="zigzag-box w-full lg:w-1/2 bg-white shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                <div class="h-48 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7469494/pexels-photo-7469494.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Healthcare Supplies and Equipment"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">Healthcare</h3>
                  <p class="text-gray-600 mb-4">
                    High-quality healthcare supplies and medical equipment designed to meet international safety and quality standards.
                  </p>
                  <a
                    routerLink="/services/healthcare"
                    class="inline-block bg-[#1a2a5e] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2d3f7f] transition"
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Product & Services Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">
            Our Product & Services
          </h2>
          <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our comprehensive range of eco-friendly products and
            professional services tailored to meet all your business needs.
          </p>

          <div class="relative">
            <!-- Carousel Container -->
            <div
              #servicesCarousel
              class="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
              style="scroll-behavior: smooth; scroll-snap-type: x mandatory;"
            >
              <!-- Disposables Service -->
              <div
                class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-[calc(33.333%-1.5rem)] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
                style="scroll-snap-align: start;"
              >
                <div class="h-48 flex items-center justify-center bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/6990484/pexels-photo-6990484.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Eco-Friendly Disposable Products"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    Disposables
                  </h3>
                  <p class="text-gray-600 mb-4">
                    Premium eco-friendly paper cutleries and sustainable
                    disposable products for food service, events, and
                    households.
                  </p>
                  <a
                    routerLink="/services/disposables"
                    class="inline-block bg-[#1a2a5e] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2d3f7f] transition"
                  >
                    View more
                  </a>
                </div>
              </div>

              <!-- Retail Service -->
              <div
                class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-[calc(33.333%-1.5rem)] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
                style="scroll-snap-align: start;"
              >
                <div class="h-48 flex items-center justify-center bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/3962283/pexels-photo-3962283.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Retail Supplies and Solutions"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Retail</h3>
                  <p class="text-gray-600 mb-4">
                    Comprehensive range of eco-friendly retail solutions
                    specifically designed for grocery stores and supermarkets.
                  </p>
                  <a
                    routerLink="/services/retail"
                    class="inline-block bg-[#1a2a5e] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2d3f7f] transition"
                  >
                    View more
                  </a>
                </div>
              </div>

              <!-- Automobiles Service -->
              <div
                class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-[calc(33.333%-1.5rem)] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
                style="scroll-snap-align: start;"
              >
                <div class="h-48 flex items-center justify-center bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/27704022/pexels-photo-27704022.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Automobile Servicing"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    Automobiles
                  </h3>
                  <p class="text-gray-600 mb-4">
                    Professional automotive servicing solutions for two- and
                    four-wheel vehicles with eco-friendly practices and
                    expertise.
                  </p>
                  <a
                    routerLink="/services/automobiles"
                    class="inline-block bg-[#1a2a5e] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2d3f7f] transition"
                  >
                    View more
                  </a>
                </div>
              </div>

              <!-- Technologies Service -->
              <div
                class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-[calc(33.333%-1.5rem)] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
                style="scroll-snap-align: start;"
              >
                <div class="h-48 flex items-center justify-center bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Web Development and Technology"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    Technologies
                  </h3>
                  <p class="text-gray-600 mb-4">
                    Digital solutions and modern website development services
                    powered by cutting-edge technology and innovation.
                  </p>
                  <a
                    routerLink="/services/technologies"
                    class="inline-block bg-[#1a2a5e] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2d3f7f] transition"
                  >
                    View more
                  </a>
                </div>
              </div>

              <!-- Healthcare Service -->
              <div
                class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-[calc(33.333%-1.5rem)] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
                style="scroll-snap-align: start;"
              >
                <div class="h-48 flex items-center justify-center bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/7469494/pexels-photo-7469494.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Healthcare Supplies and Equipment"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    Healthcare
                  </h3>
                  <p class="text-gray-600 mb-4">
                    High-quality healthcare supplies and medical equipment
                    designed to meet international safety and quality standards.
                  </p>
                  <a
                    routerLink="/services/healthcare"
                    class="inline-block bg-[#1a2a5e] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2d3f7f] transition"
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>

            <!-- Previous Button -->
            <button
              (click)="scrollCarousel('prev')"
              class="absolute left-0 top-1/3 transform -translate-y-1/2 -translate-x-6 bg-[#1a2a5e] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#2d3f7f] transition z-10"
            >
              &#10094;
            </button>

            <!-- Next Button -->
            <button
              (click)="scrollCarousel('next')"
              class="absolute right-0 top-1/3 transform -translate-y-1/2 translate-x-6 bg-[#1a2a5e] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#2d3f7f] transition z-10"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">
            Why Choose Nabhas?
          </h2>
          <p class="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
            Whether you're looking for premium products or professional
            services, Nabhas delivers excellence across every offering.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-[#1a2a5e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-900">
                100% Eco-Friendly
              </h3>
              <p class="text-gray-600">
                Our products and services are designed with environmental
                responsibility at their core, using sustainable materials and
                eco-conscious practices across all operations.
              </p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-[#1a2a5e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-900">
                Premium Quality
              </h3>
              <p class="text-gray-600">
                We maintain rigorous quality standards and continuous
                improvement across all our products and professional services to
                ensure excellence and customer satisfaction.
              </p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-[#1a2a5e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-900">
                Competitive Pricing
              </h3>
              <p class="text-gray-600">
                We offer transparent and competitive pricing for our complete
                range of products and services, ensuring great value without
                compromising on quality.
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
          <h2 class="text-4xl font-bold mb-4">Transform Your Business Today</h2>
          <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and consumers who are transforming
            their operations with Nabhas products and services.
          </p>
          <a
            routerLink="/contact"
            class="inline-block bg-white text-[#1a2a5e] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .zigzag-box {
      position: relative;
      clip-path: polygon(
        0% 0%, 2% 0%, 2% 2%, 4% 2%, 4% 0%, 6% 0%, 6% 2%, 8% 2%, 8% 0%, 10% 0%, 10% 2%, 12% 2%, 12% 0%, 14% 0%, 14% 2%, 16% 2%, 16% 0%, 18% 0%, 18% 2%, 20% 2%, 20% 0%, 22% 0%, 22% 2%, 24% 2%, 24% 0%, 26% 0%, 26% 2%, 28% 2%, 28% 0%, 30% 0%, 30% 2%, 32% 2%, 32% 0%, 34% 0%, 34% 2%, 36% 2%, 36% 0%, 38% 0%, 38% 2%, 40% 2%, 40% 0%, 42% 0%, 42% 2%, 44% 2%, 44% 0%, 46% 0%, 46% 2%, 48% 2%, 48% 0%, 50% 0%, 50% 2%, 52% 2%, 52% 0%, 54% 0%, 54% 2%, 56% 2%, 56% 0%, 58% 0%, 58% 2%, 60% 2%, 60% 0%, 62% 0%, 62% 2%, 64% 2%, 64% 0%, 66% 0%, 66% 2%, 68% 2%, 68% 0%, 70% 0%, 70% 2%, 72% 2%, 72% 0%, 74% 0%, 74% 2%, 76% 2%, 76% 0%, 78% 0%, 78% 2%, 80% 2%, 80% 0%, 82% 0%, 82% 2%, 84% 2%, 84% 0%, 86% 0%, 86% 2%, 88% 2%, 88% 0%, 90% 0%, 90% 2%, 92% 2%, 92% 0%, 94% 0%, 94% 2%, 96% 2%, 96% 0%, 98% 0%, 98% 2%, 100% 2%, 100% 0%, 100% 2%, 98% 2%, 98% 4%, 96% 4%, 96% 2%, 94% 2%, 94% 4%, 92% 4%, 92% 2%, 90% 2%, 90% 4%, 88% 4%, 88% 2%, 86% 2%, 86% 4%, 84% 4%, 84% 2%, 82% 2%, 82% 4%, 80% 4%, 80% 2%, 78% 2%, 78% 4%, 76% 4%, 76% 2%, 74% 2%, 74% 4%, 72% 4%, 72% 2%, 70% 2%, 70% 4%, 68% 4%, 68% 2%, 66% 2%, 66% 4%, 64% 4%, 64% 2%, 62% 2%, 62% 4%, 60% 4%, 60% 2%, 58% 2%, 58% 4%, 56% 4%, 56% 2%, 54% 2%, 54% 4%, 52% 4%, 52% 2%, 50% 2%, 50% 4%, 48% 4%, 48% 2%, 46% 2%, 46% 4%, 44% 4%, 44% 2%, 42% 2%, 42% 4%, 40% 4%, 40% 2%, 38% 2%, 38% 4%, 36% 4%, 36% 2%, 34% 2%, 34% 4%, 32% 4%, 32% 2%, 30% 2%, 30% 4%, 28% 4%, 28% 2%, 26% 2%, 26% 4%, 24% 4%, 24% 2%, 22% 2%, 22% 4%, 20% 4%, 20% 2%, 18% 2%, 18% 4%, 16% 4%, 16% 2%, 14% 2%, 14% 4%, 12% 4%, 12% 2%, 10% 2%, 10% 4%, 8% 4%, 8% 2%, 6% 2%, 6% 4%, 4% 4%, 4% 2%, 2% 2%, 2% 4%, 0% 4%, 0% 2%, 0% 0%
      );
    }
  `],
})
export class HomeComponent {
  @ViewChild("servicesCarousel") servicesCarousel!: ElementRef;

  scrollCarousel(direction: "next" | "prev") {
    const carousel = this.servicesCarousel?.nativeElement;
    if (carousel) {
      const scrollAmount = carousel.offsetWidth;
      if (direction === "next") {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  }
}
