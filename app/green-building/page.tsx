'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GreenBuildingPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Green Building
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Sustainable construction practices that protect the environment while creating healthy, efficient buildings.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Sustainable Construction Excellence</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Green building represents the future of construction, combining environmental responsibility with superior building performance. Our sustainable construction practices minimize environmental impact while creating healthier, more efficient spaces that save energy, reduce operating costs, and enhance occupant well-being.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    We integrate green building principles throughout the entire construction process, from site selection and material choices to energy systems and indoor environmental quality. Our commitment to sustainability extends beyond certification to creating buildings that truly benefit both people and the planet.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Green Building Certifications</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">LEED Certification</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Leadership in Energy and Environmental Design</li>
                        <li>Comprehensive sustainability rating system</li>
                        <li>Points-based certification levels (Certified, Silver, Gold, Platinum)</li>
                        <li>Covers site development, energy efficiency, and indoor quality</li>
                        <li>Internationally recognized standard for green buildings</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Energy Star</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Government-backed energy efficiency program</li>
                        <li>Focus on energy performance and cost savings</li>
                        <li>Third-party verification of energy efficiency</li>
                        <li>Applicable to homes, commercial buildings, and appliances</li>
                        <li>Proven track record of utility bill reductions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Other Certifications</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Living Building Challenge (regenerative design)</li>
                        <li>PASSIVE HOUSE (ultra-low energy buildings)</li>
                        <li>Green Globes (Canadian green building rating)</li>
                        <li>Built Green (Pacific Northwest standard)</li>
                        <li>NGBS Green Building Standard</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Sustainable Site Development</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Smart site planning minimizes environmental impact from the start:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Site Selection:</strong> Choosing locations that preserve natural habitats and minimize disturbance</li>
                    <li><strong>Stormwater Management:</strong> Permeable surfaces, rain gardens, and bioswales</li>
                    <li><strong>Erosion Control:</strong> Protecting soil during construction with silt fences and vegetation</li>
                    <li><strong>Landscaping:</strong> Native plants, drought-tolerant landscaping, and green roofs</li>
                    <li><strong>Transportation:</strong> Proximity to public transit and pedestrian-friendly design</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Energy Efficiency</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Building Envelope</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>High-performance insulation and air sealing</li>
                        <li>Energy-efficient windows and doors</li>
                        <li>Thermal mass for natural temperature regulation</li>
                        <li>Advanced framing techniques to reduce thermal bridging</li>
                        <li>Reflective roofing and cool roof technologies</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Renewable Energy Systems</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Solar photovoltaic panels for electricity generation</li>
                        <li>Solar thermal systems for hot water</li>
                        <li>Wind turbines for small-scale power generation</li>
                        <li>Geothermal heat pumps for heating and cooling</li>
                        <li>Energy storage systems and smart grid integration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Water Conservation</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Efficient water use reduces environmental impact and operating costs:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Low-Flow Fixtures:</strong> Water-efficient faucets, showerheads, and toilets</li>
                    <li><strong>Rainwater Harvesting:</strong> Collecting rainwater for irrigation and non-potable uses</li>
                    <li><strong>Greywater Systems:</strong> Recycling water from sinks and showers</li>
                    <li><strong>Xeriscaping:</strong> Drought-tolerant landscaping requiring minimal irrigation</li>
                    <li><strong>Smart Irrigation:</strong> Weather-based controllers and moisture sensors</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Sustainable Materials</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Material Selection Criteria</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Recycled content and recyclable materials</li>
                        <li>Renewable and bio-based materials</li>
                        <li>Locally sourced to reduce transportation impact</li>
                        <li>Low embodied energy in production</li>
                        <li>Non-toxic and low-VOC (volatile organic compounds)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Green Material Options</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Bamboo and reclaimed wood products</li>
                        <li>Recycled steel and aluminum</li>
                        <li>Low-impact concrete and cement alternatives</li>
                        <li>Natural fiber insulation</li>
                        <li>Non-toxic paints and finishes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Indoor Environmental Quality</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Healthy indoor environments promote occupant well-being:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Ventilation:</strong> Enhanced fresh air delivery and air quality monitoring</li>
                    <li><strong>Lighting:</strong> Natural daylighting and energy-efficient artificial lighting</li>
                    <li><strong>Acoustics:</strong> Sound-absorbing materials for better acoustic comfort</li>
                    <li><strong>Thermal Comfort:</strong> Proper temperature and humidity control</li>
                    <li><strong>Air Quality:</strong> Low-emission materials and advanced filtration systems</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Waste Management</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Construction waste represents a significant environmental impact:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Waste Reduction:</strong> Material optimization and just-in-time delivery</li>
                    <li><strong>Recycling Programs:</strong> On-site sorting and recycling of construction waste</li>
                    <li><strong>Deconstruction:</strong> Careful dismantling to salvage reusable materials</li>
                    <li><strong>Donation Programs:</strong> Diverting usable materials to community organizations</li>
                    <li><strong>Waste Tracking:</strong> Monitoring and reporting waste diversion rates</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Green Building Process</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our integrated approach ensures sustainable outcomes:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Assessment:</strong> Evaluating site and project sustainability goals</li>
                    <li><strong>Design Integration:</strong> Incorporating green features from the start</li>
                    <li><strong>Material Selection:</strong> Choosing sustainable products and suppliers</li>
                    <li><strong>Construction Management:</strong> Implementing green construction practices</li>
                    <li><strong>Commissioning:</strong> Testing and optimizing building systems</li>
                    <li><strong>Certification:</strong> Achieving green building certifications</li>
                    <li><strong>Education:</strong> Training occupants on sustainable building operation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Economic Benefits</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Green buildings offer compelling financial advantages through reduced operating costs, increased property values, and access to incentives. Our sustainable construction practices deliver long-term value while contributing to environmental stewardship and community health.
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