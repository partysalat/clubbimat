import React from 'react';
import PropTypes from 'prop-types';
import './card.styl';

function Card({ title, isOpen, modeText }) {
  return (
    <div className="card-container">
      <div className={['card', isOpen ? 'card-flipper' : ''].join(' ')}>
        <div className="card-front">
          {title}
        </div>
        <div className="card-back">
          {modeText}
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  modeText: PropTypes.bool,
};
export default Card;
