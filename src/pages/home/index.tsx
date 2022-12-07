import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { shallowEqual, useDispatch, useSelector } from '@/store';
import { changeCountAction, changeMessageAction } from '@/store/feautures/counter';
import About from '../about';

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  const { count, message } = useSelector(
    (state) => ({ count: state.counter.count, message: state.counter.message }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const handelMessage = () => {
    dispatch(changeMessageAction('你好啊！李银河'));
  };

  const handelCount = (count: number) => {
    dispatch(changeCountAction(count));
  };

  return (
    <div>
      <div>当前计数：{count}</div>
      <div>当前消息：{message}</div>
      <button onClick={handelMessage}>修改消息</button>
      <button onClick={() => handelCount(1)}>+1</button>
      <button onClick={() => handelCount(-1)}>-1</button>
      <button onClick={() => handelCount(10)}>+10</button>
      <button onClick={() => handelCount(-10)}>-10</button>
      <hr />
      <About name="aaaa" age={100} />
    </div>
  );
};

export default memo(Home);
