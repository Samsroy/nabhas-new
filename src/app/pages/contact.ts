import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-4">Get in Touch</h1>
          <p class="text-xl text-blue-50">
            Nabhas is a global company with operations across India, Europe, Australia, Middle East, and beyond. Connect with us today!
          </p>
        </div>
      </section>

      <!-- Contact Info & Form Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Contact Information -->
            <div class="lg:col-span-1 space-y-8">
              <!-- Email -->
              <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-[#1a2a5e]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-3">Email</h3>
                    <p class="text-sm text-gray-600 mb-1"><span class="font-semibold">General:</span> contact@nabhas.co.in</p>
                    <p class="text-sm text-gray-600 mb-1"><span class="font-semibold">Dubai:</span> dubai@nabhas.co.in</p>
                    <p class="text-sm text-gray-600 mb-1"><span class="font-semibold">Europe:</span> europe@nabhas.co.in</p>
                    <p class="text-sm text-gray-600 mb-1"><span class="font-semibold">USA:</span> usa@nabhas.co.in</p>
                    <p class="text-sm text-gray-600"><span class="font-semibold">Australia:</span> australia@nabhas.co.in</p>
                  </div>
                </div>
              </div>

              <!-- Phone -->
              <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-[#1a2a5e]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.92 7.02C17.45 6.18 16.3 5.74 15.24 6.12C13.78 6.66 12.59 7.76 12.59 9.23C12.59 11.1 14.36 12.87 16.23 12.87C17.7 12.87 18.8 11.68 19.34 10.22C19.72 9.16 19.27 8.01 18.44 7.54M11 19.93C6.5 18.5 3 14.47 3 9.72C3 5.34 6.34 2 10.72 2C15.1 2 18.44 5.34 18.44 9.72C18.44 10.68 18.37 11.61 18.23 12.52"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-3">Phone</h3>
                    <p class="text-sm text-gray-600 mb-1">+91-8469690812</p>
                    <p class="text-sm text-gray-600">+91-8469198872</p>
                    <p class="text-sm text-gray-500 mt-2">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-[#1a2a5e]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-2">Headquarters</h3>
                    <p class="text-sm text-gray-600">A304, Neelkanth Exotica</p>
                    <p class="text-sm text-gray-600">Plot 88, Sector 21</p>
                    <p class="text-sm text-gray-600">Ulwe, Navi Mumbai 410206</p>
                    <p class="text-sm text-gray-600">Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="lg:col-span-2">
              <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                <form (ngSubmit)="submitForm()" #contactForm="ngForm" class="space-y-4">
                  <!-- Name Field -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                      <input 
                        type="text"
                        name="firstName"
                        [(ngModel)]="formData.firstName"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2a5e] transition"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                      <input 
                        type="text"
                        name="lastName"
                        [(ngModel)]="formData.lastName"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2a5e] transition"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <!-- Email Field -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2a5e] transition"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <!-- Phone Field -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      name="phone"
                      [(ngModel)]="formData.phone"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2a5e] transition"
                      placeholder="+91 XXXX XXXX XX"
                    />
                  </div>

                  <!-- Subject Field -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                    <select 
                      name="subject"
                      [(ngModel)]="formData.subject"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2a5e] transition"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Bulk Order">Bulk Order</option>
                      <option value="Custom Quote">Custom Quote</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <!-- Message Field -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                    <textarea 
                      name="message"
                      [(ngModel)]="formData.message"
                      rows="6"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2a5e] transition resize-none"
                      placeholder="Tell us how we can help..."
                      required
                    ></textarea>
                  </div>

                  <!-- Checkbox -->
                  <div class="flex items-start gap-3">
                    <input 
                      type="checkbox"
                      name="agree"
                      [(ngModel)]="formData.agree"
                      class="mt-1 w-4 h-4 accent-[#1a2a5e]"
                      required
                    />
                    <label class="text-sm text-gray-600">
                      I agree to the privacy policy and terms of service
                    </label>
                  </div>

                  <!-- Submit Button -->
                  <button 
                    type="submit"
                    class="w-full bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>

                <!-- Success Message -->
                <div 
                  *ngIf="formSubmitted"
                  class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p class="text-green-800 font-semibold">
                    ✓ Thank you! We've received your message. We'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Global Presence Section -->
      <section class="py-16 px-4 bg-white">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">Global Presence & Operations</h2>
          <p class="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Nabhas is an Indian company with a strong global presence and an expanding network of customers and offices across multiple continents.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <!-- Our Offices -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Offices</h3>
              <div class="space-y-4">
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h4 class="font-bold text-gray-900 mb-2">India</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Mumbai (Headquarters)</li>
                    <li>• Delhi (Collaboration Office)</li>
                    <li>• Kolkata (Collaboration Office)</li>
                    <li>• Bangalore (Collaboration Office)</li>
                    <li>• Jabalpur (Collaboration Office)</li>
                  </ul>
                </div>
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h4 class="font-bold text-gray-900 mb-2">International</h4>
                  <p class="text-sm text-gray-600 mb-2">Currently Expanding With:</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Melbourne, Australia</li>
                    <li>• Bahrain, Middle East</li>
                    <li>• San Francisco, USA</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Customer Presence -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Customer Presence</h3>
              <div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
                  <h4 class="font-bold text-gray-900 mb-2">India</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Mumbai, Kolkata, Bangalore</li>
                    <li>• Chennai, Hyderabad</li>
                  </ul>
                </div>
                <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
                  <h4 class="font-bold text-gray-900 mb-2">Global</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Dubai (Middle East)</li>
                    <li>• London, Basel, Germany (Europe)</li>
                    <li>• New Jersey (USA)</li>
                    <li>• Sydney (Australia)</li>
                    <li>• And many more...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-[#1a2a5e] to-[#2d3f7f] text-white p-8 rounded-lg">
            <h3 class="text-2xl font-bold mb-4">Our Vision</h3>
            <p class="text-lg leading-relaxed">
              Nabhas is committed to expanding its global operations across diverse markets. With a strong foundation in India and established customer relationships worldwide, we continue to establish international offices and partnerships in key markets to better serve our global clientele.
            </p>
          </div>
        </div>
      </section>

      <!-- Why Contact Us Section -->
      <section class="bg-blue-50 py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">Why Get in Touch?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg class="w-8 h-8 text-[#1a2a5e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-900">Expert Advice</h3>
              <p class="text-gray-600">Get personalized recommendations for your specific packaging needs</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg class="w-8 h-8 text-[#1a2a5e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-900">Quick Response</h3>
              <p class="text-gray-600">Our team responds to inquiries within 24 hours on business days</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg class="w-8 h-8 text-[#1a2a5e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-900">Custom Solutions</h3>
              <p class="text-gray-600">We'll work with you to create tailored packaging solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [],
})
export class ContactComponent {
  formSubmitted = false;

  formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  };

  submitForm(): void {
    if (
      this.formData.firstName &&
      this.formData.lastName &&
      this.formData.email &&
      this.formData.subject &&
      this.formData.message &&
      this.formData.agree
    ) {
      this.formSubmitted = true;

      // Reset form
      this.formData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agree: false,
      };

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    }
  }
}
