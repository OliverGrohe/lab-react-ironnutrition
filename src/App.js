import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood'

function App() {
  return (
    <div>
      <FoodBox />
      <AddNewFood />
    </div>
  );
}

export default App;
