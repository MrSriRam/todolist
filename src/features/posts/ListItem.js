import { useDispatch, useSelector } from "react-redux"
import { isItemChecked, removeItem, selectAllItems } from "./listSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ListItem() {
  const dispatch = useDispatch()
  const items = useSelector(selectAllItems)
  const orderedItems = items.slice().sort((a, b) => b.date.localeCompare(a.date))
  function handleIsChecked(id, isChecked) {
    dispatch(isItemChecked(id, isChecked))
  }
  function handleDeleteItem(id) {
    dispatch(removeItem(id))
  }
  const renderedList = orderedItems.map(item => (
    <div key={item.id} className="flex items-center p-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">
      <input type="checkbox" onChange={() => handleIsChecked(item.id, item.isChecked)} className="hover:cursor-pointer w-5 h-5" checked={item.isChecked} />
      <div>
        <p className={`text-slate-500 ${item.isChecked ? 'line-through' : ''}`}>{item.text} </p>
      </div>
      <div className="flex-grow" />
      <span className="text-gray-400 text-xs">{item.date}</span>
      <FontAwesomeIcon className='hover:cursor-pointer ml-4' onClick={() => handleDeleteItem(item.id)} icon={faTrash} />
    </div>
  ))

  return (
    <div>
      {renderedList}
    </div>
  )
}