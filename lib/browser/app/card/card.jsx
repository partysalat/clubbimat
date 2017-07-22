import React from 'react';
import PropTypes from 'prop-types';
import './card.styl';

function Card({ title, onClick }) {
  return (
    <div className="card-container" onClick={onClick}>
      <div className="card">
        <div className="card-front">
          {title}
        </div>
        <div className="card-back">
          Fooo!
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Card;
