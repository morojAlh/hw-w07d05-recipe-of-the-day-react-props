import React, {Component} from 'react';
import Recipe from './Recipe';
import recipes from '../data/recipes';

class Recipes extends Component {

    renderRecipes(){
        const allrecipes = recipes.map((el, index) => {
            return (
                 <Recipe recipe={el} key={index}/>
            )
        })
        return allrecipes;
    }

    render() {
        return (
            <div className="recipes">
            <div className="recipesHeader">
                <h1>Recipes</h1>
            </div>
                {/* <Recipe/> */}
                {this.renderRecipes()}
            </div>
        )
    }
}

export default Recipes;