import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

const ShopPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    material: 'all',
    color: 'all',
    style: 'all',
    priceRange: 'all',
  });

  const categories = ['all', 'chains', 'bracelets', 'earrings'];
  const materials = ['all', 'stainless-steel', 'brass', 'silver'];
  const colors = ['all', 'gold', 'silver', 'black'];
  const styles = ['all', 'cuban', 'rhombic', 'iced-out'];
  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: 'Under $150', value: 'under-150' },
    { label: '$150 - $250', value: '150-250' },
    { label: '$250+', value: 'over-250' },
  ];

  const applyFilters = () => {
    let filtered = products;

    if (filters.category !== 'all') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.material !== 'all') {
      filtered = filtered.filter(product => product.material === filters.material);
    }

    if (filters.color !== 'all') {
      filtered = filtered.filter(product => product.color === filters.color);
    }

    if (filters.style !== 'all') {
      filtered = filtered.filter(product => product.style === filters.style);
    }

    if (filters.priceRange !== 'all') {
      filtered = filtered.filter(product => {
        switch (filters.priceRange) {
          case 'under-150':
            return product.price < 150;
          case '150-250':
            return product.price >= 150 && product.price <= 250;
          case 'over-250':
            return product.price > 250;
          default:
            return true;
        }
      });
    }

    setFilteredProducts(filtered);
  };

  React.useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      material: 'all',
      color: 'all',
      style: 'all',
      priceRange: 'all',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop the Frost</h1>
          <p className="text-xl text-gray-600">Discover your perfect piece of ice</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:w-64 bg-white rounded-lg p-6 h-fit`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-blue-400 hover:text-blue-600 text-sm font-medium"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              {/* Category */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={filters.category === category}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="text-blue-400 focus:ring-blue-400"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">
                        {category === 'all' ? 'All Categories' : category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Material</h4>
                <div className="space-y-2">
                  {materials.map(material => (
                    <label key={material} className="flex items-center">
                      <input
                        type="radio"
                        name="material"
                        value={material}
                        checked={filters.material === material}
                        onChange={(e) => handleFilterChange('material', e.target.value)}
                        className="text-blue-400 focus:ring-blue-400"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">
                        {material === 'all' ? 'All Materials' : material.replace('-', ' ')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Color</h4>
                <div className="space-y-2">
                  {colors.map(color => (
                    <label key={color} className="flex items-center">
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={filters.color === color}
                        onChange={(e) => handleFilterChange('color', e.target.value)}
                        className="text-blue-400 focus:ring-blue-400"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">
                        {color === 'all' ? 'All Colors' : color}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Price</h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <label key={range.value} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={filters.priceRange === range.value}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="text-blue-400 focus:ring-blue-400"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found with current filters</p>
                <button
                  onClick={clearFilters}
                  className="text-blue-400 hover:text-blue-600 font-medium"
                >
                  Clear filters to see all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;