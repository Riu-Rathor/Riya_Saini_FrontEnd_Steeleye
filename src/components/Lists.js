import React, { useState, useEffect, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import SingleListItem from './SingleListItem';
import './Lists.css'


// List Component
const WrappedListComponent = ({
  items,
}) => {
    
  const [selectedIndex, setSelectedIndex] = useState(null)

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  return (
    <div className='outer'>
        <h1 className='title-heading'>Displaying the List Items</h1>
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
          key = {index}
        />
      ))}
    </ul>
    </div>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: [
    {text : "Item 1"},
    {text : "Item 2"},
    {text : "Item 3"},
    {text : "Item 4"},
    {text : "Item 5"},
    {text : "Item 6"},
    {text : "Item 7"},
  ]
};

const List = memo(WrappedListComponent);

export default List;
