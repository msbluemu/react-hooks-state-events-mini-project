import React, {useState} from "react";

function CategoryFilter({categories, selectedCategory, handleCategory}) {

    return (
      <div className="categories">
        <h5>Category filters</h5>
        {categories.map((category)=> (
          <button 
            key={category} 
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => handleCategory(category)}
            >
              {category}
           </button>
        ))}
      </div>
    );
  }
  
  export default CategoryFilter;

  
  
  
  
  
  
  

