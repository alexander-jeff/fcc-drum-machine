import DrumPad from './DrumPad'

const DrumPads = ({ drumConfig }) => {
  const playSample = (audioElementId) => {
    document.getElementById(audioElementId).play()
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
