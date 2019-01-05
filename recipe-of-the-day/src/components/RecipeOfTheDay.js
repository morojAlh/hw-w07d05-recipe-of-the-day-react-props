import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';

class RecipeOfTheDay extends Component {

    renderIngredients(){
        const ingredients = recipeOfTheDay.ingredients.map((el,index) => {
            return (
                <Ingredient eachIngredient={el} key={index}/>
            )
        })
        return ingredients;
    }

    render() {
        return(
            <div className="recipeOfTheDay">
            <div className="recipeOfTheDayHeader">
                <h2>Recip of the Day</h2>
                <h2>{recipeOfTheDay.name}</h2>
            </div>
            <div className="restContent">
                <h2>Description: </h2>
                <p>{recipeOfTheDay.description}</p>
                <h2>Ingredients: </h2>
                {this.renderIngredients()}
            </div>
            </div>
        )
    }
}

export default RecipeOfTheDay;