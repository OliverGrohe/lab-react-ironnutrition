import React, { Component } from 'react'
import foodsJSON from '../foods.json';
import FoodDetails from './FoodDetails'
import AddNewFood from './AddNewFood'
import Search from './Search'

export default class FoodBox extends Component {

    state = {
        foods: foodsJSON,
        showForm: false,
        filteredFood: [],
    }


    handleAddForm = (event) => {
        event.preventDefault()
        let name = event.target.name.value
        let calories = event.target.calories.value
        // let image = event.target.image.value
        let newFood = {
            name: name,
            calories: calories,
            // image: image,
        }

    this.setState({
        showForm: false,
             foods: [...this.state.foods, newFood],
             filteredFood: [...this.state.filteredFood, newFood]
         })
    }

    handleShowForm = () => {
        this.setState({ showForm: true })
    }

    handleChange = (event) => {
        let searchText = event.target.value.toLowerCase()
        let filteredList = this.state.foods.filter((singleFood) => {
            return singleFood.name.toLowerCase().includes(searchText)
        })
        // Always update your state once you filter

        this.setState({
            filteredFood: filteredList
        })
    }

    render() {

        const {foods, showForm, filteredFood} = this.state

        return (
            <div className="box">
            {
                filteredFood.map((singleFood, index) => {
                    return <FoodDetails key={index} name={singleFood.name} calories={singleFood.calories} image={singleFood.image} quantity={singleFood.quantity}/>
                })
            }
            {
                showForm ? <AddNewFood onAdd={this.handleAddForm}/> : <button onClick={this.handleShowForm}>Show</button>
            }
            <Search myChange={this.handleChange}/>
            </div>
        )
    }
}
