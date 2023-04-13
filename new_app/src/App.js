import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Nav from './component/nav';
import Student from './component/student';

function App() {
  return <div className='container'>
    <Nav/>
    <Student/>

</div>


// onBlur={this.validateRoll} ref={(roll) => this.roll = roll}
// ref={(name) => this.name = name}
// ref={(mobile) => this.mobile = mobile}
//  ref={(branch) => this.branch = branch}
}
export default App;
