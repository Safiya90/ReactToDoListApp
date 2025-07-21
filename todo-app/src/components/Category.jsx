import React from 'react';
import './Category.css';

const Category = ({ categories, activeCategory, onSelectCategory, onAddCategory }) => {
  const [newCategory, setNewCategory] = React.useState('');

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      onAddCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <div className="category-container">
      <h2> Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
          >
            <span className="category-icon" style={{ backgroundColor: category.color }}>
              {category.icon}
            </span>
            <span className="category-name">{category.name}</span>
            <span className="category-count">{category.count}</span>
          </div>
        ))}
      </div>
      <div className="add-category">
        <input
          type="text"
          placeholder="Add category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>+</button>
      </div>
    </div>
  );
};

export default Category;
