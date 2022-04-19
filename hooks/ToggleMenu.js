import React,{useState, useCallback} from 'react'

const ToggleMenu = (initialState= false) => {
  const [state, setState] = useState(initialState)

  const toggle = useCallback(()=> setState((state) => !state), [])

  return [state, toggle, setState]
}

export default ToggleMenu