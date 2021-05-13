import React from 'react';
import { render } from '@testing-library/react';
import Shoply from './Shoply';

test("renders without crashing", function() {
  render(<Shoply />);
});