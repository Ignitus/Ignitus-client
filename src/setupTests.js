/* eslint-disable import/no-extraneous-dependencies */


import 'jest-localstorage-mock';
// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
configure({ adapter: new EnzymeAdapter() });
