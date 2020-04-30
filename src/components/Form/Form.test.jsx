import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.jsx';

describe('Form Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Form 
      onSubmit={() => {}}
      url='https://github.com/janellemellor'
      onUrlChange={() => {}}
      method='get'
      onInputChange={() => {}}
      response='response'
      onResponseChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });    
});
