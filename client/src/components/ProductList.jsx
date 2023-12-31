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
        compareValue = a.herbName.localeCompare(b.herbName);
      } else if (sortBy === 'price') {
        compareValue = a.price - b.price;
      }

      return sortOrder === 'asc' ? compareValue : -compareValue;
    });

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
      id: PropTypes.string.isRequired,
      category: PropTypes.string,
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
