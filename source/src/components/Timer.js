import React from 'react'
import {useState, useEffect } from 'react';


function Timer ()  {
   const [seconds, setSeconds] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [hours, setHours] = useState(0);
   const [run, setRun] = useState(false);

   let timer;

   useEffect(() => {
      if (run === true) {
	  timer = setInterval(() => {
	  setSeconds(seconds+1)
      if(seconds === 59) {
          setMinutes(minutes+1);
	  setSeconds(0);
      }
      if(minutes === 59) {
	  setHours(hours + 1);
	  setMinutes(0);
      }
	  }, 1000)
      return () => clearInterval(timer);
      }
   });

   function start () {
      setRun(true);
      if(stop) {
         setSeconds(seconds + 1)
      }
   };

   function stop ()  {
      clearInterval(timer)
   };

   function reset () {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setRun(false);
   };

   return (
      <div className='wrapper'>
         <div className='container'>
            <div className='timer'>
               <h1>Timer</h1>
               <h2>{hours < 10 ? '0' + hours : hours} : {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}</h2>
            <div className='timer-buttons'>
	            <button className='btn' onClick={start}>Start</button>
               <button  className='btn' onClick={stop}>Stop</button>
               <button className='btn' onClick={reset}>Reset</button>
            </div>
            </div>
         </div>
      </div>
   )
};

export default Timer;
