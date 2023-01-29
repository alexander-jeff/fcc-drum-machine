import DrumPad from './DrumPad'

const DrumPads = ({ drumConfig }) => {
  return (
    <div
      data-testid='drum-pads'
      id='drum-pads'
    >
      {drumConfig.map((drum) => (
        <DrumPad
          drum={drum}
          key={drum.id}
        ></DrumPad>
      ))}
    </div>
  )
}

export default DrumPads
