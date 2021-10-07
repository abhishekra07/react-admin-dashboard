import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './app.css';

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
