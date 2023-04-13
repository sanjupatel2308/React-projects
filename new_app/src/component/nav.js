import {Link} from 'react-router-dom'; 
 

 function Nav() {

 
<nav class="navbar navbar-expand-sm bg-light">

      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" href="#">Link 1</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Link 2</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Link 3</Link>
        </li>
      </ul>

    </nav>

 }
 export default Nav;