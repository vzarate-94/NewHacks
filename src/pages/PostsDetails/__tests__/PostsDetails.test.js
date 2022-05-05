import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from '../../../components/misc/UserCard/UserCard';
import PostDetailsHeader from '../PostDetailsHeader';


import {  cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);


it('UserCard Component render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserCard></UserCard>, div);
});
// Import that the UserCard component renders correctly.

it('PostDetailsHeader renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostDetailsHeader />, div);
});

it('matches Snapshot', () => { 
  const tree = renderer.create(<PostDetailsHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});



