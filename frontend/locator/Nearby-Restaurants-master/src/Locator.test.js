import React from 'react';
import ReactDOM from 'react-dom';
import LocatorMain  from './Locator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Locator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
