import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Todo from './components/Todo';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  // بيانات التصنيفات
  const [categories, setCategories] = useState([
    { id: 1, name: 'Perspnal', icon: '👤', color: '#3498db', count: 2 },
    { id: 2, name: 'Work', icon: '💼', color: '#2ecc71', count: 3 },
    { id: 3, name: 'Study', icon: '📚', color: '#e74c3c', count: 1 },
  ]);

  // بيانات المهام
  const [todos, setTodos] = useState([
    { id: 1, text: ' React Project', completed: false, categoryId: 1 },
    { id: 2, text: 'Read new book', completed: true, categoryId: 1 },
    { id: 3, text: 'Send reports to clients', completed: false, categoryId: 2 },
    { id: 4, text: 'Meeting with clients', completed: false, categoryId: 2 },
  ]);

  // التصنيف النشط حالياً
  const [activeCategory, setActiveCategory] = useState(1);

  // استرجاع البيانات من localStorage عند بدء التطبيق
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    const savedCategories = localStorage.getItem('categories');
    
    if (savedTodos) setTodos(JSON.parse(savedTodos));
    if (savedCategories) setCategories(JSON.parse(savedCategories));
  }, []);

  // حفظ البيانات في localStorage عند تغييرها
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [todos, categories]);

  // إضافة تصنيف جديد
  const handleAddCategory = (name) => {
    const newCategory = {
      id: Date.now(),
      name,
      icon: '📝',
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
      count: 0
    };
    setCategories([...categories, newCategory]);
  };

  // إضافة مهمة جديدة
  const handleAddTodo = (text, categoryId) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      categoryId
    };
    setTodos([...todos, newTodo]);
    
    // تحديث عدد المهام في التصنيف
    setCategories(categories.map(cat => 
      cat.id === categoryId ? { ...cat, count: cat.count + 1 } : cat
    ));
  };

  // تبديل حالة المهمة (مكتملة/غير مكتملة)
  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // حذف مهمة
  const handleDeleteTodo = (id) => {
    const todoToDelete = todos.find(todo => todo.id === id);
    setTodos(todos.filter(todo => todo.id !== id));
    
    // تحديث عدد المهام في التصنيف
    if (todoToDelete) {
      setCategories(categories.map(cat => 
        cat.id === todoToDelete.categoryId ? { ...cat, count: cat.count - 1 } : cat
      ));
    }
  };

  // تعديل مهمة
  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <div className="sidebar">
          <Category 
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            onAddCategory={handleAddCategory}
          />
        </div>
        <div className="content">
          <Todo 
            todos={todos}
            categoryId={activeCategory}
            onAddTodo={handleAddTodo}
            onToggleTodo={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
            onEditTodo={handleEditTodo}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
