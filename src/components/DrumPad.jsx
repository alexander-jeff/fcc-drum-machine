const DrumPad = ({ drum }) => {
  const { id, letter } = drum
  return (
    <div
      data-testid={id}
      id={id}
      title={id.toString()}
      className='drum-pad'
    >
      {letter}
    </div>
  )
}
export default DrumPad
