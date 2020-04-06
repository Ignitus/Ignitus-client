import React, {ReactNode, ErrorInfo} from 'react';

import {Props, State} from './types';

export class ErrorBoundary extends React.Component<Props, State> {
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
            style={{ textAlign: 'center', marginTop: '4em', color: '#000066' }}
          >
            Unable to render the component!
          </h2>
          <h5 style={{ textAlign: 'center', marginTop: '20px' }}>
            This can happen if you are not connected to internet or if an underlying
            <br />
            system or component is not rendered due to some bug.
          </h5>
          <details style={{
            whiteSpace: 'pre-wrap', fontSize: '15px', marginBottom: '4em', marginRight: '530px', marginLeft: '220px',
          }}
          >
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

export const withErrorBoundary = WrappedComponent => props => (
  <ErrorBoundary>
    <WrappedComponent {...props} />
  </ErrorBoundary>
);
