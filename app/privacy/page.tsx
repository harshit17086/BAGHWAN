'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">1. Information We Collect</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, submit a contact form, request a quote, or communicate with us about our construction services. This may include:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and billing information</li>
                    <li><strong>Project Details:</strong> Property address, project specifications, budget requirements, and timeline preferences</li>
                    <li><strong>Communication Records:</strong> Emails, phone calls, messages, and meeting notes from our interactions</li>
                    <li><strong>Financial Information:</strong> Payment details processed securely through third-party payment processors</li>
                    <li><strong>Site Information:</strong> Property details, existing conditions, and accessibility requirements</li>
                    <li><strong>Preferences:</strong> Communication preferences, service interests, and marketing opt-in choices</li>
                  </ul>
                  <p className="text-[#6B7555] leading-relaxed">
                    We may also automatically collect certain information about your device and usage of our website through cookies and similar technologies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">2. How We Use Your Information</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Service Delivery:</strong> To provide construction services, prepare estimates, and manage projects</li>
                    <li><strong>Communication:</strong> To respond to inquiries, send project updates, and provide customer support</li>
                    <li><strong>Project Management:</strong> To coordinate with subcontractors, schedule work, and ensure quality control</li>
                    <li><strong>Legal Compliance:</strong> To comply with building codes, safety regulations, and legal requirements</li>
                    <li><strong>Marketing:</strong> To send promotional materials and updates about our services (with your consent)</li>
                    <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website functionality</li>
                    <li><strong>Quality Assurance:</strong> To maintain service quality and resolve any issues that may arise</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">3. Information Sharing and Disclosure</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">3.1 Service Providers</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        We may share information with trusted third-party service providers who assist us in operating our business, such as:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-[#6B7555]">
                        <li>Subcontractors and construction professionals</li>
                        <li>Payment processing companies</li>
                        <li>IT and website hosting services</li>
                        <li>Accounting and legal services</li>
                        <li>Marketing and communication platforms</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">3.2 Legal Requirements</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        We may disclose information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, safety, or the rights and safety of others.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">3.3 Business Transfers</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        In the event of a merger, acquisition, or sale of assets, customer information may be transferred as part of the transaction, subject to the same privacy protections.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">4. Data Security</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We implement appropriate technical, administrative, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure data storage and access controls</li>
                    <li>Regular security assessments and updates</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                  <p className="text-[#6B7555] leading-relaxed">
                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">5. Cookies and Tracking Technologies</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our website uses cookies and similar technologies to enhance your browsing experience and analyze website usage:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p className="text-[#6B7555] leading-relaxed">
                    You can control cookie settings through your browser preferences, though disabling certain cookies may affect website functionality.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">6. Your Rights and Choices</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
                  </ul>
                  <p className="text-[#6B7555] leading-relaxed">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">7. Data Retention</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods vary depending on the type of information and the purpose for which it was collected. When information is no longer needed, we securely delete or anonymize it.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">8. Third-Party Links</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">9. Children&apos;s Privacy</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">10. International Data Transfers</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">11. Changes to This Privacy Policy</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">12. Contact Us</h2>
                  <p className="mb-6 text-[#6B7555] leading-relaxed">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-[#f8f5e8] p-6 rounded-lg border border-[#6B7555]/20">
                    <p className="font-semibold text-[#2F3D24] mb-2">Privacy Officer</p>
                    <p className="font-semibold text-[#2F3D24]">Email: privacy@hrc.com</p>
                    <p className="font-semibold text-[#2F3D24]">Phone: (555) 123-4567</p>
                    <p className="text-[#6B7555] mt-2">HRC Construction Company<br />
                    [Your Address]<br />
                    [City, State, ZIP Code]</p>
                  </div>
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