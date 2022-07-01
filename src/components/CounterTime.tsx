import React, { FC, PropsWithChildren, useEffect } from 'react'
import type { RootState } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, delCount, increment } from '../counter/counterSlice'

export const CounterTime: FC<PropsWithChildren<{countNum:string}>> = ({countNum}) => {
  const count:number = useSelector((state: RootState) => state.counter.values[countNum])
  const dispatch = useDispatch();

  useEffect(()=>{
    let timerId: ReturnType<typeof setTimeout> = setTimeout(function tick() {
      if (countNum && count !== undefined){
        dispatch(increment(countNum)) }
    }, 1000);
  return() => {
    clearTimeout(timerId);
  }
  }, [count]);

  function delecteCount(){
    dispatch(delCount(countNum))
  }
  return (
    <div className='counter'>
      <div className='counter__main'>
        <span>{count}</span>
      </div>
      <button className='counter__btn del'
          onClick={() => delecteCount()}
        >
        Удалить
        </button>
    </div>
  )
}