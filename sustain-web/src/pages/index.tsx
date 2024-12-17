import React from 'react';
import GroceryList from '../components/GroceryList';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <GroceryList />
    </div>
  );
};

export default Home;
