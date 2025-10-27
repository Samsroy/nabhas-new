import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

interface Banner {
  heading: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-gray-50">
      <!-- Sliding Banner Section -->
      <section
        class="text-white py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        [style.backgroundImage]="'url(' + banners[currentSlide].imageUrl + ')'"
      >
        <!-- Dark overlay for text readability -->
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-3xl">
            <div class="mb-8 h-24 flex items-center">
              <div
                *ngIf="currentSlide === 0"
                class="animate-banner-fade-in w-full"
              >
                <h1 class="text-5xl font-bold">
                  {{ banners[0].heading }}
                </h1>
              </div>
              <div
                *ngIf="currentSlide === 1"
                class="animate-banner-fade-in w-full"
              >
                <h1 class="text-5xl font-bold">
                  {{ banners[1].heading }}
                </h1>
              </div>
              <div
                *ngIf="currentSlide === 2"
                class="animate-banner-fade-in w-full"
              >
                <h1 class="text-5xl font-bold">
                  {{ banners[2].heading }}
                </h1>
              </div>
              <div
                *ngIf="currentSlide === 3"
                class="animate-banner-fade-in w-full"
              >
                <h1 class="text-5xl font-bold">
                  {{ banners[3].heading }}
                </h1>
              </div>
              <div
                *ngIf="currentSlide === 4"
                class="animate-banner-fade-in w-full"
              >
                <h1 class="text-5xl font-bold">
                  {{ banners[4].heading }}
                </h1>
              </div>
            </div>
            <div class="mb-8 h-24 flex items-center">
              <div
                *ngIf="currentSlide === 0"
                class="animate-banner-fade-in w-full"
              >
                <p class="text-xl text-blue-50">
                  {{ banners[0].description }}
                </p>
              </div>
              <div
                *ngIf="currentSlide === 1"
                class="animate-banner-fade-in w-full"
              >
                <p class="text-xl text-blue-50">
                  {{ banners[1].description }}
                </p>
              </div>
              <div
                *ngIf="currentSlide === 2"
                class="animate-banner-fade-in w-full"
              >
                <p class="text-xl text-blue-50">
                  {{ banners[2].description }}
                </p>
              </div>
              <div
                *ngIf="currentSlide === 3"
                class="animate-banner-fade-in w-full"
              >
                <p class="text-xl text-blue-50">
                  {{ banners[3].description }}
                </p>
              </div>
              <div
                *ngIf="currentSlide === 4"
                class="animate-banner-fade-in w-full"
              >
                <p class="text-xl text-blue-50">
                  {{ banners[4].description }}
                </p>
              </div>
            </div>
            <button
              class="bg-white text-[#1a2a5e] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Explore Our Products
            </button>
          </div>
        </div>

        <!-- Navigation Dots -->
        <div
          class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20"
        >
          <button
            *ngFor="let i of bannerIndices"
            (click)="goToSlide(i)"
            [class.bg-white]="i === currentSlide"
            [class.bg-blue-200]="i !== currentSlide"
            class="w-3 h-3 rounded-full transition-all duration-300"
          ></button>
        </div>

        <!-- Previous Button -->
        <button
          (click)="previousSlide()"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white text-[#1a2a5e] w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
        >
          &#10094;
        </button>

        <!-- Next Button -->
        <button
          (click)="nextSlide()"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white text-[#1a2a5e] w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
        >
          &#10095;
        </button>
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
              class="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
              style="scroll-behavior: smooth;"
            >
              <!-- Disposables Service -->
              <div
                class="flex-shrink-0 w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
              >
              <div class="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                  disposable products for food service, events, and households.
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
                class="flex-shrink-0 w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
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
                class="flex-shrink-0 w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
              >
              <div class="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/3783100/pexels-photo-3783100.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                  four-wheel vehicles with eco-friendly practices and expertise.
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
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
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
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            >
              <div class="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/3908111/pexels-photo-3908111.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Healthcare Supplies and Equipment"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Healthcare</h3>
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
        </div>
      </section>

      <!-- Features Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Nabhas?
          </h2>
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
                All our products are biodegradable and made from sustainable
                materials.
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
                Rigorous quality control ensures every product meets the highest
                standards.
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
                Affordable Pricing
              </h3>
              <p class="text-gray-600">
                Competitive prices without compromising on quality or
                environmental responsibility.
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
          <h2 class="text-4xl font-bold mb-4">Ready to Go Green?</h2>
          <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and consumers who are making a
            difference with Nabhas products.
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
export class HomeComponent implements OnInit, OnDestroy {
  banners: Banner[] = [
    {
      heading: "Nabhas disposables – paper cutleries",
      description:
        "Premium sustainable disposable products designed for your everyday needs with quality and environmental responsibility.",
      imageUrl:
        "https://images.pexels.com/photos/6990484/pexels-photo-6990484.jpeg",
    },
    {
      heading: "Nabhas Retail �� grocery store supplies",
      description:
        "Comprehensive range of eco-friendly retail solutions for grocery stores and supermarkets.",
      imageUrl:
        "https://images.pexels.com/photos/8422668/pexels-photo-8422668.jpeg",
    },
    {
      heading: "Nabhas automobiles – two- and four-wheel servicing",
      description:
        "Professional automotive servicing solutions with sustainable and eco-friendly practices.",
      imageUrl:
        "https://images.pexels.com/photos/7019598/pexels-photo-7019598.jpeg",
    },
    {
      heading: "Nabhas technologies – Website development",
      description:
        "Digital solutions and website development services powered by cutting-edge technology.",
      imageUrl:
        "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg",
    },
    {
      heading: "Nabhas healthcare – supplies on stands etc.",
      description:
        "Healthcare supplies and medical equipment designed with quality and safety standards.",
      imageUrl:
        "https://images.pexels.com/photos/7469494/pexels-photo-7469494.jpeg",
    },
  ];

  currentSlide: number = 0;
  bannerIndices: number[] = [];
  private autoSlideInterval: any;

  ngOnInit() {
    this.bannerIndices = Array.from(
      { length: this.banners.length },
      (_, i) => i,
    );
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.banners.length;
    this.resetAutoSlide();
  }

  previousSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.banners.length) % this.banners.length;
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.banners.length;
    }, 5000);
  }

  private resetAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }
}
