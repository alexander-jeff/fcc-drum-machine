const DrumPad = ({ drum }) => {
  const { id, letter, src } = drum
  return (
    <div
      data-testid={id}
      id={id}
      title={id.toString()}
      className='drum-pad'
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
