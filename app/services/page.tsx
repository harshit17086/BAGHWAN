import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Residential Construction',
      icon: '🏠',
      description: 'Custom home building and residential developments tailored to your lifestyle and budget.',
      features: [
        'Custom Home Design',
        'New Home Construction',
        'Multi-Family Housing',
        'Residential Complexes',
      ],
    },
    {
      title: 'Commercial Buildings',
      icon: '🏢',
      description: 'State-of-the-art commercial spaces that enhance productivity and business success.',
      features: [
        'Office Buildings',
        'Retail Centers',
        'Warehouses',
        'Mixed-Use Developments',
      ],
    },
    {
      title: 'Renovations & Remodeling',
      icon: '🔨',
      description: 'Transform existing spaces with modern upgrades and comprehensive renovations.',
      features: [
        'Interior Remodeling',
        'Exterior Renovations',
        'Historic Restoration',
        'Space Optimization',
      ],
    },
    {
      title: 'Infrastructure Projects',
      icon: '🌉',
      description: 'Large-scale infrastructure development for communities and industrial needs.',
      features: [
        'Roads & Bridges',
        'Utilities Installation',
        'Site Development',
        'Industrial Facilities',
      ],
    },
    {
      title: 'Project Management',
      icon: '📋',
      description: 'End-to-end project oversight ensuring timely delivery and budget adherence.',
      features: [
        'Project Planning',
        'Budget Management',
        'Timeline Coordination',
        'Quality Control',
      ],
    },
    {
      title: 'Green Building',
      icon: '🌱',
      description: 'Sustainable construction solutions that minimize environmental impact.',
      features: [
        'LEED Certification',
        'Energy-Efficient Design',
        'Sustainable Materials',
        'Solar Integration',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">Comprehensive construction solutions for every need</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Construction Process
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            A proven methodology that delivers results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We meet to understand your vision, requirements, and budget',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed design and project planning with clear timelines',
              },
              {
                step: '03',
                title: 'Construction',
                description: 'Expert execution with regular updates and quality checks',
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Final inspection and handover with ongoing support',
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Fair and transparent pricing with no hidden costs
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed professionals with comprehensive insurance
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">
                98% satisfaction rate from our valued clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and receive a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/projects"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
