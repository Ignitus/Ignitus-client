import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


jest.mock('react-dom', () => ({
  render: () => null,
  unmountComponentAtNode: () => null,
  findDOMNode: () => ({}),
}));
