import React, { FC, PropsWithChildren } from 'react'
import type { RootState } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, delCount, increment } from '../counter/counterSlice'

export const Counter: FC<PropsWithChildren<{countNum:string}>> = ({countNum}) => {
  const count = useSelector((state: RootState) => state.counter.values[countNum])
  const dispatch = useDispatch()

  return (
    <div className='counter'>
      <div className='counter__main'>
      <button className='counter__btn switch'
          onClick={() => dispatch(decrement(countNum))}
        >
         -
        </button>
        <span>{count}</span>
        <button className='counter__btn switch' 
          onClick={() => dispatch(increment(countNum))}
        >
          +
        </button>  
      </div>
      <button className='counter__btn del'
          onClick={() => dispatch(delCount(countNum))}
        >
          Удалить
        </button>
    </div>
  )
}