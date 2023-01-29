import { render, screen } from '@testing-library/react'
import App from './App'
import { drumPadConfig as drumConfigs } from './resources/config'

describe('Drum Machine', () => {
  test('renders outer container', () => {
    render(<App />)
    const outerContainer = screen.getByTestId('drum-machine')
    expect(outerContainer).toBeInTheDocument()
  })

  test('renders display container', () => {
    render(<App />)
    const displayContainer = screen.getByTestId('display')
    expect(displayContainer).toBeInTheDocument()
  })

  test('renders drum pad container', () => {
    render(<App />)
    const drumPadContainer = screen.getByTestId('drum-pads')
    expect(drumPadContainer).toBeInTheDocument()
  })

  test('has 9 drum pads initialized to configuration', () => {
    render(<App />)
    const drumPads = screen.getByTestId('drum-pads').childNodes
    const expectedClassName = 'drum-pad'

    drumConfigs.forEach((config, index) => {
      expect(drumPads[index].id).toBe(config.id)
      expect(drumPads[index]).toHaveTextContent(config.letter)
      expect(drumPads[index].className).toBe(expectedClassName)
    })

    expect(drumPads.length).toBe(drumConfigs.length)
  })
})
