import { render, screen } from '@testing-library/react'
import App from './App'
import { drumPadConfig as drumConfigs, FEATURES } from './resources/config'

describe('Drum Machine', () => {
  test('renders outer container', () => {
    render(<App />)
    const outerContainer = screen.getByTestId('drum-machine')
    expect(outerContainer).toBeInTheDocument()
  })

  test('renders display container', () => {
    FEATURES.DISPLAY = true // enable display
    render(<App />)
    const displayContainer = screen.getByTestId('display')
    expect(displayContainer).toBeInTheDocument()
    FEATURES.DISPLAY = false // disable display
  })

  test('renders drum pad container', () => {
    FEATURES.DRUM_PADS = true // enable drum pads
    render(<App />)
    const drumPadContainer = screen.getByTestId('drum-pads')
    expect(drumPadContainer).toBeInTheDocument()
    FEATURES.DRUM_PADS = false // disable drum pads
  })

  test('has 9 drum pads initialized to configuration', () => {
    FEATURES.DRUM_PADS = true // enable drum pads
    render(<App />)
    const drumPads = screen.getByTestId('drum-pads').childNodes
    const expectedClassName = 'drum-pad'

    drumConfigs.forEach((config, index) => {
      const audio = drumPads[index].childNodes[0]
      expect(audio.src).toBe(config.src)
      expect(audio.id).toBe(config.letter)
      expect(screen.queryByTestId(`audio-${config.letter}`)).toBeInTheDocument
      expect(audio.className).toBe('clip')
      expect(drumPads[index].id).toBe(config.id)
      expect(drumPads[index]).toHaveTextContent(config.letter)
      expect(drumPads[index].className).toBe(expectedClassName)
    })

    expect(drumPads.length).toBe(drumConfigs.length)
    FEATURES.DRUM_PADS = false // disable drum pads
  })

  test('has toggleable features', () => {
    FEATURES.DRUM_PADS = false // disable drum pads
    FEATURES.DISPLAY = false // disable display
    render(<App />)
    const underConstructionText = screen.getByText('Coming Soon')
    const displayContainer = screen.queryByTestId('display')
    expect(underConstructionText).toBeInTheDocument()
    expect(displayContainer).not.toBeInTheDocument()
  })
})
