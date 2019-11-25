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
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
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
