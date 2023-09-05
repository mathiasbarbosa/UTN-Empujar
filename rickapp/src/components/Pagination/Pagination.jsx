import React from 'react';
import './pagination.css'

const Pagination = ({index,handlePrev, handleNext}) => {
    return (
        <div className='pagination'>
            <button disabled={index <= 1 ? true : false} onClick={handlePrev}>Prev ◀ </button>
            <button disabled={index >= 42 ? true : false} onClick={handleNext}>Next ▶ </button>
        </div>
    );
}

export default Pagination;
