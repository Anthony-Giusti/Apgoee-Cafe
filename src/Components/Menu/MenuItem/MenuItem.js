import React from 'react';
import PropTypes from 'prop-types';

import './MenuItem.css';

const MenuItem = ({ item, getItemAdditions }) => (
  <div className="menuItem">
    <hr />
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <section className="menuItem_Price">
      <p>{`Small ● $${item.prices.small}`}</p>
      <p>{`Large ● $${item.prices.large}`}</p>
    </section>
    {item.additions && (
      <div className="menuItem_additions">
        {getItemAdditions(item.additions)}
      </div>
    )}
  </div>
);

MenuItem.propTypes = {
  item: PropTypes.objectOf.isRequired,
  getItemAdditions: PropTypes.func.isRequired,
};

export default MenuItem;
