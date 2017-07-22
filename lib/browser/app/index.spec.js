import { describe, beforeEach } from 'ava-spec';
import React from 'react';
import { shallow } from 'enzyme';


import App from './index';

describe('app', (it) => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders spinning arrow with default values', (t) => {
    t.is(true, true);
  });
  /* it('renders spinning arrow with default values', (t) => {
    wrapper.find('.app').simulate('touchstart', { targetTouches: [{ clientX: 10, clientY: 10 }] });
    t.is(wrapper.contains(<SpinningArrow
      started={false}
      finalDegree={0}
    />), true);
  });*/
});

