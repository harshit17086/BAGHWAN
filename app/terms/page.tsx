'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Terms of Use
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Please read these terms carefully before using our services. By using HRC Construction, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#2F3D24]">
              <p className="text-sm text-[#6B7555] mb-12 text-center">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">1. Acceptance of Terms</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    By accessing and using HRC Construction services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    These Terms of Use constitute a legally binding agreement between you and HRC Construction Company (&quot;HRC&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By using our website, services, or engaging with our construction projects, you acknowledge that you have read, understood, and agree to be bound by these terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">2. Services Overview</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    HRC Construction provides comprehensive construction and building services including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Residential construction and custom home building</li>
                    <li>Commercial and industrial construction projects</li>
                    <li>Renovation, remodeling, and restoration services</li>
                    <li>Design-build project management</li>
                    <li>Architectural consultation and planning</li>
                    <li>Structural engineering and permitting assistance</li>
                    <li>Green building and sustainable construction</li>
                    <li>Property development and land preparation</li>
                    <li>Construction management and oversight</li>
                    <li>Post-construction maintenance and warranty services</li>
                  </ul>
                  <p className="text-[#6B7555] leading-relaxed">
                    All services are provided in accordance with local building codes, industry standards, and HRC&apos;s quality assurance protocols.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">3. User Responsibilities and Obligations</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    As a client or user of our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Provide accurate, complete, and truthful information about your project requirements</li>
                    <li>Comply with all applicable federal, state, and local laws and regulations</li>
                    <li>Respect and protect intellectual property rights of HRC and third parties</li>
                    <li>Use our services solely for lawful purposes and in good faith</li>
                    <li>Maintain the confidentiality of sensitive project information and access credentials</li>
                    <li>Cooperate fully with HRC personnel and subcontractors during project execution</li>
                    <li>Provide timely access to the project site and necessary utilities</li>
                    <li>Obtain and maintain all required permits, licenses, and approvals</li>
                    <li>Make payments according to the agreed schedule and terms</li>
                    <li>Notify HRC immediately of any changes, concerns, or issues during the project</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">4. Project Terms and Conditions</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">4.1 Project Planning and Estimates</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Project timelines are estimates based on standard conditions and may vary due to unforeseen circumstances</li>
                        <li>Cost estimates are valid for 30 days unless otherwise specified</li>
                        <li>All estimates exclude permits, fees, and third-party costs unless explicitly stated</li>
                        <li>Site conditions and accessibility may affect final pricing and timelines</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">4.2 Change Orders and Modifications</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>All changes to scope, materials, or specifications must be approved in writing</li>
                        <li>Change orders may affect project timeline and total cost</li>
                        <li>Verbal agreements are not binding until confirmed in writing</li>
                        <li>Client-requested changes are subject to additional fees</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">4.3 Permits and Inspections</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Building permits are typically the client&apos;s responsibility unless otherwise agreed</li>
                        <li>HRC will assist with permit applications when requested (additional fees may apply)</li>
                        <li>All required inspections must be scheduled and passed before proceeding to next phases</li>
                        <li>Delays due to permit issues may extend project timelines</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">4.4 Payment Terms</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Payment schedules are outlined in individual project contracts</li>
                        <li>Deposits are required to secure materials and schedule work</li>
                        <li>Progress payments are due upon completion of specified milestones</li>
                        <li>Late payments may result in work stoppages and additional fees</li>
                        <li>Final payment is due upon project completion and client satisfaction</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">5. Insurance and Liability</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">5.1 HRC Insurance Coverage</h3>
                      <p className="mb-4 text-[#6B7555] leading-relaxed">
                        HRC maintains comprehensive insurance coverage including:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>General liability insurance for property damage and personal injury</li>
                        <li>Workers&apos; compensation insurance for all employees and subcontractors</li>
                        <li>Builder&apos;s risk insurance during active construction</li>
                        <li>Professional liability insurance for design and consultation services</li>
                        <li>Bond coverage for certain commercial projects</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">5.2 Client Insurance Recommendations</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        Clients are strongly recommended to maintain builder&apos;s risk insurance and personal property insurance during construction. HRC is not responsible for pre-existing conditions or damage not caused by our work.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">6. Warranties and Guarantees</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">6.1 Workmanship Warranty</h3>
                      <p className="mb-4 text-[#6B7555] leading-relaxed">
                        HRC provides a one-year workmanship warranty covering defects in materials and labor, subject to the following conditions:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Warranty begins on the date of substantial completion</li>
                        <li>Normal wear and tear, abuse, or improper maintenance are not covered</li>
                        <li>Damage caused by natural disasters, acts of God, or third parties is excluded</li>
                        <li>Client must provide written notice of defects within the warranty period</li>
                        <li>HRC reserves the right to inspect and verify all warranty claims</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">6.2 Material Warranties</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        Material warranties are provided by manufacturers and are subject to their specific terms and conditions. HRC will assist in processing manufacturer warranty claims but is not responsible for manufacturer warranty fulfillment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">6.3 Service Disclaimer</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        Except as expressly provided in writing, all services are provided &quot;as is&quot; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">7. Limitation of Liability</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    In no event shall HRC Construction be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>The use or inability to use our services</li>
                    <li>Delays in project completion due to unforeseen circumstances</li>
                    <li>Loss of profits, business opportunities, or data</li>
                    <li>Third-party claims or disputes</li>
                    <li>Acts of nature, war, terrorism, or other force majeure events</li>
                  </ul>
                  <p className="text-[#6B7555] leading-relaxed">
                    HRC&apos;s total liability under any circumstances shall not exceed the total amount paid by the client for the specific service or project in question.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">8. Intellectual Property</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    All content, features, and functionality of our website and services, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-1 text-[#6B7555]">
                    <li>Text, graphics, logos, and images</li>
                    <li>Software, algorithms, and proprietary processes</li>
                    <li>Design plans, specifications, and documentation</li>
                    <li>Trademarks, service marks, and trade names</li>
                    <li>Copyrighted materials and creative works</li>
                  </ul>
                  <p className="text-[#6B7555] leading-relaxed">
                    Are owned by HRC Construction and are protected by copyright, trademark, patent, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">9. Termination and Cancellation</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">9.1 Termination by Client</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Clients may terminate services with written notice</li>
                        <li>Termination fees may apply based on work completed</li>
                        <li>All outstanding payments become immediately due</li>
                        <li>Materials ordered specifically for the project may be charged</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">9.2 Termination by HRC</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>HRC may terminate services for non-payment or breach of terms</li>
                        <li>Work stoppages due to unsafe conditions or code violations</li>
                        <li>Failure to provide access to the project site</li>
                        <li>Upon mutual written agreement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">10. Dispute Resolution</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Any disputes arising from these terms or our services shall be resolved through:
                  </p>
                  <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Direct negotiation between the parties</li>
                    <li>Mediation through a neutral third party</li>
                    <li>Binding arbitration in accordance with local laws</li>
                    <li>Litigation in the appropriate jurisdiction as a last resort</li>
                  </ol>
                  <p className="text-[#6B7555] leading-relaxed">
                    Both parties agree to attempt resolution through the above methods before pursuing legal action.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">11. Governing Law</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of the State of [Your State], without regard to conflict of law principles. Any legal action or proceeding arising under these terms will be brought exclusively in the federal or state courts located in [Your County], [Your State], and you hereby consent to personal jurisdiction and venue therein.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">12. Contact Information</h2>
                  <p className="mb-6 text-[#6B7555] leading-relaxed">
                    If you have any questions about these Terms of Use, please contact us:
                  </p>
                  <div className="bg-[#f8f5e8] p-6 rounded-lg border border-[#6B7555]/20">
                    <p className="font-semibold text-[#2F3D24] mb-2">Legal Department</p>
                    <p className="font-semibold text-[#2F3D24]">Email: legal@hrc.com</p>
                    <p className="font-semibold text-[#2F3D24]">Phone: (555) 123-4567</p>
                    <p className="text-[#6B7555] mt-2">HRC Construction Company<br />
                    [Your Address]<br />
                    [City, State, ZIP Code]</p>
                  </div>
                </div>

                <div className="border-t border-[#6B7555]/30 pt-8">
                  <p className="text-sm text-[#6B7555] text-center">
                    These terms may be updated periodically. Continued use of our services after changes constitutes acceptance of the new terms. Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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