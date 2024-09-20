import React, { useContext, useState, useRef, useLayoutEffect,} from 'react';
import ItemProvider, { ItemContext } from '../customhooks/Itemprovider';
import useFilterAndSort from '../customhooks/useFilterAndSort';


const ItemManager = () => {
  const { items, dispatch } = useContext(ItemContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const searchInputRef = useRef(null);

  const filteredAndSortedItems = useFilterAndSort(items, searchTerm, sortOption);

  useLayoutEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      dispatch({
        type: 'ADD_ITEM',
        payload: { id: Date.now(), name, description }
      });
      setName('');
      setDescription('');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dynamic Item Manager</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Item
        </button>
      </form>

      <div className="mb-4 flex space-x-2">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="description">Description</option>
        </select>
      </div>

      <ul className="space-y-2">
        {filteredAndSortedItems.map(item => (
          <li key={item.id} className="flex justify-between items-center bg-gray-100 p-3 rounded">
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => (
  <ItemProvider>
    <ItemManager />
  </ItemProvider>
);

export default App;