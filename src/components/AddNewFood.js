import React, { Component } from 'react'

 export default class AddNewFood extends Component {

    state = {
        showForm: false,
      }


    handleShowForm = () => {
        this.setState({ showForm: true })
    }

    render() {

        const {onAdd} = this.props

        return (
            <div>
                <form onSubmit={onAdd}>
                    <input name="name" type="text" placeholder="Enter Name" />
                    <input name="calories" type="number" />
                    <input name="image" type="image" />
                    <button type="submit">Add New Food</button>
                </form>
               
                
            </div>
        )
    }
}
