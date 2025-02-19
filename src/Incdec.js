import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './Redux/action';

function Incdec() {
    const dispatch = useDispatch();
    const addResult = useSelector((state) =>state.add.result);
    const subResult = useSelector((state)=>state.sub.result);

  return (
    <div>
        <div>
            <h1>
                add result:{addResult}
                sub result :{subResult}
            </h1>
            <button onClick={()=>dispatch(add(1))}>add1</button>
            <button onClick={()=>dispatch(sub(1))}>sub1</button>
        </div>

    </div>
  )
}

export default Incdec