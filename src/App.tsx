
import { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Counter } from './components/Counter';
import { RootState } from './store';
import { addCount } from './counter/counterSlice';
import { CounterTime } from './components/CounterTime';

function App() {
  const [countNum, setCountNum] = useState<number>(0);
  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counter.keys);
  const [isSaveTime, setIsSaveTime] = useState<boolean>(false);
  useEffect(() => {
   

  }, [countNum])
  function addNewCount(){
  
    if(((countNum + 1) % 4 === 0) && counters.length !== 0){ 
      dispatch(addCount(`${countNum}t`));
    }else{
      dispatch(addCount(`${countNum}`));
    }
      setCountNum((countNum) => countNum + 1);
  }
  function changeOrderCounter(){
    setIsSaveTime(isSaveTime=> !isSaveTime);
  }

  return ( 
    <div className="App">
      <button className='counter__btn change__btn' onClick={changeOrderCounter}>{isSaveTime ?  'Сохранять последовательность':'Сохранять счетчик времени'  }</button>
      {isSaveTime ? 
      (counters.map((e, i) => {
        if (e.includes('t')){
          return(<CounterTime countNum={e} key={e}/>)
        }
        return <Counter countNum={e} key={e}/>}))
      :
      (counters.map((e, i) => {
        if (((i + 1) % 4 === 0) && (i !== 0)){
          return <CounterTime countNum={e} key={e}/>
        }
        return <Counter countNum={e} key={e}/>}))
        }
     <button className='counter__btn add__btn' onClick={() =>addNewCount()}>Добавить счетчик</button>
    </div>
  );
}

export default App;
