import React from 'react';
import './App.css';

const myTasks = ['lavar a louça', 'limpar o chão', 'lavar o banheiros'];
const taskLi = (value) => {
  return (
  <li>{value}</li>
  )
}

function App() {
  return (
  <ul>
    {/* {myTasks.map(task => <li>{task}</li>)} */}
    {myTasks.map(task => taskLi(task))}
  </ul>
  );
}

export default App;
