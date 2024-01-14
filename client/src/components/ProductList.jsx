import { useState } from 'react';
import PropTypes from 'prop-types';
import CardKitchenSink from './CardKitchenSink';
import uniqueKeyGenerator from '../helpers/uniqueKeyGenerator';
import FilterArea from './FilterArea'

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
    <div className="product-list-container px-5">
      <div className="filter-area d-flex justify-content-center  m-3">
        <FilterArea handleSortChange={handleSortChange} categories={categories} handleCategoryClick={handleCategoryClick} />
      </div>
      <div className="product-list row gap-2 d-flex justify-content-around">
        {filteredList.map((stockItem) => (
          <CardKitchenSink key={uniqueKeyGenerator()} stockItem={stockItem} />
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
