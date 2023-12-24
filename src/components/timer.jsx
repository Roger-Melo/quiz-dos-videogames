import { useState, useEffect } from 'react'

const secondsPerQuestion = 30

const Timer = ({ state, onHandleTimer }) => {
  const [seconds, setSeconds] = useState(secondsPerQuestion * state.apiData.length)

  useEffect(() => {
    let id

    const run = () => {
      if (seconds === 0) {
        onHandleTimer({ message: 'game_over' })
        return
      }

      id = setTimeout(() => setSeconds(prev => prev - 1), 1000)
    }

    run()
    return () => clearTimeout(id)
  }, [seconds, onHandleTimer])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  return <div className="timer">{mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}</div>
}

export { Timer }