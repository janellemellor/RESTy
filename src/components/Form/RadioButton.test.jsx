import React from 'react';
import { shallow } from 'enzyme';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<RadioButton name="methods" value="POST" onChange={() =>{}} />);
    expect(wrapper).toMatchSnapshot();
  });    
});
