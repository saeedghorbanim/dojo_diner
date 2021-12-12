import React, { Component } from 'react';

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            numMeals: this.props.numMealsServed
        };
    }

    render() {
        const doSomething = ()=> {

            // console.log(`you clicked on ${this.props.nameOfDish}!`);
            this.setState({numMeals: this.state.numMeals+1})
            
        }
        return (
        <>
            <div className="menuItem">
                <h3>Dish Name: {this.props.nameOfDish}</h3>
                <p>Price: {this.props.price}</p>
                <p>Description: {this.props.children}</p>
                <p> Number of Orders: {this.state.numMeals} </p>
                <p><button onClick = {doSomething}>Order here!</button></p>
            </div>
        </>
        )
    }
}

export default Menu;