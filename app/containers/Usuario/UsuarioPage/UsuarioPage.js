/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import UsuariosList from 'components/Usuario/UsuariosList';
import './style.scss';

export default class UsuarioPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const {
      loading, error, repos, username, onChangeUsername, onSubmitForm
    } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>USUARIOS</h2>
          </section>
          <section>
            <h2>ADD</h2>
            <form onSubmit={onSubmitForm}>
              <label htmlFor="username">
                <input
                  id="username"
                  type="text"
                  placeholder="usuario"
                  value={username}
                  onChange={onChangeUsername}
                />
              </label>
            </form>
            <UsuariosList {...reposListProps} />
          </section>
        </div>
      </article>
    );
  }
}

UsuarioPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};
