import React, { Component } from 'react'

export default class Total extends Component {
    render() {

        let total = 0

        return (
             <div>
                <h1>Total</h1>
                {
                   food.reduce((singleItem) => {
                        return (<div>
    {singleItem.title} {singleItem.price} x {singleItem.quantity} = {singleItem.price * singleItem.quantity}
                            
                        </div>)
                    })
                }

                <div>Final Total is: {total}</div>
            </div>
        )
    }
}
