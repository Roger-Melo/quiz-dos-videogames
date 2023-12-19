const Timer = ({ state }) => {
  const mins = Math.floor(state.seconds / 60)
  const secs = state.seconds % 60
  return <div className="timer">{mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}</div>
}

export { Timer }