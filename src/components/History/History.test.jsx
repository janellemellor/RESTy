import React from 'react';
import { shallow } from 'enzyme';
import History from './History';

describe('History Component', () => {
  it('matches a snapshot', () => {
    const requestHistory = [
      {
        url: 'https://github.com/janellemellor',
        method: 'GET'
      },
      {
        url: 'https://github.com/janellemellor',
        method: 'POST'
      }
    ]; 

    const wrapper = shallow(<History history={requestHistory} />);
    expect(wrapper).toMatchSnapshot();
  });  
});

