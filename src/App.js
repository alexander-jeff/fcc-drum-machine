import './App.css'
import Display from './components/Display'
import DrumPads from './components/DrumPads'
import {
  drumPadConfig,
  underConstructionText,
  FEATURES,
} from './resources/config'

function App() {
  return (
    <div
      id='drum-machine'
      data-testid='drum-machine'
      className='App'
    >
      {!FEATURES.DRUM_PADS && (
        <div>
          <h1>{underConstructionText}</h1>
          <h2>stay tuned</h2>
        </div>
      )}
      {FEATURES.DISPLAY && <Display></Display>}
      {FEATURES.DRUM_PADS && <DrumPads drumConfig={drumPadConfig}></DrumPads>}
    </div>
  )
}

export default App
