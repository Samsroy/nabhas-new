import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeoService } from "../services/seo.service";

@Component({
  selector: "app-manpower",
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
          <h1 class="text-5xl font-bold mb-4">Nabhas HR Manpower Services</h1>
          <p class="text-xl text-blue-50">
            Comprehensive human resources and manpower solutions for your business growth
          </p>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6 text-gray-900">
                About Nabhas HR Manpower Services
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                Nabhas HR Manpower Services is dedicated to providing comprehensive human resources solutions that drive organizational success. We specialize in connecting talented professionals with forward-thinking companies, ensuring a perfect match that benefits both parties.
              </p>
              <p class="text-lg text-gray-700 mb-4">
                With expertise in talent acquisition, workforce development, and HR management, we help businesses build strong, diverse, and productive teams. Our approach is tailored to meet the unique needs of each client, whether you're a startup or an established enterprise.
              </p>
              <p class="text-lg text-gray-700">
                We are committed to supporting organizational growth through strategic talent management and innovative HR solutions that align with your business objectives.
              </p>
            </div>
            <div class="hidden lg:block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa0382a6a2faa4215b0813cf9e2786086%2F7a216e05fe2349aca08db813b7d3c5e2?format=webp&width=800&height=1200"
                alt="HR professionals collaborating on workforce management and talent acquisition"
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
            Our HR Services
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Recruitment & Talent Acquisition
              </h3>
              <p class="text-gray-700 mb-4">
                Strategic recruitment services to find the right talent for your organization.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Executive search & placement</li>
                <li>✓ Technical recruitment</li>
                <li>✓ Graduate recruitment programs</li>
                <li>✓ Permanent & temporary staffing</li>
                <li>✓ Campus hiring programs</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Training & Development
              </h3>
              <p class="text-gray-700 mb-4">
                Comprehensive training programs to enhance employee skills and performance.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Leadership development programs</li>
                <li>✓ Technical skill training</li>
                <li>✓ Soft skills development</li>
                <li>✓ Customized corporate training</li>
                <li>✓ Performance coaching</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                HR Management Solutions
              </h3>
              <p class="text-gray-700 mb-4">
                End-to-end HR management services for optimal workforce operations.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Payroll management</li>
                <li>✓ Employee relations & engagement</li>
                <li>✓ Performance appraisal systems</li>
                <li>✓ HR compliance & documentation</li>
                <li>✓ Leave & attendance management</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Organizational Development
              </h3>
              <p class="text-gray-700 mb-4">
                Strategic guidance to build a strong organizational culture and structure.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Change management consulting</li>
                <li>✓ Organization restructuring</li>
                <li>✓ Team building programs</li>
                <li>✓ Culture transformation initiatives</li>
                <li>✓ Succession planning</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Staffing Solutions
              </h3>
              <p class="text-gray-700 mb-4">
                Flexible staffing options to meet dynamic business requirements.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Temporary staffing</li>
                <li>✓ Contract-based employment</li>
                <li>✓ Permanent placement</li>
                <li>✓ On-demand workforce solutions</li>
                <li>✓ Specialized skill personnel</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                HR Consulting
              </h3>
              <p class="text-gray-700 mb-4">
                Expert consultation on strategic HR initiatives and best practices.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ HR strategy development</li>
                <li>✓ Policy & procedure development</li>
                <li>✓ Compensation & benefits design</li>
                <li>✓ Legal compliance advisory</li>
                <li>✓ Talent management strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Nabhas HR Manpower Services?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Industry Expertise
              </h3>
              <p class="text-gray-700">
                Deep knowledge across multiple industries with proven track record in talent placement and HR solutions.
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Qualified Professionals
              </h3>
              <p class="text-gray-700">
                Access to a pool of highly skilled and certified HR professionals ready to support your organization.
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Customized Solutions
              </h3>
              <p class="text-gray-700">
                Tailored HR solutions designed specifically to meet your organization's unique needs and goals.
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <h3 class="text-xl font-bold text-[#1a2a5e] mb-3">
                Long-term Partnership
              </h3>
              <p class="text-gray-700">
                We are committed to being a trusted HR partner in your organization's growth journey.
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
          <h2 class="text-4xl font-bold mb-4">Build a Winning Team Today</h2>
          <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Partner with Nabhas HR Manpower Services to find the right talent and develop your workforce.
          </p>
          <button
            class="bg-white text-[#1a2a5e] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class ManpowerComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setMetaTags({
      title: "Nabhas HR Manpower Services | Recruitment & Talent Management",
      description:
        "Comprehensive HR and manpower services including recruitment, training, workforce development, and talent management solutions for business growth.",
      keywords:
        "HR services, manpower services, recruitment, talent acquisition, HR management, workforce development, staffing solutions",
      ogTitle: "Nabhas HR Manpower Services | Talent Solutions",
      ogDescription:
        "Expert HR and manpower services to build and develop your workforce.",
      ogImage:
        "https://cdn.builder.io/api/v1/image/assets%2Fa0382a6a2faa4215b0813cf9e2786086%2F7a216e05fe2349aca08db813b7d3c5e2?format=webp&width=800&height=1200",
    });
  }
}
