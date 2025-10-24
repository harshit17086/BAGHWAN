'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DesignBuildPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Design-Build
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Seamless integration of design and construction for efficient, high-quality project delivery.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Integrated Design-Build Approach</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our design-build methodology streamlines the construction process by combining architectural design, engineering, and construction under one coordinated team. This integrated approach eliminates the traditional separation between design and construction phases, resulting in faster project delivery, better communication, and superior quality control.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    With a single point of responsibility, you work directly with our design-build team throughout the entire project, from initial concept to final completion. This ensures your vision is realized efficiently and cost-effectively.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Design-Build Advantages</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Single Point of Contact</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Direct communication with one experienced team</li>
                        <li>Coordinated decision-making and problem-solving</li>
                        <li>Consistent project vision from start to finish</li>
                        <li>Streamlined change orders and approvals</li>
                        <li>Accountability for quality, schedule, and budget</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Faster Project Delivery</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Overlapping design and construction phases</li>
                        <li>Reduced approval cycles and delays</li>
                        <li>Early identification and resolution of issues</li>
                        <li>Efficient material and labor coordination</li>
                        <li>Accelerated project timelines</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Cost Efficiency</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Transparent pricing with guaranteed maximum costs</li>
                        <li>Value engineering for optimal solutions</li>
                        <li>Reduced change order expenses</li>
                        <li>Efficient procurement and material management</li>
                        <li>Minimized waste and rework</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Design-Build Process</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our proven design-build process ensures successful project outcomes:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Discovery & Programming:</strong> Understanding your needs, goals, and vision</li>
                    <li><strong>Conceptual Design:</strong> Developing initial design concepts and feasibility studies</li>
                    <li><strong>Design Development:</strong> Refining designs with construction input and cost analysis</li>
                    <li><strong>Guaranteed Maximum Price:</strong> Establishing fixed-price contract with contingencies</li>
                    <li><strong>Permitting & Pre-Construction:</strong> Securing approvals and mobilizing resources</li>
                    <li><strong>Construction:</strong> Integrated design and construction with regular progress updates</li>
                    <li><strong>Quality Assurance:</strong> Rigorous inspections and final commissioning</li>
                    <li><strong>Project Close-Out:</strong> Documentation, training, and warranty information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Project Types</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Residential Projects</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Custom homes and dream home construction</li>
                        <li>Home additions and expansions</li>
                        <li>Kitchen and bathroom renovations</li>
                        <li>Whole-house remodels</li>
                        <li>Accessory dwelling units (ADUs)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Commercial Projects</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Office buildings and professional spaces</li>
                        <li>Retail stores and restaurants</li>
                        <li>Medical and dental facilities</li>
                        <li>Warehouses and industrial buildings</li>
                        <li>Mixed-use developments</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Value Engineering</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our design-build approach incorporates value engineering throughout the process:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Cost-Benefit Analysis:</strong> Evaluating design options for optimal value</li>
                    <li><strong>Material Selection:</strong> Choosing cost-effective, high-quality materials</li>
                    <li><strong>Construction Methods:</strong> Selecting efficient building techniques</li>
                    <li><strong>System Integration:</strong> Coordinating mechanical, electrical, and plumbing systems</li>
                    <li><strong>Life Cycle Costs:</strong> Considering long-term maintenance and energy costs</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Quality Control & Assurance</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Integrated Quality Management</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Design quality reviews at each phase</li>
                        <li>Construction quality control inspections</li>
                        <li>Third-party testing and verification</li>
                        <li>Compliance with building codes and standards</li>
                        <li>Performance testing of completed systems</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Risk Management</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Proactive identification of potential issues</li>
                        <li>Contingency planning and mitigation strategies</li>
                        <li>Insurance and bonding for project protection</li>
                        <li>Regular risk assessments and updates</li>
                        <li>Change management procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Technology Integration</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Modern design-build projects incorporate advanced technology:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Building Information Modeling (BIM):</strong> 3D modeling for design coordination</li>
                    <li><strong>Project Management Software:</strong> Real-time progress tracking and communication</li>
                    <li><strong>Virtual Reality:</strong> Immersive design visualization and walkthroughs</li>
                    <li><strong>Prefabrication:</strong> Off-site construction for quality and efficiency</li>
                    <li><strong>Smart Building Systems:</strong> Integrated technology for modern functionality</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Sustainability Focus</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Our design-build approach emphasizes sustainable construction practices that benefit both the environment and building owners. We incorporate green building principles, energy-efficient systems, and sustainable materials to create buildings that are environmentally responsible and cost-effective to operate.
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