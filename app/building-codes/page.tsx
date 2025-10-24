'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BuildingCodesPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Building Codes
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              We ensure every project meets and exceeds all applicable building codes and regulations.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Code Compliance Commitment</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Building codes are the foundation of safe, durable construction. At HRC Construction, we don&apos;t just meet minimum requirements—we exceed them. Our team stays current with all local, state, and federal building codes to ensure your project is built to last.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    We work closely with local building departments, structural engineers, and code officials throughout the entire construction process.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">International Building Code (IBC)</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We adhere to the latest International Building Code standards, including:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Structural integrity and load-bearing requirements</li>
                    <li>Fire safety and egress standards</li>
                    <li>Accessibility requirements (ADA compliance)</li>
                    <li>Energy efficiency standards</li>
                    <li>Plumbing and mechanical system codes</li>
                    <li>Electrical safety regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Local & State Regulations</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Permit Management</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Complete permit application and processing</li>
                        <li>Building department coordination</li>
                        <li>Inspection scheduling and management</li>
                        <li>Code compliance documentation</li>
                        <li>Final occupancy approvals</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Zoning Compliance</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Setback and height restrictions</li>
                        <li>Use and density requirements</li>
                        <li>Parking and landscaping standards</li>
                        <li>Historic preservation guidelines</li>
                        <li>Environmental protection regulations</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Specialized Codes</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Residential building codes</li>
                        <li>Commercial construction standards</li>
                        <li>Multi-family housing regulations</li>
                        <li>Historic building requirements</li>
                        <li>Green building certifications</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Quality Assurance Process</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our systematic approach ensures code compliance at every stage:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Pre-construction code review and planning</li>
                    <li>Foundation and framing inspections</li>
                    <li>Mechanical, electrical, and plumbing sign-offs</li>
                    <li>Final building inspection coordination</li>
                    <li>Certificate of occupancy processing</li>
                    <li>Post-construction compliance verification</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Expertise & Experience</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    With decades of experience working with building departments across multiple jurisdictions, we understand the nuances of code compliance. Our team includes certified building inspectors and code specialists who ensure your project meets all requirements while avoiding costly delays and rework.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    We maintain relationships with local building officials and stay updated on code changes, ensuring smooth approval processes for your project.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Beyond Code Minimums</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    While we ensure full code compliance, we often exceed minimum requirements to provide superior quality and longevity. Our HRC Standards incorporate best practices that go beyond basic code requirements, giving you peace of mind that your investment is built to last.
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