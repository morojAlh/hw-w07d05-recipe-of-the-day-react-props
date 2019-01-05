import React, {Component} from 'react';
import recipes from '../data/recipes';

class Recipe extends Component {

    renderRecipes(){
        const result = recipes.map((el, index) => {
            return (
                <div key={index} className="recipe">
                    <p>Name: {el.name}</p>
                    <p>Servings: {el.servings}</p>
                    <p>Category: {el.category}</p>
                </div>
            )
        })
        return result;
    }

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