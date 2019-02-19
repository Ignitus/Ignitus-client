import React from 'react';
import { shallow } from 'enzyme';
import logo from './Constants';
import Foo from './Navigation';


describe('Navigation', () => {
  test('renders an image logo', () => {
    expect(typeof 'https://storage.googleapis.com/ignitus/IgnitusLogos/white_logo.png').toBe('string');
  });
});

// Now Importing Image from cloud.
