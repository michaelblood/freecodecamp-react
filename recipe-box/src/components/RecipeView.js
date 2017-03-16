import React, { PropTypes } from 'react';

const RecipeView = ({ recipe }) => {
  if (!recipe) {
    return (
      <div className="no-recipe col-md-6 col-sm-12">
        <h1>select a recipe</h1>
      </div>
    )
  }
  const { title, ingredients, id } = recipe;
  return (
    <div className="col-md-6 col-sm-12">
      <h2 className="text-center">{title}</h2>
      <hr/>
      <div className="card recipe-view">
        <div className="card-block">
          <ul className="list-group">
            {ingredients.split(',').map(ing => (
              <li key={id + ing} className="list-group-item my-1">{ing}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

RecipeView.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeView;
