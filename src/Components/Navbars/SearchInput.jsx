import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../../Redux/features/Search/SearchSlice';

function SearchInput() {
    const inputValue = useSelector((state) => state.search.value);
    const dispatch = useDispatch();
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                onChange={(e) => dispatch(changeValue(e.target.value))}
                type="text" />
        </form>
  );
}

export default SearchInput;