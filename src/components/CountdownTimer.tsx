import React, { useState, useEffect } from 'react'

const CountdownTimer: React.FC = () => {
  
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0)



  useEffect(()=>{
    let timer: NodeJS.Timeout;
     if (isRunning && remainingTime>0){
      timer = setInterval (()=>{
        setRemainingTime((prev)=> prev-1)
      },1000)
     }
     else if (remainingTime === 0){
      setIsRunning(false)
     }
     return()=> clearInterval(timer);
  }, [isRunning, remainingTime])

  const handleStart = () => {
    if (time>0) {
      setRemainingTime(time)
      setIsRunning(true)
    }
  }
  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setRemainingTime(0)
    setTime(0)
  }


  return(
    <div className=' flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-black to-orange-400'>

    <h1 className='text-4xl font-extrabold uppercase mb-6 text-amber-300 '>Countdown Timer</h1>

    <input type='number' className='border-2 border-orange-400 bg-transparent p-3 mb-6 text-orange-200 text-xl rounded'
    placeholder='Enter Time In Seconds'
    value={time>0 ? time: ""}
    onChange={(e) => setTime(Number(e.target.value))}
    />




    <div className='text-3xl font-semibold uppercase mb-6 text-amber-300'>
      {remainingTime} seconds remaining
    </div>





    <div>
      <button onClick={handleStart}
      className='text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r hover:from-orange-300 hover:to-amber-500'> 
      Start</button>

      <button onClick={handlePause}
      className='text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r hover:from-orange-300 hover:to-amber-500'> 
      Pause</button>

      <button onClick={handleReset}
      className='text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r hover:from-orange-300 hover:to-amber-500'> 
      Reset</button>


      <footer className='flex mt-10 text-amber-300 text-2xl font-semibold justify-center items-center border-2 border-orange-400'>Design by Khazra Shaikh</footer>
    </div>



    </div>
  )















}

export default CountdownTimer;