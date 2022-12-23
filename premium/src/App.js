import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home'; 
import Addtodos from './components/todoviews/Addtodos';
import Edittodos from './components/todoviews/Edittodos';
import Indextodos from './components/todoviews/view-tasks';
import {BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h3>
        <Link to="/">Home</Link>{" "}
      </h3>

      <h3>
        <Link to="/Indextodos">view tasks</Link>
      </h3>

      <h3>
        <Link to="/Addtodos">Add task</Link>
      </h3>
      <h3>
        <Link to="/Edittodos/:id">Edit task </Link>
      </h3>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addtodos" element={<Addtodos />} />
        <Route path="/Indextodos" element={<Indextodos />} />
        <Route path="/Edittodos/:id" element={<Edittodos />} />
      </Routes>
    </div>
  );
}

export default App;
