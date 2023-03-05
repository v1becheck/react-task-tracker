// import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Buy Flowers',
      day: 'March 8th at 10:00am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Shop T-Shirt',
      day: 'March 10th at 16:00pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Stream on Twitch',
      day: 'March 5th at 10:00am',
      reminder: true,
    },
  ]);

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

export default App;
