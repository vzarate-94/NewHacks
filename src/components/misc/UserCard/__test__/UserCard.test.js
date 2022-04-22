import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from '../UserCard';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'


afterEach(cleanup)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserCard></UserCard>, div)
})

it('renders UserCard correctly', () => {
  const { getByTestId } = render(<UserCard user="Checo"/>);
  expect(getByTestId('component-test-1')).toHaveTextContent( `Posted By:`);
})