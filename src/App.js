import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood'
import foods from './foods.json'


function App() {


  // handleAddItem = (foods, quantity, calories) => {
  //   let myFood = {
  //     foods: foods.title,
  //     quantity: foods.quantity,
  //     calories: foods.calories,
  //   }
  //   this.setState({
  //     totalFoods: [...this.state.totalFoods, myFood]
  //   })
  // }
  
  return (
    <div class="columns">
      <div class="column">
        <FoodBox />
      </div>
      <div class="column">
        Today's foods
      </div>
    </div>
  );
}

export default App;
