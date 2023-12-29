import PropTypes from 'prop-types';

function CategoryFilter({ handleCategoryClick }) {
  return (
    <div className="filter-buttons">
      <button
        type="button"
        onClick={() => handleCategoryClick(null)}
        className="mr-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Összes
      </button>
      <button
        type="button"
        onClick={() => handleCategoryClick('Gyümölcsök')}
        className="mr-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Gyümölcsök
      </button>
      <button
        type="button"
        onClick={() => handleCategoryClick('Fűszernövények')}
        className="mr-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Fűszernövények
      </button>
      <button
        type="button"
        onClick={() => handleCategoryClick('Zöldségek')}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Zöldségek
      </button>
    </div>
  );
}
CategoryFilter.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
};

export default CategoryFilter;
