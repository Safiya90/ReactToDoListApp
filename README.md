# 📘 React Beginner Guide (Based on [react.dev/learn](https://react.dev/learn))

Welcome to the **React Beginner Guide**! This guide walks you through React's fundamentals step-by-step, using clear examples and practical explanations — perfect for beginners.

---

## 🟢 Quick Start

### Install Vite + React
```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```
This creates a fast development environment using **Vite**.

---

## 🧱 Describing the UI

In React, we describe the UI using **JSX** — a mix of JavaScript and HTML:
```jsx
function MyButton() {
  return <button>Click me</button>;
}
```
This returns a button element. React converts it into real DOM under the hood.

---

## ✨ Adding Interactivity

Use the `onClick` event to respond to user actions:
```jsx
function MyButton() {
  function handleClick() {
    alert("Hello from React!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

---

## 🧠 Managing State

React’s `useState()` hook lets you create reactive variables:
```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>
```

---

## 🧩 Conditional Rendering

Show elements only if a condition is met:
```jsx
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
```

---

## 🔁 Rendering Lists

Use `.map()` with a `key` prop to render multiple items:
```jsx
const tasks = ['Task 1', 'Task 2'];

<ul>
  {tasks.map(task => <li key={task}>{task}</li>)}
</ul>
```

---

## 🧼 Keeping Components Pure

A **pure component** doesn't modify things outside its scope and gives the same output for the same inputs.

✅ Do:
```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

---

## 📦 Extracting Components

Break complex UIs into smaller reusable parts:
```jsx
function App() {
  return <MyButton />;
}

function MyButton() {
  return <button>Click</button>;
}
```

---

## 📤 Passing Props

Props pass data from parent → child component:
```jsx
<MyButton label="Click me" />

function MyButton({ label }) {
  return <button>{label}</button>;
}
```

---

## 📸 State as a Snapshot

React "remembers" the value from the time it renders:
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function handleAlert() {
    setTimeout(() => alert(count), 1000); // Shows old count!
  }
}
```

---

## 🧮 Queueing a Series of State Updates

Always use the function form when updates depend on the previous state:
```jsx
setCount(c => c + 1);
setCount(c => c + 1); // Adds 2 safely
```

---

## 🛠️ Updating Objects in State

Use the spread operator to keep immutability:
```jsx
setUser(prev => ({ ...prev, age: 30 }));
```

---

## 📋 Updating Arrays in State

You can `map`, `filter`, or `concat`:
```jsx
setTasks(prev => prev.filter(t => t.id !== id));
```

---

## 🖊️ Reacting to Input with State

Create a controlled component:
```jsx
<input value={name} onChange={e => setName(e.target.value)} />
```

---

## 🔗 Sharing State Between Components

Lift the state up to the nearest parent to share:
```jsx
<Parent>
  <Child1 data={shared} />
  <Child2 data={shared} />
</Parent>
```

---

## 🔁 Preserving and Resetting State

React resets state when a component is removed and re-added unless it’s kept in a parent.

---

## 🧠 Extracting State Logic into a Reducer

When state is complex, use `useReducer`:
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## 🌐 Passing Data Deeply with Context

Use React Context to avoid prop-drilling:
```jsx
const ThemeContext = createContext('light');
```

---

## 🧱 Scaling Up with Reducer and Context

Use both `Context` and `Reducer` together to build global state managers.

---

## ✅ You're Ready!

From here you can:
- Build a Todo App
- Learn routing with `react-router-dom`
- Manage global state using tools like Redux or Zustand
