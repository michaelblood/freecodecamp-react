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
      localStorage.setItem('mb_recipes', JSON.stringify(defaultRecipes));
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
      recipeList: prevState.recipeList.concat([ recipe ]),
      editing: false,
    }), () => {
      localStorage.setItem('mb_recipes', JSON.stringify(this.state.recipeList));
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

  deleteRecipe(id) {
    const recipeList = this.state.recipeList.slice();
    for (let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].id === id) {
        const newArr = recipeList.slice(0, i).concat(recipeList.slice(i+1));
        this.setState({
          recipeList: newArr,
        }, () => {
          localStorage.setItem("mb_recipes", JSON.stringify(this.state.recipeList));
        });
        return;
      }
    }
  }

  render() {
    return (
      <div>
        <div className="page-heading">
          <h1 className="py-3 mb-3 text-center">Recipe box</h1>
        </div>
        <div className="container">
          <div className="row">
            <RecipeList
              recipes={this.state.recipeList}
              onClick={(id) => this.viewRecipe(id)}
              onDelete={(id) => this.deleteRecipe(id)}
              startEditing={() => this.setState({editing: true})}
            />
            <RecipeView recipe={this.state.current}/>
          </div>
        </div>
        {this.state.editing && 
        <CreateRecipe 
          onSubmit={(t, i) => this.newRecipe(t, i)}
          onExit={() => this.setState({editing: false})}
        />}
      </div>
    )
  }
} 

export default App;
