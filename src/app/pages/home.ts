import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { SeoService } from "../services/seo.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [SeoService],
  template: `
    <div class="bg-gray-50">
      <!-- Main H1 Heading (SEO) -->
      <h1 class="sr-only">
        Nabhas - Premium Disposables, Retail, Foods, Technology and Healthcare
        Solutions
      </h1>

      <!-- Masonry Grid Services Section with Background Images -->
      <section class="py-0 px-0 bg-white w-full">
        <div class="w-full">
          <div class="grid grid-cols-1 gap-0 py-0" style="grid-template-columns: repeat(6, 1fr);">
            <!-- Using 6-column grid: top row items span 3 cols each (50%), bottom row items span 2 cols each (33%) -->
            <!-- Row 1: Disposables (50%) and HR Manpower (50%) -->
            <!-- Service 1: Disposables - spans 3 of 6 columns (50%) -->
            <div class="h-64 md:h-80" style="grid-column: span 3;">
              <a
                routerLink="/services/disposables"
                class="service-card relative w-full h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block"
                style="background-image: url('https://images.pexels.com/photos/6990484/pexels-photo-6990484.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'); background-size: cover; background-position: center;"
              >
                <div class="absolute inset-0 flex flex-col justify-end">
                  <div class="bg-black bg-opacity-70 p-6">
                    <h3
                      class="text-4xl lg:text-5xl font-bold text-yellow-300 drop-shadow-lg mb-3 tracking-wide"
                    >
                      Nabhas - Disposables
                    </h3>
                    <p
                      class="text-yellow-100 text-base lg:text-lg drop-shadow-lg line-clamp-3 leading-relaxed font-medium"
                    >
                      Premium eco-friendly paper cutleries and sustainable
                      disposable products for food service, events, and
                      households.
                    </p>
                    <button
                      class="mt-4 inline-block bg-white text-[#1a2a5e] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
                    >
                      View more
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <!-- Service 2: HR Manpower - spans 3 of 6 columns (50%) -->
            <div class="h-64 md:h-80" style="grid-column: span 3;">
              <a
                routerLink="/services/manpower"
                class="service-card relative w-full h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block"
                style="background-image: url('https://cdn.builder.io/api/v1/image/assets%2Fa0382a6a2faa4215b0813cf9e2786086%2F7a216e05fe2349aca08db813b7d3c5e2?format=webp&width=800&height=1200'); background-size: cover; background-position: center;"
              >
                <div class="absolute inset-0 flex flex-col justify-end">
                  <div class="bg-black bg-opacity-70 p-6">
                    <h3
                      class="text-4xl lg:text-5xl font-bold text-blue-300 drop-shadow-lg mb-3 tracking-wide"
                    >
                      HR Manpower
                    </h3>
                    <p
                      class="text-blue-100 text-base lg:text-lg drop-shadow-lg line-clamp-3 leading-relaxed font-medium"
                    >
                      Comprehensive human resources and manpower solutions
                      including recruitment, training, and talent management services.
                    </p>
                    <button
                      class="mt-4 inline-block bg-white text-[#1a2a5e] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
                    >
                      View more
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <!-- Row 2: Foods & Cafe's (33%), Technology (33%), Retail (33%) -->
            <!-- Service 3: Foods & Cafe's - spans 2 of 6 columns (33%) -->
            <div class="h-64 md:h-80" style="grid-column: span 2;">
              <a
                routerLink="/services/food-cafes"
                class="service-card relative w-full h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block"
                style="background-image: url('https://cdn.builder.io/api/v1/image/assets%2F7915a4368506448c8f5915d2ed37a144%2F106431ca66b441e2827769fdc12734c7?format=webp&width=800'); background-size: cover; background-position: center;"
              >
                <div class="absolute inset-0 flex flex-col justify-end">
                  <div class="bg-black bg-opacity-70 p-6">
                    <h3
                      class="text-4xl lg:text-5xl font-bold text-orange-300 drop-shadow-lg mb-3 tracking-wide"
                    >
                      Nabhas - Foods & Cafe's
                    </h3>
                    <p
                      class="text-orange-100 text-base lg:text-lg drop-shadow-lg line-clamp-3 leading-relaxed font-medium"
                    >
                      Premium sustainable food and beverage solutions for cafes
                      and restaurants with eco-friendly practices.
                    </p>
                    <button
                      class="mt-4 inline-block bg-white text-[#1a2a5e] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
                    >
                      View more
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <!-- Service 4: Technologies - spans 2 of 6 columns (33%) -->
            <div class="h-64 md:h-80" style="grid-column: span 2;">
              <a
                routerLink="/services/technologies"
                class="service-card relative w-full h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block"
                style="background-image: url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'); background-size: cover; background-position: center;"
              >
                <div class="absolute inset-0 flex flex-col justify-end">
                  <div class="bg-black bg-opacity-70 p-6">
                    <h3
                      class="text-4xl lg:text-5xl font-bold text-cyan-300 drop-shadow-lg mb-3 tracking-wide"
                    >
                      Nabhas - Technology
                    </h3>
                    <p
                      class="text-cyan-100 text-base lg:text-lg drop-shadow-lg line-clamp-3 leading-relaxed font-medium"
                    >
                      Digital solutions and modern website development services
                      powered by cutting-edge technology and innovation.
                    </p>
                    <button
                      class="mt-4 inline-block bg-white text-[#1a2a5e] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
                    >
                      View more
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <!-- Service 5: Retail - spans 2 of 6 columns (33%) -->
            <div class="h-64 md:h-80" style="grid-column: span 2;">
              <a
                routerLink="/services/retail"
                class="service-card relative w-full h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block"
                style="background-image: url('https://images.pexels.com/photos/3962283/pexels-photo-3962283.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'); background-size: cover; background-position: center;"
              >
                <div class="absolute inset-0 flex flex-col justify-end">
                  <div class="bg-black bg-opacity-70 p-6">
                    <h3
                      class="text-4xl lg:text-5xl font-bold text-green-300 drop-shadow-lg mb-3 tracking-wide"
                    >
                      Nabhas - Retail
                    </h3>
                    <p
                      class="text-green-100 text-base lg:text-lg drop-shadow-lg line-clamp-3 leading-relaxed font-medium"
                    >
                      Comprehensive range of eco-friendly retail solutions
                      specifically designed for grocery stores and supermarkets.
                    </p>
                    <button
                      class="mt-4 inline-block bg-white text-[#1a2a5e] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
                    >
                      View more
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Nabhas Section -->
      <section class="bg-blue-50 py-10 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-6 text-gray-900">
            About Nabhas
          </h2>

          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p class="text-base lg:text-lg">
              M/S NABHAS is a sole proprietorship firm headquartered in Mumbai,
              Mahashtra, India. The company originally started in Kolkata,
              India, trading in handicrafts decorative lamps and gift items
              before expanding operations across the globe.
            </p>

            <p class="text-base lg:text-lg">
              Founded by a visionary women entrepreneur, M/S NABHAS is built on
              a strong foundation of paper disposables, food items basically
              confectionaries, restaurants / cafes, technology like application
              development and support, retail mainly grocery supplies,
              e-commerce set up including digital commerce and supplies, Pharma
              supplies and distribution in healthcare division.
            </p>

            <p class="text-base lg:text-lg">
              Today, Nabhas operates across primary business segments, each
              designed to meet diverse market needs while maintaining our core
              commitment to quality, sustainability, and customer satisfaction.
              Nabhas wants to expand their operations globally directly and
              through dealers and distribution channel networks into various
              cities within India and other countries like Middle east, Far
              East, Australia, Africa, Europe and USA.
            </p>

            <h3 class="text-2xl font-semibold text-gray-900 pt-4">
              Our Business Divisions
            </h3>

            <ul class="space-y-2 pl-6 list-disc">
              <li class="text-base lg:text-lg">
                <strong>Nabhas Disposables</strong>
              </li>
              <li class="text-base lg:text-lg">
                <strong>Nabhas Retail</strong>
              </li>
              <li class="text-base lg:text-lg">
                <strong>Nabhas Technology</strong>
              </li>
              <li class="text-base lg:text-lg">
                <strong>Nabhas Foods &amp; Cafes</strong>
              </li>
              <li class="text-base lg:text-lg">
                <strong>Nabhas HR Manpower Services</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16 px-4"
      >
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <!-- Left Column: Text Content -->
            <div class="text-left md:text-left">
              <h2 class="text-4xl font-bold mb-4">
                Transform Your Business Today
              </h2>
              <p class="text-xl text-blue-50 mb-8">
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

            <!-- Right Column: Product Image -->
            <div class="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa0382a6a2faa4215b0813cf9e2786086%2F0ace7cea988c4697be5b1314314921f5?format=webp&width=800"
                alt="Nabhas Disposable Products"
                class="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Product & Services Section -->
      <section class="py-16 px-4 hidden">
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

              <!-- Foods & Cafe's Service -->
              <div
                class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-[calc(33.333%-1.5rem)] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
                style="scroll-snap-align: start;"
              >
                <div class="h-48 flex items-center justify-center bg-gray-100">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7915a4368506448c8f5915d2ed37a144%2F106431ca66b441e2827769fdc12734c7?format=webp&width=600"
                    alt="Premium Food and Beverage Solutions"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    Foods & Cafe's
                  </h3>
                  <p class="text-gray-600 mb-4">
                    Premium sustainable food and beverage solutions for cafes
                    and restaurants with eco-friendly practices.
                  </p>
                  <a
                    routerLink="/services/food-cafes"
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
    </div>
  `,
  styles: [
    `
      .zigzag-box {
        position: relative;
        clip-path: polygon(
          0% 5%,
          2% 0%,
          4% 5%,
          6% 0%,
          8% 5%,
          10% 0%,
          12% 5%,
          14% 0%,
          16% 5%,
          18% 0%,
          20% 5%,
          22% 0%,
          24% 5%,
          26% 0%,
          28% 5%,
          30% 0%,
          32% 5%,
          34% 0%,
          36% 5%,
          38% 0%,
          40% 5%,
          42% 0%,
          44% 5%,
          46% 0%,
          48% 5%,
          50% 0%,
          52% 5%,
          54% 0%,
          56% 5%,
          58% 0%,
          60% 5%,
          62% 0%,
          64% 5%,
          66% 0%,
          68% 5%,
          70% 0%,
          72% 5%,
          74% 0%,
          76% 5%,
          78% 0%,
          80% 5%,
          82% 0%,
          84% 5%,
          86% 0%,
          88% 5%,
          90% 0%,
          92% 5%,
          94% 0%,
          96% 5%,
          98% 0%,
          100% 5%,
          100% 95%,
          98% 100%,
          96% 95%,
          94% 100%,
          92% 95%,
          90% 100%,
          88% 95%,
          86% 100%,
          84% 95%,
          82% 100%,
          80% 95%,
          78% 100%,
          76% 95%,
          74% 100%,
          72% 95%,
          70% 100%,
          68% 95%,
          66% 100%,
          64% 95%,
          62% 100%,
          60% 95%,
          58% 100%,
          56% 95%,
          54% 100%,
          52% 95%,
          50% 100%,
          48% 95%,
          46% 100%,
          44% 95%,
          42% 100%,
          40% 95%,
          38% 100%,
          36% 95%,
          34% 100%,
          32% 95%,
          30% 100%,
          28% 95%,
          26% 100%,
          24% 95%,
          22% 100%,
          20% 95%,
          18% 100%,
          16% 95%,
          14% 100%,
          12% 95%,
          10% 100%,
          8% 95%,
          6% 100%,
          4% 95%,
          2% 100%,
          0% 95%
        );
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  @ViewChild("servicesCarousel") servicesCarousel?: ElementRef;

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setMetaTags({
      title:
        "Nabhas | Premium Disposables, Retail, Foods, Technology & Healthcare Solutions",
      description:
        "Nabhas offers innovative solutions in paper disposables, retail, foods & cafes, technology, and healthcare. A global firm with operations across India, Europe, Australia, Middle East, and USA.",
      keywords:
        "Nabhas, disposables, retail, food cafe solutions, technology solutions, healthcare solutions, sustainable products, global business",
      ogTitle: "Nabhas | Smart Partners Smart Future",
      ogDescription:
        "Discover premium solutions in disposables, retail, foods, technology, and healthcare from Nabhas.",
      ogImage:
        "https://cdn.builder.io/api/v1/image/assets%2F7915a4368506448c8f5915d2ed37a144%2Feb865ee565824990893cb3aeabaaa7a2?format=webp&width=800",
    });
  }

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
