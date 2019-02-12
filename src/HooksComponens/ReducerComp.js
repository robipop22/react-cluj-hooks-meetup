import { useReducer } from '../customHooks'

export default function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, [])

  function handleAddClick(text) {
    dispatch({ type: 'add', text })
  }

  // ...
}
