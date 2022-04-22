import React from 'react';
import ReactDOM from 'react-dom';
import PostDetails from '../PostDetails';
import UserCard from '../../../components/misc/UserCard/UserCard';
import PostDetailsHeader from '../PostDetailsHeader';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('UserCard Component render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserCard></UserCard>, div);
});

it('PostDetailsHeader renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostDetailsHeader />, div);
});

it('matches Snapshot', () => { 
  const tree = renderer.create(<PostDetailsHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});