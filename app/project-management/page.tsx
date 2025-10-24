'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProjectManagementPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Project Management
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Expert oversight and coordination to ensure your construction project stays on time, on budget, and on target.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Comprehensive Project Management Services</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Construction projects are complex endeavors requiring careful coordination of multiple trades, materials, and stakeholders. Our professional project management services provide the expertise and oversight needed to ensure successful outcomes, whether you&apos;re building a custom home, renovating an existing space, or developing a commercial property.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    We serve as your single point of contact, managing all aspects of the construction process while keeping you informed and involved at every stage. Our goal is to deliver your project on time, within budget, and to the highest quality standards.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Pre-Construction Services</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Planning & Feasibility</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Site analysis and due diligence</li>
                        <li>Budget development and cost estimation</li>
                        <li>Schedule planning and critical path analysis</li>
                        <li>Risk assessment and mitigation planning</li>
                        <li>Value engineering and optimization</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Permitting & Approvals</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Building permit coordination</li>
                        <li>Zoning and code compliance review</li>
                        <li>Utility and infrastructure approvals</li>
                        <li>Environmental impact assessments</li>
                        <li>HOA and neighborhood association coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Construction Phase Management</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    During construction, we provide hands-on management and oversight:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Contractor Coordination:</strong> Managing subcontractors and trade partners</li>
                    <li><strong>Schedule Management:</strong> Monitoring progress and adjusting timelines</li>
                    <li><strong>Quality Control:</strong> Regular inspections and quality assurance</li>
                    <li><strong>Budget Monitoring:</strong> Tracking costs and managing change orders</li>
                    <li><strong>Safety Oversight:</strong> Ensuring OSHA compliance and site safety</li>
                    <li><strong>Communication:</strong> Regular updates and progress reporting</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Cost Management</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Budget Development</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Detailed cost estimates and budgets</li>
                        <li>Contingency planning and reserves</li>
                        <li>Cash flow projections and timing</li>
                        <li>Value engineering opportunities</li>
                        <li>Cost-benefit analysis for decisions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Cost Control</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Real-time budget tracking</li>
                        <li>Change order management and approval</li>
                        <li>Contractor payment processing</li>
                        <li>Cost variance analysis and reporting</li>
                        <li>Final cost reconciliation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Schedule Management</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Effective schedule management is crucial for project success:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Project Scheduling:</strong> Detailed timelines and milestones</li>
                    <li><strong>Critical Path Analysis:</strong> Identifying key dependencies and constraints</li>
                    <li><strong>Progress Monitoring:</strong> Weekly schedule updates and tracking</li>
                    <li><strong>Delay Mitigation:</strong> Proactive management of potential delays</li>
                    <li><strong>Milestone Achievement:</strong> Celebrating and documenting progress</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Quality Assurance</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Quality Control Systems</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Regular site inspections and walkthroughs</li>
                        <li>Material quality verification</li>
                        <li>Workmanship standards enforcement</li>
                        <li>Testing and commissioning of systems</li>
                        <li>Third-party quality audits</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Compliance Management</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Building code and regulation compliance</li>
                        <li>Accessibility and ADA requirements</li>
                        <li>Environmental and sustainability standards</li>
                        <li>Manufacturer warranties and requirements</li>
                        <li>Final inspection preparation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Communication & Reporting</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Clear communication keeps everyone aligned and informed:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Regular Updates:</strong> Weekly progress reports and meetings</li>
                    <li><strong>Photo Documentation:</strong> Visual progress tracking</li>
                    <li><strong>Budget Reports:</strong> Financial status and cost tracking</li>
                    <li><strong>Issue Resolution:</strong> Proactive problem identification and solutions</li>
                    <li><strong>Stakeholder Coordination:</strong> Managing relationships with all parties</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Risk Management</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Proactive risk management protects your project:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Risk Assessment:</strong> Identifying potential issues early</li>
                    <li><strong>Contingency Planning:</strong> Developing backup strategies</li>
                    <li><strong>Insurance Coordination:</strong> Managing builder&apos;s risk and liability coverage</li>
                    <li><strong>Safety Management:</strong> OSHA compliance and accident prevention</li>
                    <li><strong>Change Management:</strong> Controlled handling of project changes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Technology Integration</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Modern project management leverages technology for efficiency:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Project Management Software:</strong> Real-time collaboration and tracking</li>
                    <li><strong>Building Information Modeling (BIM):</strong> 3D coordination and clash detection</li>
                    <li><strong>Mobile Apps:</strong> On-site access to project information</li>
                    <li><strong>Document Management:</strong> Centralized file storage and version control</li>
                    <li><strong>Progress Photography:</strong> Automated site documentation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Post-Construction Services</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Our commitment continues after project completion with comprehensive close-out services, warranty coordination, and ongoing support. We ensure smooth transitions, proper documentation, and peace of mind for years to come.
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