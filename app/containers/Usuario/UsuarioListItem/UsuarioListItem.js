/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/Usuario/ListItem';
import { IssueIcon } from 'components/Icons';
import './style.scss';

export default class UsuarioListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner

    // Put together the content of the repository
    const content = (
      <div className="repo-list-item">
        <a className="repo-list-item__repo-link">
          {item.user_vnombre}
        </a>
      </div>
    );

    // Render the content into a list item
    return (
      <ListItem key={item.user_nid} item={item} />
    );
  }
}

UsuarioListItem.propTypes = {
  item: PropTypes.object
};
