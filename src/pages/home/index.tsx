import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { shallowEqual, useDispatch, useSelector } from '@/store';
import { changeMessageAction } from '@/store/feautures/counter';

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

  return (
    <div>
      <div>当前计数：{count}</div>
      <div>当前消息：{message}</div>
      <button onClick={handelMessage}>修改消息</button>
    </div>
  );
};

export default memo(Home);
