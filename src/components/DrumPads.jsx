import { useEffect } from 'react'
import DrumPad from './DrumPad'

function playSample(audioElementId) {
  document.getElementById(audioElementId).play()
}

const DrumPads = ({ drumConfig }) => {
  useEffect(() => {
    const onKeyPress = ({ key }) => {
      const drum = drumConfig.find((drum) => drum.letter === key.toUpperCase())
      drum && playSample(drum.letter)
    }

    // on mount
    document.addEventListener('keydown', onKeyPress)

    // on unmount
    return () => document.removeEventListener('keydown', onKeyPress)
  }, [drumConfig])

  return (
    <div
      data-testid='drum-pads'
      id='drum-pads'
    >
      {drumConfig.map((drum) => (
        <DrumPad
          drum={drum}
          handleClick={playSample}
          key={drum.id}
        ></DrumPad>
      ))}
    </div>
  )
}

export default DrumPads
