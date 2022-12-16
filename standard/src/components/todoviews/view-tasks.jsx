import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function view() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function echoData() {
      const response = await axios.get("http://127.0.0.1:8000/api/index/");
      console.log(response.data);
      setTodos(response.data);
    }
    echoData();
  }, []);
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((Todo) => (
              <tr key={Todo.id}>
                <td>{Todo.id} </td>
                <td>{Todo.todo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <Link to="/Addtodos">add a task</Link> 
      </div>
    </div>
  );
}

export default view;