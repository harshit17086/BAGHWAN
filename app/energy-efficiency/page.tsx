'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EnergyEfficiencyPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Energy Efficiency
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Building homes that save energy, reduce costs, and protect the environment through smart design and technology.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Energy-Efficient Building Philosophy</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Energy efficiency is a cornerstone of modern construction. At HRC Construction, we design and build homes that minimize energy consumption while maximizing comfort and performance. Our approach combines passive design strategies with advanced technologies to create homes that are both environmentally responsible and cost-effective to operate.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    We help homeowners save thousands of dollars annually on energy bills while reducing their carbon footprint and contributing to a sustainable future.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Passive Design Strategies</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Optimal Orientation & Layout</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Solar orientation for natural heating and lighting</li>
                        <li>Strategic window placement for daylighting</li>
                        <li>Thermal mass utilization for temperature regulation</li>
                        <li>Shade design to reduce cooling loads</li>
                        <li>Natural ventilation strategies</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">High-Performance Insulation</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Advanced insulation materials and techniques</li>
                        <li>Air sealing and vapor barrier systems</li>
                        <li>Thermal bridge elimination</li>
                        <li>Insulated concrete forms (ICF) construction</li>
                        <li>High-efficiency window and door systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">HVAC Systems & Mechanicals</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We integrate high-efficiency heating, ventilation, and air conditioning systems designed for optimal performance:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Energy Star certified heating and cooling equipment</li>
                    <li>Heat pump systems for efficient heating and cooling</li>
                    <li>Zoned HVAC systems for customized comfort</li>
                    <li>Energy recovery ventilators (ERVs) for fresh air</li>
                    <li>Smart thermostats and automated controls</li>
                    <li>Ductless mini-split systems where appropriate</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Renewable Energy Integration</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Solar Power Systems</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Photovoltaic (PV) system design and installation</li>
                        <li>Battery storage solutions</li>
                        <li>Net metering and grid-tie systems</li>
                        <li>Solar hot water heating</li>
                        <li>Permitting and interconnection support</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Other Renewable Options</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Geothermal heating and cooling systems</li>
                        <li>Wind turbine feasibility assessment</li>
                        <li>Micro-hydro power potential</li>
                        <li>Hybrid renewable energy systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Energy-Efficient Appliances & Fixtures</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Every component of your home contributes to overall energy performance:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Energy Star certified appliances and lighting</li>
                    <li>LED lighting systems throughout the home</li>
                    <li>Low-flow plumbing fixtures and fixtures</li>
                    <li>High-efficiency water heaters</li>
                    <li>Smart home automation for energy management</li>
                    <li>Energy-efficient kitchen and laundry appliances</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Building Science & Performance</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We use building science principles to optimize energy performance:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Blower door testing for air tightness</li>
                    <li>Thermal imaging for heat loss detection</li>
                    <li>Energy modeling and simulation</li>
                    <li>Post-construction performance verification</li>
                    <li>Utility bill analysis and optimization</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Certifications & Incentives</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Energy Efficiency Certifications</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Energy Star for Homes certification</li>
                        <li>LEED for Homes certification</li>
                        <li>Passive House certification</li>
                        <li>NGBS Green certification</li>
                        <li>HERS rating system</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Financial Incentives</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        We help you access available rebates, tax credits, and incentives for energy-efficient construction, including federal, state, and utility company programs that can significantly reduce your project costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Long-Term Savings & ROI</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Energy-efficient homes provide substantial financial benefits:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Reduced utility bills (30-50% savings typical)</li>
                    <li>Increased home value and marketability</li>
                    <li>Lower insurance premiums for efficient homes</li>
                    <li>Tax advantages and depreciation benefits</li>
                    <li>Protection against rising energy costs</li>
                    <li>Environmental impact reduction</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Energy Consulting Services</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Our energy specialists work with you from initial design through occupancy to ensure your home performs optimally. We provide detailed energy modeling, cost-benefit analysis, and ongoing support to help you make informed decisions about your home&apos;s energy systems. Let us help you build a home that&apos;s as efficient as it is beautiful.
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