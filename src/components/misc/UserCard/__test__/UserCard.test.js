import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from '../UserCard';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import renderer from 'react-test-renderer'

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserCard></UserCard>, div);
});

it('renders UserCard correctly', () => {
  const { getByTestId } = render(<UserCard user="Checo"/>);
  expect(getByTestId('component-test-1')).toHaveTextContent('Posted By:');
});

it('matches Snapshot', () => { 
  const tree = renderer.create(<UserCard user="Checo"/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches Snapshot without user', () => { 
  const tree = renderer.create(<UserCard />).toJSON();
  expect(tree).toMatchSnapshot();
});