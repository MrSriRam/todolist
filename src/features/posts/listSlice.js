import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
const initialState = [
  {
    id: 1,
    isChecked: false,
    text: "comoplete this porject",
    date: sub(new Date(), { minutes: 10 }).toLocaleTimeString('en-IN', { hour12: true, hour: '2-digit', minute: '2-digit' }),
  },
  {
    id: 2,
    isChecked: false,
    text: "Learn react-redux",
    date: sub(new Date(), { minutes: 5 }).toLocaleTimeString('en-IN', { hour12: true, hour: '2-digit', minute: '2-digit' }),
  },
]

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        state.push(action.payload)
      }, prepare(text) {
        return {
          payload: { isChecked: false, text, id: nanoid(), date: new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' }) }
        }
      }
    },
    removeItem(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    isItemChecked: {
      reducer(state, action) {
        state.forEach(item => { if (item.id === action.payload.id) { item.isChecked = action.payload.checked } })
      },
      prepare(id, isChecked) {
        return {
          payload: {
            id,
            checked: !isChecked
          }
        }
      }
    },
    clearList(state) {
      state.length = 0
    }
  }
})
export const selectAllItems = state => state.list

export const { addItem, removeItem, isItemChecked, clearList } = listSlice.actions

export default listSlice.reducer