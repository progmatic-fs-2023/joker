import PropTypes from 'prop-types';

function SortDropdown({ sortBy, sortOrder, handleSortChange }) {
  return (
    <div className="sort-dropdown ml-auto">
      <label htmlFor="sort" className="text-sm">
        Rendezés:
        <select
          id="sort"
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [selectedSortBy, selectedSortOrder] = e.target.value.split('-');
            handleSortChange(selectedSortBy, selectedSortOrder);
          }}
          className="p-1 text-sm font-bold rounded"
        >
          <option value="name-asc">Név növekvő</option>
          <option value="name-desc">Név csökkenő</option>
          <option value="price-asc">Ár növekvő</option>
          <option value="price-desc">Ár csökkenő</option>
        </select>
      </label>
    </div>
  );
}

SortDropdown.propTypes = {
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default SortDropdown;
