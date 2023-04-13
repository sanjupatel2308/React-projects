import logo from './logo.svg';
import './App.css';
import data from './data';
import { Component } from 'react';

class App extends Component {

  constructor () {
  super();
  this.state={
    taskList:data,
     priorites:[{id:1, priority: "Low"},{id:2, priority: "Normal"},{id:3, priority: "High"}]
  }}
 
addTask = ()=>{
  let title = this.title.value;
  let pid = this.priority.value;
  let date = new Date();
  date = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  let status = 'active';  
  let id = this.state.taskList.length+2;
  let newTask = {id,title,pid,date,status};
  this.setState({
    taskList: [...this.state.taskList,newTask]
  })
}
  render() {
    return <div className="container">
      <div className='row bg-danger '>
        <div className='col-12 text-center font-'><h2>To Do List </h2></div>
      </div>

      <div className='form-group'>
        <div className='row mt-5'>
          <div className='col-5'>
            <input type="text" placeholder="Enter Task" className='w-75' />
          </div>
          <div className='col-5'>

            <select className='w-75' placeholder='Priority'>
              <option value="High">High</option>
              <option value="Normal" default>Normal</option>
              <option value="Low">Low</option>
            </select>


          </div>
        </div>

        <div className='row'>
          <div className='col-2'>
            <button onClick={this.addTask} className='btn btn-outline-success mt-3 w-100'> ADD Task</button>
          </div>
        </div>

        <div className='row'>
          <div className='col-2'>
            <button onClick={this.addtask} className='btn btn-primary mt-3 w-100'> Active (0)</button>
          </div>
          <div className='col-2'>
            <button onClick={this.addtask} className='btn btn-success mt-3 w-100'> Deactive (0)</button>
        </div>
        </div>
      </div>

    
      <table className='table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
          {this.state.taskList.map((task,index)=>
          <tr>
            <td>{++index}</td>
            <td>{task.title}</td>
            <td>{task.date}</td>
            <td>{task.pid}</td>
      
            <td> <button className='btn btn-danger'> {task.status}</button> </td>
            
          </tr>
         
         )}
          
          </tbody>
        </table>


    </div>



  }
}

export default App;