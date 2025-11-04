import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-technologies",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16"
      >
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-4">Nabhas Technologies</h1>
          <p class="text-xl text-blue-50">
            Website development and digital solutions powered by cutting-edge
            technology
          </p>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6 text-gray-900">
                About Nabhas Technologies
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                The motto of the company is moving with the times ahead and that
                is always technical advancements. The technology division has
                members on the ownership stack who are from technology
                background of close to 30 years in various Indian IT companies.
                This owner has experience working with industry clients across
                the globe.
              </p>
              <p class="text-lg text-gray-700 mb-4">
                The company owner has worked for banking, manufacturing,
                telecom, and retail clients in India, Europe, USA, Canada,
                Australia, middle east and more. The exposure is primarily
                around business analysis, design, development, testing,
                deployment, and support.
              </p>
              <p class="text-lg text-gray-700">
                Nabhas has done two projects end to end in India for real estate
                company, paper disposables distribution. The interest lies in
                app development in web areas.
              </p>
            </div>
            <div class="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg"
                alt="Developer working on coding and web development with multiple displays"
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
            Our Technology Services
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Website Development
              </h3>
              <p class="text-gray-700 mb-4">
                Custom websites built with modern technologies for optimal
                performance.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Responsive design</li>
                <li>✓ Mobile-first approach</li>
                <li>✓ Fast loading speeds</li>
                <li>✓ SEO optimized</li>
                <li>✓ Cross-browser compatible</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                E-Commerce Solutions
              </h3>
              <p class="text-gray-700 mb-4">
                Full-featured e-commerce platforms to grow your online business.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Product catalog</li>
                <li>✓ Shopping cart</li>
                <li>✓ Payment gateway integration</li>
                <li>✓ Inventory management</li>
                <li>✓ Order tracking</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Web Applications
              </h3>
              <p class="text-gray-700 mb-4">
                Scalable web applications tailored to your business processes.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Custom development</li>
                <li>✓ Database design</li>
                <li>✓ API development</li>
                <li>✓ Real-time features</li>
                <li>✓ Cloud integration</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                UI/UX Design
              </h3>
              <p class="text-gray-700 mb-4">
                Beautiful and intuitive designs that enhance user experience.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ User research</li>
                <li>✓ Wireframing</li>
                <li>✓ Prototyping</li>
                <li>✓ Visual design</li>
                <li>✓ Usability testing</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Digital Marketing
              </h3>
              <p class="text-gray-700 mb-4">
                Comprehensive digital strategies to maximize your online
                visibility.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ SEO optimization</li>
                <li>✓ Content marketing</li>
                <li>✓ Social media strategy</li>
                <li>✓ Analytics & reporting</li>
                <li>✓ Conversion optimization</li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#1a2a5e]"
            >
              <h3 class="text-2xl font-bold text-[#1a2a5e] mb-4">
                Maintenance & Support
              </h3>
              <p class="text-gray-700 mb-4">
                Ongoing support to keep your digital solutions running smoothly.
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>✓ Bug fixes</li>
                <li>✓ Security updates</li>
                <li>✓ Performance optimization</li>
                <li>✓ Feature enhancements</li>
                <li>✓ 24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Technologies We Use
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div class="text-center p-4 bg-white rounded-lg shadow">
              <p class="text-[#1a2a5e] font-bold text-lg">Angular</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow">
              <p class="text-[#1a2a5e] font-bold text-lg">React</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow">
              <p class="text-[#1a2a5e] font-bold text-lg">Vue.js</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow">
              <p class="text-[#1a2a5e] font-bold text-lg">Node.js</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow">
              <p class="text-[#1a2a5e] font-bold text-lg">Python</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow">
              <p class="text-[#1a2a5e] font-bold text-lg">MongoDB</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow">
              <p class="text-[#1a2a5e] font-bold text-lg">PostgreSQL</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow">
              <p class="text-[#1a2a5e] font-bold text-lg">AWS</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Section -->
      <section class="bg-white py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Nabhas Technologies?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                💡
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p class="text-gray-700">
                Cutting-edge solutions using the latest technologies and trends.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                👥
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p class="text-gray-700">
                Experienced developers and designers dedicated to your success.
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#1a2a5e] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                🎯
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Results-Driven
              </h3>
              <p class="text-gray-700">
                Focused on delivering measurable results and ROI.
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
            Transform Your Digital Presence
          </h2>
          <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Let's build something amazing together with our technology
            solutions.
          </p>
          <button
            class="bg-white text-[#1a2a5e] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class TechnologiesComponent {}
