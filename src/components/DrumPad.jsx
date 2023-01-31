import { useEffect } from 'react'
import './DrumPads.css'

const DrumPad = ({ drum, handleClick }) => {
  const { id, letter, src } = drum
  useEffect(() => {
    const onKeyPress = ({ key }) => {
      key.toUpperCase() === letter && handleClick(letter)
    }

    // on mount
    document.addEventListener('keydown', onKeyPress)

    // on unmount
    return () => document.removeEventListener('keydown', onKeyPress)
  }, [handleClick, letter])
  return (
    <div
      className='drum-pad'
      data-testid={id}
      onClick={() => handleClick(letter)}
      id={id}
      title={id.toString()}
    >
      <audio
        className='clip'
        id={letter}
        src={src}
        data-testid={`audio-${letter}`}
      ></audio>
      {letter}
    </div>
  )
}
export default DrumPad
