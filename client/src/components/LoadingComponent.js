import React from 'react';
import PropTypes from 'prop-types';

const LoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }

  return null;
};

LoadingComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
};

LoadingComponent.defaultProps = {
  error: null,
};

export default LoadingComponent;
