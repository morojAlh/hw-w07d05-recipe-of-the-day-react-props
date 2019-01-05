import React, {Component} from 'react';

class Ingredient extends Component {
    render() {
        const eachIngredient = this.props.eachIngredient;
        return(
            <div className="ingredients">
                 <p>{eachIngredient.ingredient} - {eachIngredient.amount}</p>
            </div>
        )
    }
}

export default Ingredient;