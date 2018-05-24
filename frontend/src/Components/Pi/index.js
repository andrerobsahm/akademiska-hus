import React from 'react';
import PropTypes from 'prop-types';

const Pi = ({ handleCalculatePi, pi }) => (
  <div>
    <button
      onClick={handleCalculatePi}
      className="button"
    >
      Calculate π
    </button>
  </div>
)

Pi.propTypes = {
  pi: PropTypes.number.isRequired,
  handleCalculatePi: PropTypes.func.isRequired,
}

export default Pi;
