'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function InfrastructurePage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Building the foundation of communities with roads, utilities, and essential infrastructure systems.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Infrastructure Construction Services</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Infrastructure forms the backbone of modern communities, providing essential services and connectivity that enable economic growth and quality of life. Our infrastructure construction expertise encompasses transportation systems, utility networks, and public facilities built to withstand the demands of growing populations and changing environmental conditions.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    We approach infrastructure projects with a commitment to quality, safety, and sustainability, delivering systems that serve communities for generations while minimizing environmental impact and maximizing long-term value.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Transportation Infrastructure</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Roads & Highways</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Highway construction and expansion</li>
                        <li>Road resurfacing and rehabilitation</li>
                        <li>Bridge construction and repair</li>
                        <li>Intersection improvements and roundabouts</li>
                        <li>Traffic management systems</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Public Transit</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Bus rapid transit corridors</li>
                        <li>Light rail and streetcar systems</li>
                        <li>Transit station construction</li>
                        <li>Pedestrian and bicycle infrastructure</li>
                        <li>Parking facilities and multimodal hubs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Utility Systems</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Essential utility infrastructure for modern communities:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Water Systems:</strong> Water treatment plants, distribution networks, and storage facilities</li>
                    <li><strong>Sewage & Wastewater:</strong> Collection systems, treatment plants, and disposal infrastructure</li>
                    <li><strong>Stormwater Management:</strong> Drainage systems, retention basins, and flood control</li>
                    <li><strong>Electrical Infrastructure:</strong> Substations, transmission lines, and distribution networks</li>
                    <li><strong>Gas Distribution:</strong> Pipeline networks and metering stations</li>
                    <li><strong>Telecommunications:</strong> Fiber optic networks and communication infrastructure</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Public Facilities</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Government Buildings</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Municipal offices and administrative buildings</li>
                        <li>Courthouses and public safety facilities</li>
                        <li>Libraries and community centers</li>
                        <li>Schools and educational facilities</li>
                        <li>Healthcare and medical buildings</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Recreational Facilities</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Parks and recreational areas</li>
                        <li>Sports complexes and stadiums</li>
                        <li>Swimming pools and aquatic centers</li>
                        <li>Community gardens and green spaces</li>
                        <li>Trail systems and pedestrian pathways</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Environmental Infrastructure</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Infrastructure that protects and enhances the natural environment:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Flood Control:</strong> Levees, dams, and flood management systems</li>
                    <li><strong>Erosion Control:</strong> Shoreline protection and sediment management</li>
                    <li><strong>Wastewater Treatment:</strong> Advanced treatment facilities and reuse systems</li>
                    <li><strong>Green Infrastructure:</strong> Permeable pavements and urban forests</li>
                    <li><strong>Renewable Energy:</strong> Solar farms and wind energy infrastructure</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Infrastructure Development Process</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Large-scale infrastructure projects require careful planning and execution:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Planning & Design:</strong> Feasibility studies, environmental impact assessments, and detailed engineering</li>
                    <li><strong>Permitting & Approvals:</strong> Securing necessary permits and regulatory approvals</li>
                    <li><strong>Procurement:</strong> Competitive bidding and contractor selection</li>
                    <li><strong>Construction:</strong> Phased implementation with quality control and safety management</li>
                    <li><strong>Testing & Commissioning:</strong> System testing and performance verification</li>
                    <li><strong>Maintenance & Operations:</strong> Long-term maintenance planning and handover</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Regulatory Compliance</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Environmental Standards</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Environmental Impact Assessments (EIA)</li>
                        <li>Clean Water Act compliance</li>
                        <li>Endangered Species Act considerations</li>
                        <li>Air quality and emissions standards</li>
                        <li>Waste management and disposal regulations</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Safety & Quality Standards</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>OSHA safety regulations</li>
                        <li>Federal Highway Administration standards</li>
                        <li>American Society of Civil Engineers guidelines</li>
                        <li>Local building and zoning codes</li>
                        <li>Quality assurance and quality control protocols</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Sustainability & Resilience</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Modern infrastructure must be sustainable and resilient:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Climate Adaptation:</strong> Infrastructure designed for changing weather patterns</li>
                    <li><strong>Energy Efficiency:</strong> Low-carbon construction and renewable energy integration</li>
                    <li><strong>Smart Infrastructure:</strong> Sensors, monitoring systems, and data-driven maintenance</li>
                    <li><strong>Green Materials:</strong> Recycled content and sustainable sourcing</li>
                    <li><strong>Community Integration:</strong> Infrastructure that enhances quality of life</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Project Management</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Infrastructure projects demand specialized project management:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Stakeholder Coordination:</strong> Managing relationships with government agencies, utilities, and communities</li>
                    <li><strong>Risk Management:</strong> Identifying and mitigating project risks</li>
                    <li><strong>Schedule Management:</strong> Coordinating complex sequencing and phasing</li>
                    <li><strong>Budget Control:</strong> Managing large-scale budgets and cost controls</li>
                    <li><strong>Quality Assurance:</strong> Ensuring compliance with specifications and standards</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Community Impact</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Infrastructure projects have lasting impacts on communities. We prioritize projects that enhance economic development, improve quality of life, and create sustainable growth. Our approach balances technical excellence with community engagement, ensuring infrastructure serves the needs of current and future generations.
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