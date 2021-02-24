import React, { Component } from 'react'
import foodsJSON from '../foods.json';
import FoodDetails from './FoodDetails'

export default class FoodBox extends Component {

    state = {
        foods: foodsJSON,
    }


    render() {
        return (
            <div className="box">
            {
                this.state.foods.map((singleFood, index) => {
                    return <FoodDetails key={index} name={singleFood.name} calories={singleFood.calories} image={singleFood.image} quantity={singleFood.quantity}/>
                })
            }
            </div>
        )
    }
}
