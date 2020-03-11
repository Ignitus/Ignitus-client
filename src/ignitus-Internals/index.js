/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { errorInfo, error } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return (
        <div className="container">
          <h2
           style={{ textAlign: 'center', marginTop: '4em', color: '#000066' }}>
            Unable to load the contributors!
          </h2>
          <h5 style={{ textAlign: 'center', marginTop: '20px' }}>
            This can happen if you are not connected to internet or if and underlying
            <br />
            system or component is not available
          </h5>
          <details style={{ whiteSpace: 'pre-wrap', fontSize: '15px', marginBottom: '4em', marginRight: '530px', marginLeft: '220px'}}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export const withErrorBoundary = WrappedComponent => props => (
  <ErrorBoundary>
    <WrappedComponent {...props} />
  </ErrorBoundary>
);
