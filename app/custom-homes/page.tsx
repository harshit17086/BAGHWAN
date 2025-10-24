'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CustomHomesPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Custom Homes
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Crafting your dream home with personalized design, exceptional craftsmanship, and lasting quality.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Bespoke Home Construction</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Every home tells a story, and we help you create yours. Our custom home construction process begins with your vision and transforms it into reality through collaborative design, expert craftsmanship, and meticulous attention to detail.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    From concept to completion, we guide you through every step, ensuring your custom home reflects your lifestyle, values, and personality while meeting the highest standards of quality and durability.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Design & Planning</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Architectural Design</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Custom floor plans tailored to your needs</li>
                        <li>Exterior design reflecting your style preferences</li>
                        <li>Integration with natural surroundings</li>
                        <li>Efficient use of space and flow</li>
                        <li>Future expansion considerations</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Interior Design Coordination</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Material and finish selections</li>
                        <li>Lighting and electrical planning</li>
                        <li>Kitchen and bath design</li>
                        <li>Storage solutions and organization</li>
                        <li>Color schemes and aesthetic coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Construction Styles</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We build custom homes in various architectural styles to match your vision:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Contemporary Modern:</strong> Clean lines, open spaces, and minimalist design</li>
                    <li><strong>Traditional:</strong> Classic architecture with timeless appeal</li>
                    <li><strong>Craftsman:</strong> Handcrafted details and natural materials</li>
                    <li><strong>Rustic:</strong> Natural stone, wood, and organic elements</li>
                    <li><strong>Mediterranean:</strong> Stucco exteriors and tile roofs</li>
                    <li><strong>Victorian:</strong> Ornate details and historical charm</li>
                    <li><strong>Farmhouse:</strong> Warm, inviting spaces with practical design</li>
                    <li><strong>Mid-Century Modern:</strong> Retro-inspired design with clean aesthetics</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Smart Home Integration</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Technology Systems</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Home automation and control systems</li>
                        <li>Smart lighting and climate control</li>
                        <li>Security and surveillance integration</li>
                        <li>Audio and entertainment systems</li>
                        <li>Energy monitoring and management</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Infrastructure Planning</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>High-speed internet and networking</li>
                        <li>Structured wiring and cable management</li>
                        <li>Whole-home audio distribution</li>
                        <li>Smart appliance integration</li>
                        <li>Future-proof technology upgrades</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Sustainable Features</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Custom homes offer the perfect opportunity to incorporate sustainable design:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Energy Efficiency:</strong> Passive solar design, high-efficiency HVAC, and smart insulation</li>
                    <li><strong>Water Conservation:</strong> Low-flow fixtures, rainwater harvesting, and greywater systems</li>
                    <li><strong>Green Materials:</strong> Recycled content, sustainably harvested wood, and low-VOC finishes</li>
                    <li><strong>Renewable Energy:</strong> Solar panels, geothermal heating, and wind power integration</li>
                    <li><strong>Healthy Living:</strong> Improved indoor air quality and non-toxic materials</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Custom Home Process</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our comprehensive custom home building process ensures your vision becomes reality:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Discovery & Vision:</strong> Understanding your needs, lifestyle, and dreams</li>
                    <li><strong>Site Analysis:</strong> Evaluating location, soil, and environmental factors</li>
                    <li><strong>Design Development:</strong> Creating detailed plans and specifications</li>
                    <li><strong>Budget & Timeline:</strong> Establishing realistic costs and construction schedule</li>
                    <li><strong>Permitting:</strong> Securing all necessary approvals and permits</li>
                    <li><strong>Construction:</strong> Expert building with regular progress updates</li>
                    <li><strong>Quality Assurance:</strong> Rigorous inspections and final walkthrough</li>
                    <li><strong>Move-In:</strong> Smooth transition and post-construction support</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Luxury Amenities</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Elevate your lifestyle with premium custom features:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li><strong>Outdoor Living:</strong> Custom pools, outdoor kitchens, and landscaped gardens</li>
                    <li><strong>Home Offices:</strong> Dedicated workspaces with built-in technology</li>
                    <li><strong>Entertainment Areas:</strong> Home theaters, game rooms, and wine cellars</li>
                    <li><strong>Wellness Spaces:</strong> Spas, gyms, and meditation rooms</li>
                    <li><strong>Smart Storage:</strong> Custom closets, pantries, and organizational systems</li>
                    <li><strong>Multi-Generational Features:</strong> Accessible design and separate living quarters</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Quality Assurance</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    Custom homes require exceptional attention to detail. Our quality assurance process includes multiple inspections, third-party testing, and comprehensive documentation. We stand behind our work with extensive warranties and ongoing support to ensure your custom home remains a source of pride and comfort for generations.
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