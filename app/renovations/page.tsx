'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RenovationsPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Renovations
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Transforming existing spaces into modern, functional homes that reflect your evolving lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#2F3D24]">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Comprehensive Renovation Services</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Renovation projects offer the opportunity to modernize, expand, and personalize your existing home. Whether you&apos;re updating outdated features, expanding living space, or adapting your home to changing needs, our renovation expertise ensures beautiful results that add value and functionality.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    We approach each renovation with respect for the home&apos;s original character while incorporating contemporary design, improved functionality, and modern amenities that enhance your quality of life.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Kitchen Renovations</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Complete Kitchen Makeovers</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Custom cabinetry and storage solutions</li>
                        <li>Premium countertop materials (granite, quartz, marble)</li>
                        <li>High-end appliances and smart technology</li>
                        <li>Efficient lighting and electrical upgrades</li>
                        <li>Open concept layouts and island designs</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Kitchen Expansions</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Adding space through adjacent rooms</li>
                        <li>Bump-out additions for more room</li>
                        <li>Second-story additions over existing space</li>
                        <li>Walk-in pantry and storage expansions</li>
                        <li>Mudroom and entry area additions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Bathroom Renovations</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Transform bathrooms into luxurious personal retreats:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Master Bathrooms:</strong> Spa-like experiences with walk-in showers, soaking tubs, and dual vanities</li>
                    <li><strong>Guest Bathrooms:</strong> Elegant updates with modern fixtures and finishes</li>
                    <li><strong>Powder Rooms:</strong> Sophisticated small-space designs</li>
                    <li><strong>Accessibility Upgrades:</strong> Walk-in showers, grab bars, and zero-step entries</li>
                    <li><strong>Smart Features:</strong> Heated floors, towel warmers, and automated lighting</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Living Space Updates</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Open Concept Living</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Removing walls to create flow</li>
                        <li>Structural modifications for modern layouts</li>
                        <li>Updated flooring throughout connected spaces</li>
                        <li>Integrated lighting and electrical systems</li>
                        <li>Built-in entertainment and storage solutions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Home Office Conversions</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Dedicated workspaces in existing rooms</li>
                        <li>Built-in desks and storage systems</li>
                        <li>Technology infrastructure and cabling</li>
                        <li>Soundproofing and acoustic treatments</li>
                        <li>Ergonomic design and lighting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Exterior Renovations</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Enhance curb appeal and functionality with exterior updates:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Siding & Roofing:</strong> Modern materials and improved energy efficiency</li>
                    <li><strong>Windows & Doors:</strong> Energy-efficient replacements and style updates</li>
                    <li><strong>Decks & Patios:</strong> Outdoor living spaces and entertainment areas</li>
                    <li><strong>Landscaping Integration:</strong> Seamless indoor-outdoor connections</li>
                    <li><strong>Garage & Driveway:</strong> Functional improvements and aesthetic enhancements</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Home Additions</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Room Additions</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Master suite additions</li>
                        <li>Family room expansions</li>
                        <li>Home office or study additions</li>
                        <li>Guest room conversions</li>
                        <li>Second-story additions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Structural Considerations</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Foundation and structural engineering</li>
                        <li>Permitting and code compliance</li>
                        <li>Seamless integration with existing architecture</li>
                        <li>Updated electrical and plumbing systems</li>
                        <li>HVAC system modifications</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Energy Efficiency Upgrades</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Modernize your home while reducing energy costs:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Insulation:</strong> Improved thermal performance and comfort</li>
                    <li><strong>HVAC Systems:</strong> High-efficiency heating and cooling</li>
                    <li><strong>Water Heating:</strong> Tankless and heat pump water heaters</li>
                    <li><strong>Smart Controls:</strong> Automated climate and lighting systems</li>
                    <li><strong>Renewable Energy:</strong> Solar panel installations and battery storage</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Renovation Process</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our systematic approach ensures successful renovation outcomes:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Assessment:</strong> Evaluating current condition and structural integrity</li>
                    <li><strong>Design Planning:</strong> Creating detailed renovation plans and budgets</li>
                    <li><strong>Permitting:</strong> Securing necessary approvals and inspections</li>
                    <li><strong>Preparation:</strong> Protecting existing areas and preparing for construction</li>
                    <li><strong>Construction:</strong> Skilled execution with minimal disruption</li>
                    <li><strong>Quality Control:</strong> Regular inspections and progress monitoring</li>
                    <li><strong>Final Details:</strong> Finishing touches and final inspections</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Value-Adding Renovations</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Strategic renovations can significantly increase your home&apos;s value while improving your quality of life. We focus on projects that provide the best return on investment, combining aesthetic improvements with functional enhancements that appeal to future buyers while serving your current needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}