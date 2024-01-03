import PropTypes from 'prop-types';

function CategoryFilter({ categories, handleCategoryClick }) {
  return (
    <div className="filter-buttons">
      <button
        type="button"
        onClick={() => handleCategoryClick(null)}
        className="mr-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Összes
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => handleCategoryClick(category)}
          className="mr-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
};

export default CategoryFilter;
