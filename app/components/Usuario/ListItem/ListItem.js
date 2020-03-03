import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ListItem = ({ item }) => (
  <div className="list-item-wrapper">
    <li className="list-item">{item.user_vnombre}</li>
  </div>
);

ListItem.propTypes = {
  item: PropTypes.any
};

export default ListItem;
