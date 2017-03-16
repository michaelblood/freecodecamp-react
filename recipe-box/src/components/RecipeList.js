import React, { PropTypes } from 'react';

const RecipeList = ({ recipes, onClick, onDelete, startEditing, }) => {
  return (
    <div className="col-md-6 col-sm-12 mb-3 recipe-list">
      <h2 className="text-center">Recipe list</h2>
      <hr/>
      {recipes.map(recipe => (
        <div
          key={recipe.id}
          className="card my-1 recipe-list-item"
          onClick={() => onClick(recipe.id)}
        >
          <h4 className="card-header">
            {recipe.title}
            <span
              className="float-right delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(recipe.id);
              }}
            >
              &times;
            </span>
          </h4>
        </div>
      ))}
      <div
        className="card my-1 recipe-list-item add-btn"
        onClick={() => startEditing()}
      >
        <h3 className="card-header text-center">+</h3>
      </div>
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  startEditing: PropTypes.func,
};

export default RecipeList;
