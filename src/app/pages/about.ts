import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeoService } from "../services/seo.service";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  providers: [SeoService],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] py-20 text-white"
      >
        <div class="container mx-auto max-w-4xl px-4 text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Our story
          </p>
          <h1 class="mb-5 text-4xl font-bold md:text-6xl">About Nabhas</h1>
          <p class="mx-auto max-w-2xl text-lg leading-relaxed text-blue-50 md:text-xl">
            Committed to sustainability and quality in every product we make.
          </p>
        </div>
      </section>

      <!-- About the Name Section -->
      <section class="bg-slate-50 px-4 py-16">
        <div class="container mx-auto">
          <div class="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-md md:p-10">
            <p class="mb-4 text-lg leading-8 text-slate-700">
              Nabhas holds significant meaning across multiple ancient cultures
              and philosophies. The term appears in Buddhism, Pali, Hinduism,
              Sanskrit, Jainism, and Prakrit traditions. In Jainism, Nabhas
              (नभस्) refers to the "atmosphere," a concept described in the 11th
              century Jñānārṇava, a treatise on Jain Yoga. According to this
              ancient wisdom, the cosmos is envisioned as the shape of a palm
              tree filled with the three worlds, surrounded by the three winds.
            </p>
            <p class="mb-4 text-lg leading-8 text-slate-700">
              This profound meaning—encompassing the atmosphere and the
              cosmos—reflects our commitment to environmental stewardship and
              global responsibility. Our name embodies the essence of
              sustainability and the interconnectedness of all living things.
            </p>
          </div>
        </div>
      </section>

      <!-- Our Company Section -->
      <section class="bg-white px-4 py-16">
        <div class="container mx-auto">
          <div class="mx-auto max-w-4xl rounded-2xl bg-slate-50 p-6 md:p-10">
            <h2 class="mb-6 border-l-4 border-[#1a2a5e] pl-4 text-3xl font-bold text-[#1a2a5e] md:text-4xl">
              About M/S NABHAS
            </h2>
            <p class="mb-4 text-lg leading-8 text-slate-700">
              M/S NABHAS is a sole proprietorship firm headquartered in Mumbai,
              Mahashtra, India. The company originally started in Kolkata,
              India, trading in handicrafts decorative lamps and gift items
              before expanding operations across the globe.
            </p>
            <p class="mb-4 text-lg leading-8 text-slate-700">
              Founded by a visionary women entrepreneur, M/S NABHAS is built on
              a strong foundation of paper disposables, food items basically
              confectionaries, restaurants / cafes, technology like application
              development and support, retail mainly grocery supplies,
              e-commerce set up including digital commerce and supplies, Pharma
              supplies and distribution in healthcare division.
            </p>
            <p class="text-lg leading-8 text-slate-700">
              Today, Nabhas operates across primary business segments, each
              designed to meet diverse market needs while maintaining our core
              commitment to quality, sustainability, and customer satisfaction.
              Nabhas wants to expand their operations globally directly and
              through dealers and distribution channel networks into various
              cities within India and other countries like Middle east, Far
              East, Australia, Africa, Europe and USA.
            </p>
          </div>
        </div>
      </section>

      <!-- Business Divisions Section -->
      <section class="bg-slate-50 px-4 py-16">
        <div class="container mx-auto">
          <h2 class="mb-12 text-center text-3xl font-bold text-[#1a2a5e] md:text-4xl">
            Our Business Divisions
          </h2>
          <div class="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            <div
              class="rounded-xl border border-blue-100 border-l-4 border-l-[#1a2a5e] bg-gradient-to-br from-white to-blue-50 p-8 shadow-sm"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-3">
                Nabhas Disposables
              </h3>
              <p class="text-gray-700 text-lg">
                Premium paper cutleries and disposable products designed for
                sustainability and convenience.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- Why We Do This Section -->
      <section class="bg-white px-4 py-16">
        <div class="container mx-auto max-w-4xl">
          <h2 class="mb-10 text-3xl font-bold text-[#1a2a5e] md:text-4xl">Why We Do This</h2>
          <div class="grid gap-5 md:grid-cols-3">
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div class="mb-4 text-4xl font-bold text-[#1a2a5e]">
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
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div class="mb-4 text-4xl font-bold text-[#1a2a5e]">
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
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div class="mb-4 text-4xl font-bold text-[#1a2a5e]">
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
      <section class="bg-slate-50 px-4 py-16">
        <div class="container mx-auto max-w-5xl">
          <h2 class="mb-4 text-center text-3xl font-bold text-[#1a2a5e] md:text-4xl">
            Dedicated to Excellence
          </h2>
          <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our team comprises experienced professionals in manufacturing,
            sustainability, and customer service, all united by a passion for
            making a positive impact.
          </p>
          <div
            class="rounded-2xl border border-blue-100 bg-gradient-to-r from-green-50 to-blue-50 p-8 text-center shadow-sm md:p-12"
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
        <div class="container mx-auto max-w-4xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Connect with us</p>
          <h2 class="mb-4 text-3xl font-bold md:text-4xl">Get in Touch</h2>
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
export class AboutComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setMetaTags({
      title: "About Nabhas | Our Story and Mission",
      description:
        "Learn about M/S Nabhas, a leading sole proprietorship firm offering innovative solutions in disposables, retail, foods, technology, and healthcare sectors.",
      keywords:
        "About Nabhas, company history, sustainable solutions, business divisions, Nabhas company",
      ogTitle: "About Nabhas | Innovative Business Solutions",
      ogDescription:
        "Discover the story behind Nabhas and our commitment to quality, sustainability, and customer satisfaction.",
      ogImage:
        "https://cdn.builder.io/api/v1/image/assets%2F7915a4368506448c8f5915d2ed37a144%2Feb865ee565824990893cb3aeabaaa7a2?format=webp&width=800",
    });
  }
}
