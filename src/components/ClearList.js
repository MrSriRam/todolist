import { useDispatch } from 'react-redux'
import { clearList } from '../features/posts/listSlice'

export default function ClearList() {
  const dispatch = useDispatch()
  function handleDeleteAll() {
    dispatch(clearList())
  }
  return (
    <div>
      <button onClick={handleDeleteAll} className='m-2 rounded bg-teal-800 px-4 py-2 text-white' >Add</button>
    </div>
  )
}