'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function StructuralIntegrityPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Structural Integrity
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed mb-12">
              Building homes that stand the test of time. Our commitment to structural excellence ensures safety, stability, and longevity.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Foundation of Excellence</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Structural integrity is the backbone of every great home. At HRC Construction, we approach structural design and construction with meticulous attention to detail, using proven engineering principles and premium materials to create homes that are as safe as they are beautiful.
                  </p>
                  <p className="text-[#6B7555] leading-relaxed">
                    Our structural systems are designed to withstand environmental stresses, seismic activity, and the test of time, providing you with peace of mind for generations to come.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Foundation Systems</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Concrete Foundations</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Reinforced concrete footings and foundations</li>
                        <li>Proper soil analysis and bearing capacity assessment</li>
                        <li>Moisture protection and drainage systems</li>
                        <li>Seismic reinforcement where required</li>
                        <li>Quality concrete mixes with proper curing</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Advanced Foundation Options</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Insulated concrete forms (ICF) for superior strength</li>
                        <li>Post-tensioned concrete slabs</li>
                        <li>Helical pile foundations for challenging soils</li>
                        <li>Crawl space and basement waterproofing</li>
                        <li>Foundation drainage and ventilation systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Framing & Structural Systems</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our framing systems provide the structural skeleton that supports your home:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Engineered wood framing with proper spacing and sizing</li>
                    <li>Steel framing options for superior strength and fire resistance</li>
                    <li>Advanced engineered wood products (LVL, PSL, LSL)</li>
                    <li>Proper load path design for wind and seismic resistance</li>
                    <li>Quality fastener systems and connection details</li>
                    <li>Moisture protection and ventilation in framing</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Roof Systems & Design</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Structural Roof Design</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Engineered trusses and rafters</li>
                        <li>Proper roof pitch and load calculations</li>
                        <li>Snow load and wind resistance design</li>
                        <li>Attic ventilation and moisture control</li>
                        <li>Roof diaphragm design for stability</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Quality Roofing Materials</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Premium architectural shingles</li>
                        <li>Metal roofing systems</li>
                        <li>Tile and slate roofing options</li>
                        <li>Proper underlayment and flashing</li>
                        <li>Energy-efficient roof coatings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Engineering & Design Standards</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Every HRC project includes professional engineering oversight:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Licensed structural engineers for complex designs</li>
                    <li>Building code compliance verification</li>
                    <li>Load calculations for all structural elements</li>
                    <li>Seismic and wind design requirements</li>
                    <li>Foundation engineering and soil analysis</li>
                    <li>Construction document review and approval</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Quality Control & Inspection</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Construction Phase Inspections</h3>
                      <ul className="list-disc pl-6 space-y-1 text-[#6B7555]">
                        <li>Foundation inspections before concrete pour</li>
                        <li>Framing inspections for structural integrity</li>
                        <li>Roof and wall sheathing inspections</li>
                        <li>Mechanical, electrical, and plumbing rough-ins</li>
                        <li>Final building inspection coordination</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[#2F3D24] mb-3">Independent Third-Party Reviews</h3>
                      <p className="text-[#6B7555] leading-relaxed">
                        For larger or complex projects, we engage independent structural engineers to review our work and provide additional assurance of structural integrity.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Durability & Longevity</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    We build for the long term with materials and methods that stand the test of time:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Pressure-treated lumber for below-grade applications</li>
                    <li>Corrosion-resistant fasteners and connectors</li>
                    <li>Proper flashing and moisture protection</li>
                    <li>Quality concrete with air entrainment for freeze-thaw resistance</li>
                    <li>Structural warranties and maintenance guidelines</li>
                    <li>Design life exceeding 100 years for major components</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Seismic & Environmental Considerations</h2>
                  <p className="mb-4 text-[#6B7555] leading-relaxed">
                    Our designs account for local environmental conditions:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7555]">
                    <li>Seismic reinforcement in earthquake-prone areas</li>
                    <li>Hurricane and high-wind resistance design</li>
                    <li>Flood elevation and protection measures</li>
                    <li>Wildfire-resistant construction in high-risk areas</li>
                    <li>Climate-appropriate material selection</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2F3D24] mb-6">Structural Warranties</h2>
                  <p className="text-[#6B7555] leading-relaxed">
                    We stand behind our structural work with comprehensive warranties that protect your investment. Our structural integrity guarantees provide peace of mind, knowing that your home is built to the highest standards of safety and durability. When you choose HRC Construction, you&apos;re choosing a foundation that will support your family for generations.
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