'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ConstructionGuidesPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Construction Guides
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Your comprehensive resource for understanding the construction process, from planning to completion.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Your Construction Journey</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Building your dream home is an exciting but complex process. Our comprehensive construction guides are designed to demystify the building process, helping you understand what to expect at each stage and how to make informed decisions along the way.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    Whether you&apos;re planning a new construction project or renovating an existing home, these guides provide the knowledge and insights you need to navigate the construction process with confidence.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Pre-Construction Phase</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Planning & Design</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Understanding your budget and financing options</li>
                        <li>Working with architects and designers</li>
                        <li>Site selection and evaluation considerations</li>
                        <li>Permitting requirements and timelines</li>
                        <li>Creating realistic project schedules</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Contractor Selection</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>How to evaluate contractor qualifications</li>
                        <li>Understanding licensing and insurance requirements</li>
                        <li>Reviewing past projects and references</li>
                        <li>Comparing bids and contract terms</li>
                        <li>Building a strong working relationship</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Construction Phases</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Foundation & Framing</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        Learn about foundation types, soil testing, framing techniques, and structural integrity considerations that form the backbone of your home.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Mechanical Systems</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        Understanding HVAC, plumbing, and electrical systems, including energy-efficient options and smart home integration.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Insulation & Weatherization</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        The importance of proper insulation, air sealing, and moisture control for comfort, energy efficiency, and durability.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Interior Finishes</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        Flooring, cabinetry, painting, and other finish work that transforms your home from structure to sanctuary.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Budget & Cost Management</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Construction costs can be unpredictable. Our guides help you understand:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>How construction costs are calculated</li>
                    <li>Common cost overruns and how to avoid them</li>
                    <li>The impact of material and labor price fluctuations</li>
                    <li>Contingency planning and budget reserves</li>
                    <li>Value engineering without sacrificing quality</li>
                    <li>Tax implications and potential savings</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Quality Assurance</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Inspection Checkpoints</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Foundation and framing inspections</li>
                        <li>Mechanical system rough-in inspections</li>
                        <li>Insulation and vapor barrier checks</li>
                        <li>Final walkthrough and punch list process</li>
                        <li>Understanding inspection reports</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Quality Standards</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        What to look for in terms of craftsmanship, material quality, and adherence to building codes and industry standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Timeline & Scheduling</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Understanding construction timelines and what can affect them:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Typical construction phase durations</li>
                    <li>Weather-related delays and seasonal considerations</li>
                    <li>Material delivery and supply chain issues</li>
                    <li>Permit and inspection scheduling</li>
                    <li>Subcontractor coordination challenges</li>
                    <li>Change order impacts on timeline</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Sustainability & Green Building</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Building responsibly for the environment and future generations:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Energy-efficient design principles</li>
                    <li>Sustainable material selection</li>
                    <li>Water conservation strategies</li>
                    <li>Waste reduction and recycling</li>
                    <li>Green building certifications</li>
                    <li>Long-term environmental impact</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Post-Construction</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Warranty & Maintenance</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Understanding your warranty coverage</li>
                        <li>Regular maintenance requirements</li>
                        <li>Common issues and when to call for service</li>
                        <li>Working with warranty providers</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Homeownership Transition</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        Adjusting to homeownership, understanding utility costs, and maintaining your investment for the long term.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Common Challenges & Solutions</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Every construction project faces challenges. Learn how to handle:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Budget overruns and cost management</li>
                    <li>Timeline delays and schedule adjustments</li>
                    <li>Material and supply chain issues</li>
                    <li>Weather-related construction challenges</li>
                    <li>Change orders and scope modifications</li>
                    <li>Communication breakdowns with contractors</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Resources & Support</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Additional resources to support your construction journey:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Building code references and requirements</li>
                    <li>Contractor licensing verification</li>
                    <li>Material specification guides</li>
                    <li>Energy efficiency calculators</li>
                    <li>Local building department contacts</li>
                    <li>Professional association resources</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Expert Consultation</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    While these guides provide comprehensive information, every construction project is unique. Our team of experts is here to provide personalized guidance throughout your construction journey. From initial planning to final walkthrough, we&apos;re committed to making your construction experience as smooth and successful as possible.
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