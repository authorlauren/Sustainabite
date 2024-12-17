import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function GroceryList() {
  const [items, setItems] = useState(["Apples", "Bread", "Milk", "Cheese"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Grocery List</h1>
      <Card className="p-4">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              {item}
              <Button variant="destructive" size="sm" onClick={() => removeItem(index)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex mt-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="border p-2 flex-grow mr-2"
            placeholder="Add new item"
          />
          <Button variant="default" size="lg" onClick={addItem}>
            Add
          </Button>
        </div>
      </Card>
    </div>
  );
}
