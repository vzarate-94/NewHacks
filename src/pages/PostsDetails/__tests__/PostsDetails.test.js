import React from 'react';
// import ReactDOM from 'react-dom';
import PostDetails from '../PostDetails';
import "jest-canvas-mock";

// import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

it('Matches Snapshot', () => {
  const tree = renderer.create(<PostDetails />).toJSON();
  expect(tree).toMatchSnapshot();
})