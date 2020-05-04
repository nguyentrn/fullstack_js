import React from 'react';
import { SelectBarContainer } from './style';

const SelectBar = (props) => {
  const handleSelect = (e) => {
    props.handleSetSortBy(parseInt(e.target.value));
  };
  return (
    <SelectBarContainer>
      <label for="sortBy">{props.title}</label>

      <select id="sortBy" onChange={handleSelect}>
        {props.values.map((value, id) => (
          <option key={value} value={id + 1}>
            {value}
          </option>
        ))}
      </select>
    </SelectBarContainer>
  );
};

export default SelectBar;
