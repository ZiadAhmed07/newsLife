"use client"

import { useState, useEffect } from 'react';

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className={" font-bold"}>{time.toLocaleTimeString('ar',{minute:'2-digit',hour:"2-digit"})}</p>
    </div>
  );
}
