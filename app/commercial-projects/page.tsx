'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CommercialProjectsPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Commercial Projects
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Building commercial spaces that drive business success with quality, efficiency, and innovation.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Commercial Construction Excellence</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    HRC Construction brings the same commitment to quality and craftsmanship to commercial projects that we apply to residential work. We understand that commercial buildings must serve business needs while meeting strict regulatory requirements and budget constraints.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    Our commercial construction expertise spans office buildings, retail spaces, restaurants, and industrial facilities, delivered with the efficiency and professionalism that businesses demand.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Office Buildings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Corporate Headquarters</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Modern architectural design</li>
                        <li>Open floor plans and flexible spaces</li>
                        <li>Advanced technology infrastructure</li>
                        <li>Energy-efficient systems</li>
                        <li>Professional meeting and conference facilities</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Professional Offices</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Medical and dental offices</li>
                        <li>Legal and financial services</li>
                        <li>Consulting and professional services</li>
                        <li>Reception and waiting areas</li>
                        <li>Private offices and conference rooms</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Retail & Hospitality</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Creating inviting commercial spaces that attract and serve customers:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Retail Stores:</strong> Shopping centers, boutiques, and specialty stores</li>
                    <li><strong>Restaurants:</strong> Full-service dining, quick-service, and food courts</li>
                    <li><strong>Hotels & Lodging:</strong> Hotels, motels, and extended-stay facilities</li>
                    <li><strong>Entertainment Venues:</strong> Theaters, event spaces, and recreational facilities</li>
                    <li><strong>Service Businesses:</strong> Salons, spas, fitness centers, and service providers</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Industrial & Warehouse</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Manufacturing Facilities</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Heavy-duty construction for industrial use</li>
                        <li>High ceiling clearance and large door openings</li>
                        <li>Specialized electrical and mechanical systems</li>
                        <li>Loading docks and material handling areas</li>
                        <li>Safety and compliance features</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Distribution Centers</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Efficient layout design for operations</li>
                        <li>Loading and unloading facilities</li>
                        <li>Climate-controlled storage areas</li>
                        <li>Office and administrative spaces</li>
                        <li>Security and access control systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Commercial Construction Process</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our streamlined commercial construction process ensures efficiency and quality:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Pre-Construction:</strong> Planning, budgeting, and permitting</li>
                    <li><strong>Site Development:</strong> Preparation and foundation work</li>
                    <li><strong>Structural Construction:</strong> Framing and building envelope</li>
                    <li><strong>Mechanical Systems:</strong> HVAC, electrical, and plumbing</li>
                    <li><strong>Interior Build-Out:</strong> Finishes, fixtures, and furnishings</li>
                    <li><strong>Final Inspection:</strong> Code compliance and occupancy approval</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Regulatory Compliance</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Commercial projects require adherence to multiple regulatory standards:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Local building codes and zoning requirements</li>
                    <li>ADA accessibility standards</li>
                    <li>Fire safety and egress requirements</li>
                    <li>Energy efficiency regulations</li>
                    <li>Environmental impact assessments</li>
                    <li>Specialized industry certifications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Project Management</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Commercial projects demand specialized project management:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Dedicated commercial project managers</li>
                    <li>Schedule optimization for minimal business disruption</li>
                    <li>Budget control and cost management</li>
                    <li>Subcontractor coordination and oversight</li>
                    <li>Quality assurance and inspection management</li>
                    <li>Regular progress reporting to stakeholders</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Business Benefits</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Our commercial construction services deliver measurable business value through efficient project delivery, cost-effective solutions, and facilities that support operational success. We work closely with business owners to understand their unique requirements and deliver spaces that enhance productivity, customer experience, and long-term profitability.
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