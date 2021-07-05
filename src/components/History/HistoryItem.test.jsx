import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';

describe('History Item Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<HistoryItem url='https://github.com/janellemellor' method='GET' />);
    expect(wrapper).toMatchSnapshot();
  });  
});

