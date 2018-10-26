import React, { Component } from "react";
import PropTypes from "prop-types";

export const ErrorBoundary = class extends Component {
  state = {
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    const { error, errorInfo } = this.state;

    if (error) {
      console.error(`Error loading component, ${error}, ${errorInfo}`);

      return <div>Some error has occurred!</div>;
    }

    return this.props.children;
  }
};

ErrorBoundary.propTypes = {
  children: PropTypes.object.isRequired
};

export const withErrorBoundary = WrappedComponent => props => (
  <ErrorBoundary>
    <WrappedComponent {...props} />
  </ErrorBoundary>
);
