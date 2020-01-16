import React from 'react';
import LoginContainer from './Login.Container';

describe('login Comp', () => {
  test('verify name', () => {
    const wrapper = shallow(<LoginContainer />);
    const name = 'Gaurav';
    // console.log('props',wrapper.props());
    // console.log('children',wrapper.props().children[0].props);
    // expect(wrapper.props().children).toBe(name);
    expect(wrapper.props().children).toHaveLength(2);
  });
});
