import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/Usuario/List';
import ListItem from 'components/Usuario/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import UsuarioListItem from 'containers/Usuario/UsuarioListItem';

const UsariosList = ({ loading, error, repos }) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (repos !== false) {
    return <List items={repos} component={UsuarioListItem} />;
  }

  return null;
};

UsariosList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any
};

export default UsariosList;
