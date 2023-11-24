import { useState } from "react"
import { useDispatch } from "react-redux"
import InputBar from "./InputBar"
import ListItem from '../features/posts/ListItem'
import { addItem } from "../features/posts/listSlice"

function AddItemsToList() {
  const [itemText, setItemText] = useState('')
  const dispatch = useDispatch()
  function handleListItem(e) {
    setItemText(e.target.value)
  }
  function handleAddItem() {
    if (!itemText) return
    dispatch(addItem(itemText))
    setItemText('')
  }
  return (
    <div>
      <InputBar onClick={handleListItem} addItem={handleAddItem} itemText={itemText} />
      <ListItem />
    </div>
  )
}

export default AddItemsToList