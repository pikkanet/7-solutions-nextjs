'use client'
import React, { useState, useRef, useEffect } from 'react';

function PreviousStateExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    console.log("count", count);
    prevCountRef.current = count;
    console.log("prevCountRef.current", prevCountRef.current);
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>ค่าปัจจุบัน: {count}</h1>
      <h2>ค่าก่อนหน้า: {prevCount}</h2>
      <button onClick={() => setCount(count + 1)}>เพิ่มค่า</button>
    </div>
  );
}

export default PreviousStateExample;
