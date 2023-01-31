import './DrumPads.css'

const DrumPad = ({ drum, handleClick }) => {
  const { id, letter, src } = drum
  return (
    <div
      className='drum-pad'
      data-testid={id}
      id={id}
      onClick={() => handleClick(letter)}
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
