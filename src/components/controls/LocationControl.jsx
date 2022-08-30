import { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';

// set the options available on the form
const options = [
  {},
];

export default function LocationControl({ onChange, value }) {
  // event handler for when the value of "sex" changes
  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    // Map through the options array and grab the value from each object within the array, display all values.
    <div className="control">
      <span className="control__label">Location</span>
      <div className="selector-sex__options">
        {options.map((option) => (
          <Fragment key={option.value}>
          <option value={option.value}>{option.value}</option>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

LocationControl.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
