import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Dashboard from "./dashboard";
// import Indexx from "./indexx";
// import Profile from "./profile";
// import Edit from "./edit";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/edit">
            <Edit />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/indexx">
            <Indexx />
          </Route> */}
          <Route path="/dashboard">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
