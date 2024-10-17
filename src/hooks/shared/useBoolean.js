import { useCallback, useState } from 'react'

/**
 * A custom React hook for managing boolean state with additional utility functions.
 *
 * @param defaultValue - The initial boolean value (default is false).
 * @returns An object containing the current boolean value and functions to manipulate it.
 *
 * @throws {Error} If the defaultValue is not a boolean.
 *
 * @example
 * const [value, setTrue, setFalse, setToggle] = useBoolean();
 *
 * @property {boolean} value - The current boolean state.
 * @property {() => void} setTrue - Function to set the value to true.
 * @property {() => void} setFalse - Function to set the value to false.
 * @property {() => void} setToggle - Function to toggle the boolean value.
 */

export function useBoolean(defaultValue = false) {
  if (typeof defaultValue !== 'boolean') {
    throw new Error('defaultValue must be `true` or `false`')
  }

  const [value, setValue] = useState(defaultValue)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const setToggle = useCallback(() => {
    setValue((x) => !x)
  }, [])

  return [value, setTrue, setFalse, setToggle]
}
