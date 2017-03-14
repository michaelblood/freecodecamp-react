import React, { PropTypes } from 'react';

const RecipeView = ({ recipe }) => {
  if (!recipe) {
    return (
      <div className="no-recipe col-md-6 col-sm-12">
        <h1>select a recipe</h1>
      </div>
    )
  }
  const { title, ingredients } = recipe;
  return (
    <div className="recipe-view col-md-6 col-sm-12">
      <div className="card">
        <h1 className="card-header">{title}</h1>
        <div className="card-block">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni omnis fugiat beatae, repellendus odit facere perferendis animi adipisci accusantium sint rerum tempora quo possimus sunt repellat, porro itaque maxime eaque.</p>
        </div>
      </div>
    </div>
  );
};

RecipeView.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeView;
