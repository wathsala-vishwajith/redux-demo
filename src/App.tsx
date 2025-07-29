import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { appendData, setData2, setData, setError, setLoading, toggleData } from './dataSlice';
import type { RootState } from './store.tsx';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data);
  useEffect(() => {
    dispatch(setData(true));
  }, []);

  return (
    <>
      <button onClick={() => dispatch(setData(true))}>Set Data</button>
      <button onClick={() => dispatch(setData2(true))}>Set Data 2</button>
      <button onClick={() => dispatch(toggleData())}>Toggle Data</button>
      <button onClick={() => dispatch(appendData("test"))}>Append Data</button>
      <button onClick={() => dispatch(setLoading(true))}>Set Loading</button>
      <button onClick={() => dispatch(setError("test"))}>Set Error</button>

      <div>
        <h1>Data</h1>
        <p>{data.data.toString()}</p>
        <p>{data.data2.toString()}</p>
        <p>{data.appendData.toString()}</p>
        <p>{data.loading.toString()}</p>
        <p>{data.error}</p>
      </div>
    </>
  )
}

export default App
