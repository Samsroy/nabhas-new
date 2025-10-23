import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  price?: string;
}

@Component({
  selector: "app-products",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16"
      >
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-4">Our Products</h1>
          <p class="text-xl text-blue-50">
            Comprehensive range of eco-friendly packaging solutions for every
            need
          </p>
        </div>
      </section>

      <!-- Category Filter -->
      <section class="py-12 px-4 bg-white">
        <div class="container mx-auto">
          <div class="flex flex-wrap gap-4 justify-center">
            <button
              *ngFor="let cat of categories"
              (click)="selectedCategory = cat === 'All' ? '' : cat"
              [ngClass]="{
                'bg-[#1a2a5e] text-white':
                  selectedCategory === (cat === 'All' ? '' : cat) ||
                  (selectedCategory === '' && cat === 'All'),
                'bg-gray-200 text-gray-900 hover:bg-gray-300':
                  selectedCategory !== (cat === 'All' ? '' : cat) &&
                  !(selectedCategory === '' && cat === 'All'),
              }"
              class="px-6 py-2 rounded-full font-semibold transition"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </section>

      <!-- Products Grid -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              *ngFor="let product of filteredProducts"
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
            >
              <!-- Product Image -->
              <div class="h-64 overflow-hidden bg-gray-100">
                <img
                  [src]="product.image"
                  [alt]="product.name"
                  class="h-full w-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              <!-- Product Info -->
              <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-2xl font-bold text-gray-900">
                    {{ product.name }}
                  </h3>
                </div>
                <p class="text-sm text-[#1a2a5e] font-semibold mb-3">
                  {{ product.category }}
                </p>
                <p class="text-gray-600 mb-4">{{ product.description }}</p>

                <!-- Features -->
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul class="space-y-1">
                    <li
                      *ngFor="let feature of product.features"
                      class="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span class="text-[#1a2a5e] font-bold mt-0.5">✓</span>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA -->
                <button
                  class="w-full bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom Solutions Section -->
      <section class="bg-blue-50 py-16 px-4">
        <div class="container mx-auto max-w-3xl text-center">
          <h2 class="text-4xl font-bold mb-4 text-gray-900">
            Need Custom Solutions?
          </h2>
          <p class="text-lg text-gray-700 mb-8">
            We specialize in custom packaging solutions tailored to your
            business needs. From bulk orders to specialized designs, our team is
            ready to help.
          </p>
          <button
            class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition"
          >
            Request Custom Quote
          </button>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto max-w-3xl">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div class="space-y-4">
            <div
              *ngFor="let item of faqItems; let i = index"
              class="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                (click)="toggleFaq(i)"
                class="w-full p-6 bg-white hover:bg-gray-50 transition flex justify-between items-center text-left"
              >
                <span class="font-semibold text-gray-900 text-lg">{{
                  item.question
                }}</span>
                <span
                  class="text-[#1a2a5e] font-bold text-2xl transition"
                  [ngClass]="{ 'rotate-45': expandedFaq === i }"
                >
                  +
                </span>
              </button>
              <div
                *ngIf="expandedFaq === i"
                class="p-6 bg-gray-50 border-t border-gray-300"
              >
                <p class="text-gray-700 leading-relaxed">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class ProductsComponent {
  selectedCategory = "";
  expandedFaq: number | null = null;

  categories = ["All", "Paper Products", "Wooden Products", "Tissues"];

  products: Product[] = [
    {
      id: 1,
      name: "Paper Plates",
      category: "Paper Products",
      description:
        "Durable, microwave-safe, and 100% biodegradable paper plates perfect for any occasion.",
      features: [
        "Microwave safe",
        "100% Biodegradable",
        "Various sizes available",
        "FDA approved",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2Ff404ab8dd6b64b7b884ac6bcbeb02fe7?format=webp&width=800",
    },
    {
      id: 2,
      name: "Paper Cups",
      category: "Paper Products",
      description:
        "Premium quality cups for hot and cold beverages, ideal for cafes and restaurants.",
      features: [
        "Heat resistant",
        "Custom printing available",
        "Various capacities",
        "Leak-proof design",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F983fcf37b7ad44288daa6b0b8b6ac775?format=webp&width=800",
    },
    {
      id: 3,
      name: "Printed Cups",
      category: "Paper Products",
      description:
        "Custom printed paper cups for branded beverages and special events. Eye-catching designs.",
      features: [
        "Full color printing",
        "Brand customization",
        "Quick turnaround",
        "Bulk discounts",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F0a27eca1df3c4c5d8f1e57fce8e57d83?format=webp&width=800",
    },
    {
      id: 4,
      name: "Paper Napkins",
      category: "Paper Products",
      description:
        "Soft, absorbent napkins for dining and cleaning. Available in various sizes and designs.",
      features: [
        "2-ply & 3-ply options",
        "Custom patterns",
        "Hygienic packaging",
        "Cost-effective",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F4c4d4440d3a7426092228a22c1eaa8fe?format=webp&width=800",
    },
    {
      id: 5,
      name: "Tissue Rolls",
      category: "Tissues",
      description:
        "Premium quality tissue rolls for homes and businesses. Soft, strong, and eco-friendly.",
      features: [
        "Ultra-soft texture",
        "High absorbency",
        "Various ply options",
        "Wholesale pricing",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F93bf8b36f0724ff5a022c16d126d0142?format=webp&width=800",
    },
    {
      id: 6,
      name: "Wooden Cutlery",
      category: "Wooden Products",
      description:
        "Natural wooden forks, knives, and spoons. Sustainable, lightweight, and perfect for takeout.",
      features: [
        "100% Natural wood",
        "Fully biodegradable",
        "Splinter-free",
        "Eco-certified",
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fddffe2d9decc4ddbbc69f281c2a1b6b8%2F883389fd44704e84b7b3f13610d51e3e?format=webp&width=800",
    },
  ];

  faqItems = [
    {
      question: "Are your products truly biodegradable?",
      answer:
        "Yes, all our products are made from renewable resources and are 100% biodegradable. Our products comply with international standards for compostability and environmental safety.",
    },
    {
      question: "What are your minimum order quantities?",
      answer:
        "We offer flexible ordering options starting from small quantities for retail customers to large bulk orders for businesses. Contact us for specific pricing based on your needs.",
    },
    {
      question: "Do you offer custom branding?",
      answer:
        "Absolutely! We provide custom printing and branding on most of our products. Our design team can help you create unique packaging that reflects your brand identity.",
    },
    {
      question: "What is the lead time for orders?",
      answer:
        "Standard orders typically ship within 5-7 business days. Custom printed products may take 10-14 days depending on design complexity. Rush orders are available upon request.",
    },
    {
      question: "Do you offer wholesale pricing?",
      answer:
        "Yes, we offer competitive wholesale pricing for bulk orders. Contact our sales team to discuss your specific requirements and get a customized quote.",
    },
    {
      question: "What certifications do your products have?",
      answer:
        "Our products are certified by international environmental standards including FDA approval, ISO certifications, and compostability standards to ensure quality and safety.",
    },
  ];

  get filteredProducts(): Product[] {
    if (!this.selectedCategory) {
      return this.products;
    }
    return this.products.filter((p) => p.category === this.selectedCategory);
  }

  toggleFaq(index: number): void {
    this.expandedFaq = this.expandedFaq === index ? null : index;
  }
}
