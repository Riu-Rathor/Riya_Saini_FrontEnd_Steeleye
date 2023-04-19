import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './SingleListItem.css'
// Single List Item


const WrappedSingleListItem = ({
    index,
    isSelected,
    onClickHandler,
    text,
  }) => {
  
    return (
        <div className='outer-box'>
      <li
        style={{ backgroundColor: isSelected ? "var(--lightPink)" : 'var(--blue)'}}
        onClick={() => onClickHandler(index)}
      >
        <span>{text}</span>
      </li>
      </div>
    );
  };
  
  WrappedSingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  };
  
  const SingleListItem = memo(WrappedSingleListItem);
  export default SingleListItem
  