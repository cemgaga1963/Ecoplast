import React from 'react';

function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About EcoPlast</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Leading the way in sustainable plastic packaging solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p>
                Founded in 1995, EcoPlast began as a small family-owned business with a vision to provide high-quality plastic packaging solutions. Over the years, we have grown into a leading manufacturer in the industry, serving clients across various sectors including retail, food, and industrial applications.
              </p>
              <p>
                As environmental concerns became more prominent, we recognized the need to evolve our business practices. In 2010, we made a significant shift towards eco-friendly manufacturing processes and materials, becoming one of the pioneers in sustainable plastic packaging solutions.
              </p>
              <p>
                Today, EcoPlast continues to innovate and lead the industry with our commitment to quality, sustainability, and customer satisfaction. Our state-of-the-art manufacturing facilities and dedicated team of professionals ensure that we deliver products that meet the highest standards while minimizing environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700">
                To provide innovative and sustainable plastic packaging solutions that meet our customers' needs while minimizing environmental impact. We strive to balance quality, functionality, and eco-friendliness in every product we manufacture.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700">
                To be the global leader in sustainable plastic packaging, setting industry standards for environmental responsibility without compromising on product quality and performance. We aim to drive positive change in the industry through continuous innovation and responsible practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Innovation</h3>
              <p className="text-gray-600 text-center">
                We continuously explore new technologies and materials to improve our products and processes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We are committed to minimizing our environmental footprint through responsible manufacturing practices.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Quality</h3>
              <p className="text-gray-600 text-center">
                We maintain the highest standards in our products and services, ensuring reliability and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Manufacturing Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="z-10 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Material Selection</h3>
                    <p className="text-gray-600">
                      We carefully select high-quality, eco-friendly raw materials that meet our sustainability standards while ensuring product durability and performance.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="z-10 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Design & Prototyping</h3>
                    <p className="text-gray-600">
                      Our design team works closely with clients to create custom packaging solutions, developing prototypes for testing and refinement before full-scale production.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="z-10 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Production</h3>
                    <p className="text-gray-600">
                      Using state-of-the-art equipment and energy-efficient processes, we manufacture plastic bags and packaging products with precision and consistency.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="z-10 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
                    <p className="text-gray-600">
                      Every product undergoes rigorous quality checks to ensure it meets our high standards for durability, functionality, and environmental compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="CEO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mb-1">Michael Johnson</h3>
              <p className="text-gray-600 text-center mb-4">CEO & Founder</p>
              <p className="text-gray-600 text-center">
                With over 30 years of experience in the packaging industry, Michael leads our company with a vision for innovation and sustainability.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="COO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mb-1">Sarah Chen</h3>
              <p className="text-gray-600 text-center mb-4">Chief Operations Officer</p>
              <p className="text-gray-600 text-center">
                Sarah oversees our manufacturing operations, ensuring efficiency, quality, and adherence to our sustainability goals.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="CTO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mb-1">David Rodriguez</h3>
              <p className="text-gray-600 text-center mb-4">Chief Technology Officer</p>
              <p className="text-gray-600 text-center">
                David leads our R&D team, developing innovative materials and manufacturing processes that push the boundaries of sustainable packaging.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;