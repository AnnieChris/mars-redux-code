import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import Assignments from './components/Assignments/Assignments';
import Demo from './components/Demo/Demo';
import References from './components/References';



function App() {
  return (
    <div className="App">
      <h1> Welcome to my React Redux page</h1>

      <Router>
      <Link to="/home">Home </Link> | <Link to="/assignment">Assignments </Link> | <Link to="/demo">Demo </Link>|<Link to="/references">References </Link>
         

        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/assignment' element={<Assignments />}></Route>
          <Route path='/demo' element={<Demo />}></Route>
          <Route path='/references' element={<References />}></Route>
        </Routes>
      </Router> 
    </div>
  );

function HomePage() {
    return (
      <Home/>
    );
  }
  function AssignmentsPage() {
    return (
      <Assignments/>
    );
  }
  function DemoPage() {
    return (
      <Demo/>
    );
  }
  function ReferencesPage() {
    return (
      <References/>
    );
  }
}

export default App;
