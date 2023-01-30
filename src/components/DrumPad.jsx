import './DrumPads.css'

const DrumPad = ({ drum, handleClick }) => {
  const { id, letter, src } = drum
  return (
    <div
      className='drum-pad'
      data-testid={id}
      onClick={() => handleClick(src)}
      id={id}
      title={id.toString()}
    >
      <audio
        className='clip'
        data-testid={`audio-${letter}`}
        id={letter}
        src={src}
      ></audio>
      {letter}
    </div>
  )
}
export default DrumPad
