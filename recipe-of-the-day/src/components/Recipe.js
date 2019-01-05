import React, {Component} from 'react';

class Recipe extends Component {

    render() {
        const recipe = this.props.recipe;
        return (
            <div className="recipe">
            <ul>
                <li>Name: {recipe.name}</li>
                <li>Servings: {recipe.servings}</li>
                <li>Category: {recipe.category}</li>
            </ul>
            </div>
        )
    }
}

export default Recipe;