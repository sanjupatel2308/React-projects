import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import data from './data';
// import { Route, Routes } from 'react-router-dom';

class App extends Component{
  
constructor () {
  super();
  this.state={
    studentList:data,
    branchName:"all",
    rollStatus: false
  }}
  branchStudent = (branch) =>{
     this.setState({branchName:branch});
  }


addStudent=()=>{
  let Rollno= this.roll.value;
  let Name= this.name.value;
  let Mobile= this.mobile.value;
  let Branch= this.branch.value;
  let newStudent= {Rollno,Name,Mobile,Branch};
  this.setState({studentList : [...this.state.studentList,newStudent]}); 
}
  validateRoll = ()=>{
    let roll = this.roll.value;
    let status = this.state.studentList.some((student)=>student.roll == roll);
    this.setState({rollStatus: status});
  }
  deleteRecord = (rollNumber)=>{
    if(window.confirm("Are you sure ?")){
      let index = this.state.studentList.findIndex((student)=>student.roll == rollNumber);
      this.state.studentList.splice(index,1);
      this.setState({studentList: this.state.studentList});
    }
  }
  render(){

  return <div>
    <div className="container">
        <div className='row bg-danger '>
          <div className='col-12 text-center font-'><h2>Student </h2></div>
        </div>

      <div className='form-group'>
      <div className='row mt-5'>
        <div className='col-5'>
          <input onBlur={this.validateRoll} ref={(roll)=>this.roll=roll} type="text" placeholder="Enter Roll No." className='w-75'/>
           {this.state.rollStatus && <small className='text-danger'>Roll number is already taken</small>}
        </div>
        <div className='col-5'>
          <input ref={(name)=>this.name=name} type="text" placeholder="Enter Name" className='w-75'/>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-5'>
          <input ref={(mobile)=>this.mobile=mobile} type="text" placeholder="Enter Mobile No." className='w-75'/>
        </div>
        <div className='col-5'>
         
          <select ref={(branch)=>this.branch=branch} className='w-75'>
            <option value="0">Select Branch</option>
            <option value="CS">CS</option>
            <option value="IT">IT</option>
            <option value="CV">CV</option>
            <option value="EC">EC</option>
           </select>

        </div>

      </div>
      <div className='row'>
      <div className='col-2'>
        <button onClick={this.addStudent} className='btn btn-primary mt-3 w-100'> ADD</button>
      </div>
      <div className='col-7 text-right'>
        <button onClick={()=>{this.branchStudent('CS')}} className='btn btn-danger mt-3 text-right m-2'> CS ({this.state.studentList.filter((student)=>this.state.branch=="CS").length})</button>
        <button onClick={()=>{this.branchStudent('IT')}} className='btn btn-warning mt-3 text-right m-2'> IT ({this.state.studentList.filter((student)=>this.state.branch=='IT').length})</button>
        <button onClick={()=>{this.branchStudent('CV')}} className='btn btn-primary mt-3 text-right m-2'> CV ({this.state.studentList.filter((student)=>this.state.branch=='CV').length})</button>
        <button onClick={()=>{this.branchStudent('EC')}} className='btn btn-info mt-3 text-right m-2'> EC ({this.state.studentList.filter((student)=>this.state.branch=='EC').length})</button>
        <button onClick={()=>{this.changeBranchFilter("all")}} className="btn btn-outline-success ml-1"> Total: ({this.state.studentList.length})</button>
      </div>
      </div>
    </div>


        <table className='table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Roll no</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Branch</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.state.studentList.filter((student)=>this.state.branchName=='all'||student.Branch==this.state.branchName).map((student,index)=>
          <tr>
          <td>{++index}</td>
          <td>{student.Rollno}</td>
              <td>{student.Name}</td>
              <td>{student.Mobile}</td>
              <td>{student.Branch}</td>
              <td>
                <button  onClick={()=>this.deleteRecord(student.roll)}  className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>)}
         
          </tbody>
        </table>
          
        </div>
    </div>


  }
}

export default App;
