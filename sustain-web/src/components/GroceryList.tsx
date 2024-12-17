import React, { useState } from 'react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

interface GroceryItem {
  id: number;
  name: string;
  quantity: number;
}

const GroceryList: React.FC = () => {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState(1);

  const addItem = () => {
    const newItem: GroceryItem = {
      id: Date.now(),
      name: newItemName,
      quantity: newItemQuantity,
    };
    setItems([...items, newItem]);
    setNewItemName('');
    setNewItemQuantity(1);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Grocery List</h1>
      <Input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="Item name"
        className="border p-2 mb-2 w-full"
      />
      <Input
        type="number"
        value={newItemQuantity}
        onChange={(e) => setNewItemQuantity(Number(e.target.value))}
        min="1"
        className="border p-2 mb-2 w-full"
      />
      <Button onClick={addItem} className="bg-blue-500 text-white p-2 rounded">
        Add Item
      </Button>
      <ul className="list-disc pl-5 mt-4">
        {items.map(item => (
          <li key={item.id} className="mb-2">
            {item.name} - {item.quantity}
            <Button onClick={() => removeItem(item.id)} className="ml-2 text-red-500">
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
