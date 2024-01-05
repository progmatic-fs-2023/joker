import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import uniqueKeyGenerator from '../helpers/uniqueKeyGenerator';
import CategoryFilter from './CategoryFilter';
import SortDropdown from './SortDropdown';

function ProductList({ stockList }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  // categories called as family in the database
  const categories = Array.from(new Set(stockList.map((item) => item.family)));

  const handleCategoryClick = (family) => {
    setSelectedCategory(family);
  };

  const handleSortChange = (selectedSortBy, selectedSortOrder) => {
    setSortBy(selectedSortBy);
    setSortOrder(selectedSortOrder);
  };

  const filteredList = stockList
    .filter((item) => (selectedCategory ? item.family === selectedCategory : true))
    .sort((a, b) => {
      let compareValue;

      if (sortBy === 'name') {
        compareValue = a.herbName.localeCompare(b.herbName);
      } else if (sortBy === 'price') {
        compareValue = a.price - b.price;
      }

      return sortOrder === 'asc' ? compareValue : -compareValue;
    });

  return (
    <div className="product-list-container">
      <div className="flex justify-between items-center mb-4">
        <CategoryFilter categories={categories} handleCategoryClick={handleCategoryClick} />
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
      id: PropTypes.string.isRequired,
      family: PropTypes.string,
      image: PropTypes.arrayOf(PropTypes.string).isRequired,
      herbName: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      stockQuantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ),
};
ProductList.defaultProps = {
  stockList: [],
};

export default ProductList;
