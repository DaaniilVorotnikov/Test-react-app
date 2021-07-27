import './App.css';
import List from './List';

function App() {
  const does = [
    {id: 1, complited:false, title: "New text 1"},
    {id: 2, complited:false, title: "New text 2"},
    {id: 3, complited:false, title: "New text 3"}
  ]
  return (
    <div className='wrapper'>
      <h1>Tutorial </h1>
      <List dos={does} key={does.id}/>
    </div>
  );
}

export default App;
