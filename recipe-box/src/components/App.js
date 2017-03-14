import React, { Component } from 'react';

import RecipeList from './RecipeList';
import RecipeView from './RecipeView';
import CreateRecipe from './CreateRecipe';

const defaultRecipes = [
  {
    title: 'Breakfast burrito',
    ingredients: 'tortilla,eggs,sausage,potato,cheese',
    id: 'bburrito',
  }, {
    title: 'Pot roast',
    ingredients: 'chuck roast,onions,carrots,potatoes,beef broth,salt,pepper',
    id: 'potroast',
  }, {
    title: 'Toast',
    ingredients: 'bread,heat,butter,jam',
    id: 'toast',
  }
];
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: [],
      current: null,
      editing: false,
    };
  }

  componentDidMount() {
    let recipes = localStorage.getItem('mb_recipes');
    if (recipes) {
      recipes = JSON.parse(recipes);
      this.setState({ recipeList: recipes });
    }
    if (!recipes || recipes.length === 0) {
      this.setState({ recipeList: defaultRecipes });
    }
  }

  newRecipe(title, ingredients) {
    const recipe = {
      title,
      ingredients,
      id: '' + Date.now() + title,
    };
    this.setState(prevState => ({
      recipeList: [ ...prevState.recipes, recipe ]
    }), () => {
      localStorage.setItem('mb_recipes', JSON.stringify(this.state.recipes));
    });
  }

  viewRecipe(id) {
    const recipe = this.state.recipeList.filter(r => r.id === id)[0];
    if (recipe) {
      this.setState({
        current: recipe,
      })
    }
  }

  render() {
    return (
      <div>
        <h1>react app thing</h1>
        <div className="container">
          <div className="row">
            <RecipeList
              recipes={this.state.recipeList}
              onClick={(id) => this.viewRecipe(id)}
            />
            <RecipeView recipe={this.state.current}/>
          </div>
        </div>
        {this.state.editing && 
        <CreateRecipe onSubmit={(t, i) => this.newRecipe(t, i)}/>}
      </div>
    )
  }
} 

export default App;
