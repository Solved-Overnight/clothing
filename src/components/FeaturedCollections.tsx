import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Award } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'Summer Essentials',
    description: 'Light, breathable fabrics perfect for warm weather adventures',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 24,
    badge: 'New',
    icon: Sparkles,
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    name: 'Business Casual',
    description: 'Professional attire for the modern workplace environment',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 18,
    badge: 'Trending',
    icon: TrendingUp,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 3,
    name: 'Premium Collection',
    description: 'Luxury pieces crafted with exceptional attention to detail',
    image: 'https://images.pexels.com/photos/5560021/pexels-photo-5560021.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 32,
    badge: 'Premium',
    icon: Award,
    gradient: 'from-purple-600 to-pink-600'
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-4">
            <Sparkles className="h-4 w-4" />
            Curated Collections
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Collections
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collections designed for every occasion, 
            lifestyle, and season. Each piece tells a story of quality and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => {
            const IconComponent = collection.icon;
            return (
              <div
                key={collection.id}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${collection.gradient} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}>
                    <IconComponent className="h-3 w-3" />
                    {collection.badge}
                  </div>
                  
                  {/* Item Count */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90 font-medium">{collection.itemCount} items</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const productsSection = document.getElementById('all-products');
                        if (productsSection) {
                          productsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
                    >
                      View Collection
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const productsSection = document.getElementById('all-products');
                        if (productsSection) {
                          productsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="flex items-center text-gray-900 font-semibold group-hover:text-gray-700 transition-colors duration-300"
                    >
                      Explore Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Available
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="max-w-md mx-auto text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Discover More Collections</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore our complete range of premium fashion collections designed for every style and occasion.
              </p>
              <button 
                onClick={() => {
                  const productsSection = document.getElementById('all-products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-4 rounded-2xl font-semibold hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3">
                  View All Collections
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}