import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function FilterArea({ categories, handleCategoryClick, handleSortChange }) {

    const handleDropdown = (target) => {
        const [selectedSortBy, selectedSortOrder] = target.split('-');
        handleSortChange(selectedSortBy, selectedSortOrder);
    }

    return (
        <ButtonGroup className='d-flex flex-wrap'>
            <Button variant='outline-primary' type="button"
                onClick={() => handleCategoryClick(null)} size='md'>Összes</Button>
            {categories.map((category) => (
                <Button
                    variant='outline-primary'
                    key={category}
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    size='md'
                >
                    {category}
                </Button>
            ))}
            <DropdownButton as={ButtonGroup} title="Rendezés" id="bg-nested-dropdown" >
                <Dropdown.Item as={Button} eventKey="name-asc" value="name-asc" onClick={(e) => handleDropdown(e.target.value)}>Név növekvő</Dropdown.Item>
                <Dropdown.Item as={Button} eventKey="name-desc" value="name-desc" onClick={(e) => handleDropdown(e.target.value)}>Név csökkenő</Dropdown.Item>
                <Dropdown.Item as={Button} eventKey="price-asc" value="price-asc" onClick={(e) => handleDropdown(e.target.value)}>Ár növekvő</Dropdown.Item>
                <Dropdown.Item as={Button} eventKey="price-desc" value="price-desc" onClick={(e) => handleDropdown(e.target.value)}>Ár csökkenő</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    );
}

FilterArea.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleCategoryClick: PropTypes.func.isRequired,
    handleSortChange: PropTypes.func.isRequired,
};

export default FilterArea;