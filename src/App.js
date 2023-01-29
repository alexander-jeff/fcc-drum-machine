import './App.css'
import Display from './components/Display'
import DrumPads from './components/DrumPads'
import { drumPadConfig } from './resources/config'

function App() {
  return (
    <div
      id='drum-machine'
      data-testid='drum-machine'
    >
      <Display></Display>
      <DrumPads drumConfig={drumPadConfig}></DrumPads>
    </div>
  )
}

export default App
