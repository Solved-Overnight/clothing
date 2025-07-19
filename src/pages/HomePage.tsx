import React, { useState, useMemo } from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import ProductGrid from '../components/ProductGrid';
import ProductModal from '../components/ProductModal';
import FilterSidebar from '../components/FilterSidebar';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import { products } from '../data/products';
import { Product } from '../types';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sort products
    if (sortBy) {
      filtered = [...filtered].sort((a, b) => {
        switch (sortBy) {
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'name':
            return a.name.localeCompare(b.name);
          case 'rating':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
  };

  const handlePriceFilter = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  return (
    <>
      <Hero />
      <FeaturedCollections />
      
      <div id="all-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {selectedCategory === 'all' ? 'All Products' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{filteredProducts.length} items available</p>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-3 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium transform hover:scale-105"
          >
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className="relative">
          <FilterSidebar
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(false)}
            onSortChange={handleSortChange}
            onPriceFilter={handlePriceFilter}
          />
          
          <div className={`transition-all duration-500 ${isFilterOpen ? 'ml-80' : 'ml-0'}`}>
            <ProductGrid
              products={filteredProducts}
              onProductClick={handleProductClick}
            />
            
            {/* View All Products Button */}
            {filteredProducts.length > 8 && (
              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Discover More Amazing Products</h3>
                  <p className="text-gray-600 mb-6">Explore our complete collection of premium fashion items</p>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto">
                    <ShoppingBag className="h-5 w-5" />
                    Load More Products
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Testimonials />
      <Newsletter />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}