import {create} from 'react-test-renderer';
import axios from 'axios'
import User from '@/components/user';
import {render} from '@testing-library/react';
import {sum} from '@/utils'
import {get, post} from '@/utils/request'
import React from 'react';

it('adds 1 + 2 to equal 3', () => {
  expect.assertions(1);
  expect(3).toBe(3);
});

it('快照测试 react 组件', ()=> {
  const component = create(<User name="user" class='a' />)
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

it('节点测试', ()=> {
  const { queryByText } = render(<User name="user" class='a' />);
  expect(queryByText(/user/i)).toBeTruthy();
})

it('mock 函数', ()=> {
  const mockSum = jest.fn(sum)
  expect(mockSum(1, 2)).toBe(3);
  expect(mockSum.call.length).toBe(1)
})

jest.mock('@/utils/request')
it('mock 模块', ()=> {
  return get('', {}).then((data)=>{
    expect(data).toEqual(1)
  })
})