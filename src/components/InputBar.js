export default function InputBar({ addItem, itemText, onClick }) {
  return (
    <div className='mt-12 flex w-96 rounded bg-white'>
      <input onChange={onClick} value={itemText} type="text" placeholder="Add post" className='w-full bordere-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none' />
      <button onClick={addItem} className='m-2 rounded bg-teal-800 px-4 py-2 text-white' >Add</button>
    </div>
  )
}