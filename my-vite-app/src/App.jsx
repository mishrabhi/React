import React, {useState} from 'react';

function App(){
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if(input.trim()){
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div style={{padding: "20px"}}>
      <h1>Simple Todo List</h1>
      <input type='text' value={input} onChange={handleInputChange} placeholder='Add a new Task'/>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
};

export default App;