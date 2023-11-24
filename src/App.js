import AddItemsToList from './components/AddItemsToList'
import ClearList from './components/ClearList';
function App() {
  return (
    <div className='flex h-screen w-screen  items-top justify-center bg-gray-900'>
      <AddItemsToList />
      <ClearList />
    </div>
  );
}

export default App;