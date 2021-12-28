import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet
} from 'react-router-dom';
import './App.css';
import SimpleDiv from './SimpleDiv';

function App() {
  return (
    <>
      <h1>Router App</h1>
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/foo">Foo</Link>
                </li>
                <li>
                  <Link to="/foo/bar">Foo Bar</Link>
                </li>
                <li>
                  <Link to="/foo/somethingelse">Something else</Link>
                </li>
              </ul>
            </nav>
          </div>



          <Routes>
            <Route path="/" element={<SimpleDiv message="You're at the home page"/>} />
            <Route path="/about" element={<SimpleDiv message="You're at the about page"/>} />
            <Route path="/foo">
              <Route path="" element={<SimpleDiv message="Foo" />} />
              <Route path="bar" element={<SimpleDiv message="Foo Bar" />} />
              <Route path=":id" element={<SimpleDiv message="ID: " />} />
            </Route>
          </Routes>

        </Router>
      </div>
    </>
  );
}

export default App;
