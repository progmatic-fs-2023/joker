import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import uniqueKeyGenerator from '../helpers/uniqueKeyGenerator';
import CategoryFilter from './CategoryFilter';
import SortDropdown from './SortDropdown';

function ProductList({ stockList }) {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (selectedSortBy, selectedSortOrder) => {
    setSortBy(selectedSortBy);
    setSortOrder(selectedSortOrder);
  };

  const filteredList = stockList
    .filter((item) => (selectedCategory ? item.category === selectedCategory : true))
    .sort((a, b) => {
      let compareValue;

      if (sortBy === 'name') {
        compareValue = a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        compareValue = a.unitPrice - b.unitPrice;
      }

      return sortOrder === 'asc' ? compareValue : -compareValue;
    });

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="product-list-container">
      <div className="flex justify-between items-center mb-4">
        <CategoryFilter handleCategoryClick={handleCategoryClick} />
        <SortDropdown sortBy={sortBy} sortOrder={sortOrder} handleSortChange={handleSortChange} />
      </div>
      <div className="product-list flex flex-wrap">
        {filteredList.map((stockItem) => (
          <Card key={uniqueKeyGenerator()} stockItem={stockItem} />
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  stockList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      latin: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packing: PropTypes.string.isRequired,
      unitPrice: PropTypes.number.isRequired,
    }),
  ),
};
ProductList.defaultProps = {
  stockList: [],
};

export default ProductList;
