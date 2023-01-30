import DrumPad from './DrumPad'

const DrumPads = ({ drumConfig }) => {
  const playSample = (src) => {
    const audio = new Audio(src)
    audio.play()
  }

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
