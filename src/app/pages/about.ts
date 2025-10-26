import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16"
      >
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-4">About Nabhas</h1>
          <p class="text-xl text-blue-50">
            Committed to sustainability and quality in every product we make.
          </p>
        </div>
      </section>

      <!-- About the Name Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="max-w-3xl">
            <h2 class="text-4xl font-bold mb-6 text-gray-900">The Meaning of Nabhas</h2>
            <p class="text-lg text-gray-700 mb-4">
              Nabhas holds significant meaning across multiple ancient cultures and philosophies. The term appears in Buddhism, Pali, Hinduism, Sanskrit, Jainism, and Prakrit traditions. In Jainism, Nabhas (नभस्) refers to the "atmosphere," a concept described in the 11th century Jñānārṇava, a treatise on Jain Yoga. According to this ancient wisdom, the cosmos is envisioned as the shape of a palm tree filled with the three worlds, surrounded by the three winds.
            </p>
            <p class="text-lg text-gray-700 mb-4">
              This profound meaning—encompassing the atmosphere and the cosmos—reflects our commitment to environmental stewardship and global responsibility. Our name embodies the essence of sustainability and the interconnectedness of all living things.
            </p>
          </div>
        </div>
      </section>

      <!-- Our Company Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <div class="max-w-3xl">
            <h2 class="text-4xl font-bold mb-6 text-gray-900">About M/S NABHAS</h2>
            <p class="text-lg text-gray-700 mb-4">
              M/S NABHAS is a sole proprietorship firm headquartered in Ahmadabad, Gujarat, India. The company originally started in Kolkata, India, trading in handicrafts such as lamps and gift items before expanding operations across the globe.
            </p>
            <p class="text-lg text-gray-700 mb-4">
              Founded by a visionary women entrepreneur, M/S NABHAS is built on a strong foundation of consumer goods distribution, food retail, digital channels, technology-driven marketing tools, garments and apparel, and e-commerce expertise.
            </p>
            <p class="text-lg text-gray-700">
              Today, Nabhas operates across five primary business divisions, each designed to meet diverse market needs while maintaining our core commitment to quality, sustainability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <!-- Mission & Values Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Mission & Values
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Our Mission
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                To manufacture and distribute premium, sustainable packaging and
                disposable products that empower businesses and consumers to
                make environmentally responsible choices without sacrificing
                quality, affordability, or convenience.
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">Our Values</h3>
              <ul class="text-gray-700 text-lg space-y-3">
                <li class="flex items-start gap-3">
                  <span class="text-[#1a2a5e] font-bold mt-1">✓</span>
                  <span
                    ><strong>Sustainability</strong> - Protecting our planet for
                    future generations</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#1a2a5e] font-bold mt-1">✓</span>
                  <span
                    ><strong>Quality</strong> - Excellence in every product we
                    manufacture</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#1a2a5e] font-bold mt-1">✓</span>
                  <span
                    ><strong>Integrity</strong> - Honest business practices and
                    transparency</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#1a2a5e] font-bold mt-1">✓</span>
                  <span
                    ><strong>Innovation</strong> - Continuously improving our
                    products and processes</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Why We Do This Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto max-w-3xl">
          <h2 class="text-4xl font-bold mb-8 text-gray-900">Why We Do This</h2>
          <div class="space-y-6">
            <div class="flex gap-6">
              <div class="text-4xl text-[#1a2a5e] font-bold flex-shrink-0">
                01
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Plastic Crisis
                </h3>
                <p class="text-gray-700">
                  Over 8 million tons of plastic end up in our oceans every
                  year. We're committed to being part of the solution by
                  offering practical alternatives.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="text-4xl text-[#1a2a5e] font-bold flex-shrink-0">
                02
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Climate Change
                </h3>
                <p class="text-gray-700">
                  Sustainable materials require significantly less energy to
                  produce and decompose naturally, reducing our collective
                  carbon footprint.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="text-4xl text-[#1a2a5e] font-bold flex-shrink-0">
                03
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Consumer Demand
                </h3>
                <p class="text-gray-700">
                  More people than ever are choosing eco-friendly options. We're
                  here to make that choice accessible and affordable for
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">
            Dedicated to Excellence
          </h2>
          <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our team comprises experienced professionals in manufacturing,
            sustainability, and customer service, all united by a passion for
            making a positive impact.
          </p>
          <div
            class="bg-gradient-to-r from-green-50 to-blue-50 p-12 rounded-lg text-center"
          >
            <p class="text-lg text-gray-700 font-semibold">
              Every member of the Nabhas team is committed to innovation,
              quality, and environmental stewardship. Together, we're building a
              more sustainable future.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16 px-4"
      >
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4">Get in Touch</h2>
          <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Have questions about our products or want to learn more about
            Nabhas? We'd love to hear from you!
          </p>
          <button
            class="bg-white text-[#1a2a5e] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class AboutComponent {}
