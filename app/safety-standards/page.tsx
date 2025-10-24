'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SafetyStandardsPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Safety Standards
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Your safety is our top priority. We maintain the highest safety standards in all our construction projects.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Our Safety Commitment</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    At HRC Construction, safety is not just a requirement—it&apos;s our culture. We implement comprehensive safety protocols that protect our team, our clients, and the communities where we work.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    Our safety standards exceed industry requirements and are continuously updated to incorporate the latest best practices and technological advancements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">OSHA Compliance</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We maintain full compliance with Occupational Safety and Health Administration (OSHA) standards, including:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Regular safety training for all personnel</li>
                    <li>Comprehensive hazard communication programs</li>
                    <li>Fall protection systems and equipment</li>
                    <li>Electrical safety protocols</li>
                    <li>Personal protective equipment (PPE) requirements</li>
                    <li>Emergency response planning</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Site Safety Measures</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Pre-Construction Safety Planning</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Site-specific safety plans for each project</li>
                        <li>Hazard identification and risk assessment</li>
                        <li>Emergency evacuation procedures</li>
                        <li>Utility location and marking</li>
                        <li>Traffic control planning</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Daily Safety Inspections</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Morning safety briefings (toolbox talks)</li>
                        <li>Equipment and tool inspections</li>
                        <li>Personal protective equipment checks</li>
                        <li>Work area hazard assessments</li>
                        <li>Weather-related safety considerations</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Fall Protection Systems</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Guardrails and safety netting</li>
                        <li>Personal fall arrest systems</li>
                        <li>Safety harnesses and lanyards</li>
                        <li>Ladder safety protocols</li>
                        <li>Scaffold safety requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Training & Certification</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our team undergoes rigorous safety training and maintains current certifications:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>OSHA 10-hour and 30-hour construction safety courses</li>
                    <li>First Aid and CPR certification</li>
                    <li>Hazardous materials handling training</li>
                    <li>Equipment operation certifications</li>
                    <li>Annual safety refresher training</li>
                    <li>Specialized training for high-risk activities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Safety Record & Reporting</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We maintain transparent safety reporting and continuous improvement:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Zero-tolerance policy for safety violations</li>
                    <li>Incident reporting and investigation procedures</li>
                    <li>Near-miss reporting system</li>
                    <li>Monthly safety performance reviews</li>
                    <li>Annual safety audits and assessments</li>
                    <li>Industry benchmarking and best practice adoption</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Client Safety Assurance</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    When you choose HRC Construction, you can have confidence that your project is being built with the highest safety standards. We provide regular safety updates, maintain secure work sites, and ensure that all work meets or exceeds safety requirements. Your peace of mind is as important to us as the quality of our construction.
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