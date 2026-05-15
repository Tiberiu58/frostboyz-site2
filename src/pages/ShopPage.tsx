import React, { useEffect, useState } from 'react';
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
  const materials = ['all', 'plated-stainless-steel', 'stainless-steel', 'brass', 'silver'];
  const colors = ['all', 'gold', 'silver', 'black'];
  const styles = ['all', 'cuban', 'rhombic', 'iced-out'];
  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: 'Under 150 RON', value: 'under-150' },
    { label: '150 - 250 RON', value: '150-250' },
    { label: '250+ RON', value: 'over-250' },
  ];

  useEffect(() => {
    let filtered = products;

    if (filters.category !== 'all') {
      filtered = filtered.filter((product) => product.category === filters.category);
    }

    if (filters.material !== 'all') {
      filtered = filtered.filter((product) => product.material === filters.material);
    }

    if (filters.color !== 'all') {
      filtered = filtered.filter((product) => product.color === filters.color);
    }

    if (filters.style !== 'all') {
      filtered = filtered.filter((product) => product.style === filters.style);
    }

    if (filters.priceRange !== 'all') {
      filtered = filtered.filter((product) => {
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
  }, [filters]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
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

  const renderRadioGroup = (
    title: string,
    name: keyof typeof filters,
    values: string[] | { label: string; value: string }[],
  ) => (
    <fieldset>
      <legend className="mb-3 font-semibold text-gray-900 dark:text-white">{title}</legend>
      <div className="space-y-2">
        {values.map((item) => {
          const value = typeof item === 'string' ? item : item.value;
          const label =
            typeof item === 'string'
              ? item === 'all'
                ? `All ${title}`
                : item.replaceAll('-', ' ')
              : item.label;

          return (
            <label key={value} className="flex min-h-8 items-center text-sm text-gray-700 dark:text-gray-300">
              <input
                type="radio"
                name={name}
                value={value}
                checked={filters[name] === value}
                onChange={(e) => handleFilterChange(name, e.target.value)}
                className="text-sky-600 focus:ring-sky-500"
              />
              <span className="ml-2 capitalize">{label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">Bijuterii iced out</p>
          <h1 className="mb-4 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl md:text-5xl">
            Lanturi Cuban si bijuterii iced out
          </h1>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            Alege lanturi iced out, bratari Cuban si piese streetwear cu livrare in Romania.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              aria-expanded={showFilters}
              className="flex min-h-11 items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold text-gray-900 transition-colors duration-300 hover:border-sky-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>

          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } h-fit rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 sm:p-6 lg:block lg:w-64`}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Filters</h2>
              <button
                onClick={clearFilters}
                className="rounded-md text-sm font-bold text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              {renderRadioGroup('Categories', 'category', categories)}
              {renderRadioGroup('Materials', 'material', materials)}
              {renderRadioGroup('Colors', 'color', colors)}
              {renderRadioGroup('Styles', 'style', styles)}
              {renderRadioGroup('Price', 'priceRange', priceRanges)}
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-300">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-white py-12 text-center dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">No products found with current filters</p>
                <button
                  onClick={clearFilters}
                  className="font-bold text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
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
