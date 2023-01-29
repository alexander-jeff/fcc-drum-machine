import './App.css'
import Display from './components/Display'
import DrumPads from './components/DrumPads'

function App() {
  return (
  <div id='drum-machine' data-testid='drum-machine'>
    <Display></Display>
    <DrumPads></DrumPads>
  </div>)
}

export default App

