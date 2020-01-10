import { useEffect, useState } from 'react'
import { Dimensions, ScaledSize } from 'react-native'

const window = Dimensions.get('window')
const screen = Dimensions.get('screen')

const initialState = { window, screen };

export default function useDimensions() {
  const [dimensions, setDimensions] = useState(initialState)

  const onChange = ({
    window,
    screen,
  }: {
    window: ScaledSize
    screen: ScaledSize
  }) => {
    setDimensions({ window, screen })
  }

  useEffect(() => {
    Dimensions.addEventListener('change', onChange)

    return () => Dimensions.removeEventListener('change', onChange)
  }, [])

  return dimensions
}
