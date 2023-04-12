'use client';

import {useState} from "react";

function Counter() {
  console.log('클라이언트 **')
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>숫자증가</button>
    </>
  );
}

export default Counter;
